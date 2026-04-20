"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="invisible md:visible absolute -left-4 md:left-44 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col md:space-x-16 space-x-0 md:space-y-0 space-y-4 my-12 relative"
          key={`timeline-${item.company}-${index}`}
        >
          {/* Date column */}
          <div className="md:w-36 flex-shrink-0 md:text-right relative">
            {/* Timeline dot */}
            {/*<div className="absolute -left-4 md:-right-2 top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background z-10" />*/}
            <Paragraph className="text-sm text-neutral-500">{item.date}</Paragraph>
            <div className="absolute right-0 md:-right-10 top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background z-10" />
          </div>

          {/* Content */}
          <div className="flex-1 pl-6 md:pl-0">
            <Heading
              as="h5"
              className="text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base font-semibold">
              {item.title}
            </Paragraph>
            {item.description && (
              <Paragraph className="text-sm mb-4 text-neutral-500">
                {item.description}
              </Paragraph>
            )}

            <ul className="space-y-3">
              {item.responsibilities.map((responsibility, idx) => (
                <li key={`resp-${index}-${idx}`} className="flex items-start gap-2">
                  <IconCircleCheckFilled className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                  <Paragraph className="text-sm">{responsibility}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
