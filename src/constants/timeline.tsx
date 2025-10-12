import resumeData from "@/components/ResumeData/Mayowa_CV_2025.json";
import { parseResponsibilities } from "@/lib/utils";

const mainExperiences = resumeData.sections.experience.items
  .filter((item: any) => item.visible)
  .map((item: any) => ({
    company: item.company,
    title: item.position,
    date: item.date,
    description: item.location || "",
    responsibilities: parseResponsibilities(item.summary),
  }));

const customExperiences = resumeData.sections.custom['dobhg8f0awuglcx5tistcjmb'].items
  .filter((item: any) => item.visible)
  .map((item: any) => ({
    company: item.name,
    title: item.description,
    date: item.date,
    description: item.location || "",
    responsibilities: parseResponsibilities(item.summary),
  }));

export const timeline = [...mainExperiences, ...customExperiences];
