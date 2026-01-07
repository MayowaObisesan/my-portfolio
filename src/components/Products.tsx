"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {LucideConstruction} from "lucide-react";
import {cn} from "@/lib/utils";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href}
              className={cn(
                "relative group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-muted/50 rounded-2xl transition duration-200 p-2",
                !product.isActive && "bg-destructive/10",
              )}
            >
              <Image
                src={product.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                {
                  !product.isActive && <div className={'absolute -top-8 -right-8 flex flex-row items-center gap-2 px-2 py-1.5 rounded-sm bg-secondary -rotate-3'}>
                        <LucideConstruction color={'yellow'} size={28} />
                        <Badge className={'px-2 py-2 rounded-sm text-sm'} variant={'destructive'}> Under Maintenance</Badge>
                    <span className={'absolute -top-1 -right-1 bg-orange-400/60 rounded-full size-6 animate-pulse'}></span>
                    <span className={'absolute -top-0 -right-0 bg-amber-300 rounded-full size-4 animate-pulse'}></span>
                  </div>
                }
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 not-md:max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap space-x-2 space-y-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs md:text-xs lg:text-xs bg-muted-foreground/20 px-2 py-1 rounded text-foreground"
                    >
                      {stack}
                    </span>
                  ))}

                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
