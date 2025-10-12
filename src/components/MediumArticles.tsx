"use client";

import React, { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {ButtonGroup} from "@/components/ui/button-group";
import {Button} from "@/components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {LayoutDashboard, ListIcon} from "lucide-react";

// Types for Medium RSS data
interface IMediumArticle {
  guid: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  content: string;
  imageUrl?: string;
  caption?: string;
  categories?: string[];
}

const MediumArticles = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [viewType, setViewType] = useState<"list" | "grid">("list");
  const [articles, setArticles] = useState<IMediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mayowaobisesan',
          { cache: 'no-store' }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        console.log("rss articles", data);

        if (data.items) {
          const formattedArticles: IMediumArticle[] = data.items.map((item: any) => ({
            guid: item.guid,
            title: item.title,
            categories: item.categories,
            content: item.content,
            description: item.description,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail: item.thumbnail
          }));

          setArticles(formattedArticles);
        }
      } catch (err) {
        console.error('Error fetching Medium articles:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  // Remove HTML tags and get first 150 characters
  const cleanDescription = (description: string) => {
    const cleanText = description.replace(/<[^>]*>/g, '');
    return cleanText.length > 150 ? cleanText.substring(0, 150) + '...' : cleanText;
  };

  if (loading) {
    return (
      <div className="mt-20">
        <Paragraph className="text-center text-muted">Loading Medium articles...</Paragraph>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20">
        <Paragraph className="text-center text-red-500">Error loading articles: {error}</Paragraph>
      </div>
    );
  }

  // Parse the first image and caption from HTML content
  const parseFirstImageFromContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const figure = doc.querySelector('figure');

    if (figure) {
      const img = figure.querySelector('img');
      const figcaption = figure.querySelector('figcaption');

      return {
        imageUrl: img?.src || img?.getAttribute('data-src') || null,
        caption: figcaption?.textContent?.trim() || null
      };
    }

    return { imageUrl: null, caption: null };
  };

  if (articles.length === 0) {
    return (
      <div className="mt-20">
        <Paragraph className="text-center text-gray-600">No articles found.</Paragraph>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className={'flex flex-row items-center justify-between'}>
        <Heading
          className="font-black text-lg md:text-lg lg:text-lg"
        >
          My Articles on Medium
        </Heading>

        <ToggleGroup size={'lg'} type="single" value={viewType} onValueChange={(value) => setViewType(value as "list" | "grid")}>
          <ToggleGroupItem value="list"><ListIcon size={16} /> List</ToggleGroupItem>
          <ToggleGroupItem value="grid"><LayoutDashboard size={16} /> Grid</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        {
          viewType === "list" ?
            <div className="max-w-5xl mx-auto my-10">
              {articles.map((article, index) => {
                const { imageUrl, caption } = parseFirstImageFromContent(article.content);

                return (
                  <motion.div
                    key={article.link}
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      key={`blog-${article.title}`}
                      href={`/blog/${article.link}`}
                      className="relative my-10 block"
                      onMouseEnter={() => setHovered(article.link)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <AnimatePresence mode="wait">
                        {hovered === article.link && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scaleX: 0.95,
                              scaleY: 0.95,
                            }}
                            animate={{
                              opacity: 1,
                              scaleX: 1.05,
                              scaleY: 1.2,
                            }}
                            exit={{
                              opacity: 0,
                              scaleX: 0.95,
                              scaleY: 0.95,
                            }}
                            className={"absolute z-0 pointer-events-none bg-muted inset-0 h-full w-full rounded-md"}
                          />
                        )}
                      </AnimatePresence>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
                        {imageUrl ? <Image
                          src={imageUrl}
                          alt="thumbnail"
                          height="200"
                          width="200"
                          objectFit="cover"
                          className="rounded-md object-cover h-40 w-60"
                        /> : <div className={'h-40 w-48 bg-muted rounded-md'}></div>}
                        <div className="flex flex-col col-span-3">
                          <Heading className="text-lg md:text-lg lg:text-lg">
                            {article.title}
                          </Heading>
                          <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                            {cleanDescription(article.description)}
                          </Paragraph>
                          <div className="flex space-x-2 flex-wrap mt-4">
                            {article.categories?.map((tag, index) => (
                              <Badge
                                variant={'secondary'}
                                key={`tag-${article.link}-${index}`}
                                // className="text-xs px-1 py-0.5 text-secondary border border-neutral-200 bg-white rounded-md"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-auto">
                            <time className="text-xs text-neutral-500">
                              {formatDate(article.pubDate)}
                            </time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => {
                const { imageUrl, caption } = parseFirstImageFromContent(article.content);

                return (
                  <motion.div
                    key={article.link}
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <a
                      key={index}
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-lg border border-border p-2 transition-colors"
                    >
                      <div className="flex flex-col">
                        {imageUrl ? (
                          <div className="mb-4">
                            <Image
                              src={imageUrl}
                              alt={caption || "Article image"}
                              height="200"
                              width="200"
                              className="rounded-md object-cover h-40 w-full"
                              onError={(e) => {
                                // Hide the image if it fails to load
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                            {/*{caption && (
                              <Paragraph className="lg:text-xs mt-2 text-center">
                                {caption}
                              </Paragraph>
                            )}*/}
                          </div>
                        ) : (
                          <div className="mb-4 h-40 bg-muted rounded-md"></div>
                        )}

                        <div
                          className="font-bold group-hover:text-emerald-600 transition-colors mb-3 line-clamp-2"
                        >
                          {article.title}
                        </div>

                        <Paragraph className="lg:text-sm mb-3 line-clamp-3">
                          {cleanDescription(article.description)}
                        </Paragraph>

                        <div className="mt-auto">
                          <time className="text-xs text-neutral-500">
                            {formatDate(article.pubDate)}
                          </time>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
        }
      </div>
    </div>
  );
};

export { MediumArticles };
