"use client";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import resumeData from "./ResumeData/Mayowa_CV_2025.json";

export const ResumeSkills = () => {
  const skills = resumeData.sections.skills;

  if (!skills.visible) return null;

  return (
    <div className="mb-8">
      <Heading as="h2" className="text-2xl font-bold mb-4">
        {skills.name}
      </Heading>
      {skills.items
        .filter((item: any) => item.visible)
        .map((item: any, index: number) => (
          <div key={item.id} className="mb-4">
            <Paragraph className="font-semibold">
              {item.name || "Skills"}
            </Paragraph>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.keywords.map((keyword: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-sm text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
