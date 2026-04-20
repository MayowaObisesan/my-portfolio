import { videos, channelUrl } from "@/constants/videos";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconBrandYoutube } from "@tabler/icons-react";

export default function VideosPage() {
  return (
    <div className="w-full px-4 md:px-10 py-20">
      {/* Header */}
      <div className="mb-12">
        <Heading className="text-2xl md:text-4xl mb-4">
          Videos
        </Heading>
        <Paragraph className="text-lg text-muted-foreground max-w-2xl">
          A collection of my video content including tutorials, project demos,
          and tech discussions from my YouTube channel.
        </Paragraph>
        <Link href={channelUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="destructive" className="mt-4 gap-2">
            <IconBrandYoutube className="h-6 w-6" />
            Subscribe on YouTube
          </Button>
        </Link>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Empty State */}
      {videos.length === 0 && (
        <div className="text-center py-20">
          <IconBrandYoutube className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <Heading as="h3" className="text-xl mb-2">
            No videos yet
          </Heading>
          <Paragraph className="text-muted-foreground">
            Check back soon for video content!
          </Paragraph>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300">
      {/* YouTube Embed */}
      {/*<div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>*/}

      <div className={'relative aspect-video w-full'}>
        <iframe
          // width="560"
          // height="315"
          className={'w-full h-full inset-0'}
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="p-4">
        <Heading as="h3" className="text-lg line-clamp-2 group-hover:text-emerald-500 transition-colors">
          {video.title}
        </Heading>
        <Paragraph className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {video.description}
        </Paragraph>
      </div>
    </div>
  );
}
