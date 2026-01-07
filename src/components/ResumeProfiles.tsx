"use client";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import resumeData from "./ResumeData/Mayowa_CV_2025.json";
import Link from "next/link";

export const ResumeProfiles = () => {
  const profiles = resumeData.sections.profiles;

  if (!profiles.visible) return null;

  return (
    <div className="mb-8">
      <Heading as="h2" className="text-2xl font-bold mb-4">
        {profiles.name}
      </Heading>
      <div className="flex flex-wrap gap-4">
        {profiles.items
          .filter((item: any) => item.visible)
          .map((item: any, index: number) => (
            <Link
              key={item.id}
              href={item.url.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-700 underline"
            >
              {item.network}
            </Link>
          ))}
      </div>
    </div>
  );
};
