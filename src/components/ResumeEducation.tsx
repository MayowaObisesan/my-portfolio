import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import resumeData from "./ResumeData/Mayowa_CV_2025.json";

export const ResumeEducation = () => {
  const education = resumeData.sections.education;

  if (!education.visible) return null;

  return (
    <div className="mb-8">
      <Heading as="h2" className="text-2xl font-bold mb-4">
        {education.name}
      </Heading>
      {education.items
        .filter((item: any) => item.visible)
        .map((item: any, index: number) => (
          <div key={item.id} className="mb-4">
            <Paragraph className="font-semibold">
              {item.institution}
            </Paragraph>
            <Paragraph className="text-sm text-gray-600">
              {item.studyType} in {item.area} | {item.score} | {item.date}
            </Paragraph>
            {item.summary && (
              <div
                className="text-sm mt-2"
                dangerouslySetInnerHTML={{ __html: item.summary }}
              />
            )}
          </div>
        ))}
    </div>
  );
};
