"use client";

// import resumeData from "@/components/ResumeData/Mayowa_CV_2025.json";
import resumeData from "@/components/ResumeData/mayowacv2026.json";
import { parseResponsibilities } from "@/lib/utils";

const mainExperiences = resumeData.sections.experience.items
  .filter((item: any) => !item.hidden)
  .map((item: any) => ({
    company: item.company,
    title: item.position,
    date: item.date || item.period,
    description: item.location || "",
    responsibilities: parseResponsibilities(item.description),
  }));

// const customExperiences = resumeData.sections.custom['dobhg8f0awuglcx5tistcjmb'].items
//   .filter((item: any) => item.visible)
//   .map((item: any) => ({
//     company: item.name,
//     title: item.description,
//     date: item.date,
//     description: item.location || "",
//     responsibilities: parseResponsibilities(item.summary),
//   }));

const customExperiences = resumeData.customSections.filter(it => ['dobhg8f0awuglcx5tistcjmb', '019da98e-d00e-74c0-b0ba-76e41e49d0f3'].includes(it.id))[0].items
  .filter((item: any) => !item.hidden)
  .map((item: any) => ({
    company: item.name,
    title: item.position,
    date: item.date || item.period,
    description: item.location || "",
    responsibilities: parseResponsibilities(item.description),
  }));

export const timeline = [...mainExperiences, ...customExperiences];
