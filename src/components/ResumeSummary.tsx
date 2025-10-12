import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import resumeData from "./ResumeData/Mayowa_CV_2025.json";

export const ResumeSummary = () => {
  const basics = resumeData.basics;
  const summary = resumeData.sections.summary;

  if (!summary.visible) return null;

  return (
    <div className="mb-8">
      <Heading as="h2" className="text-2xl font-bold mb-4">
        {basics.name}
      </Heading>
      <Paragraph className="text-lg text-emerald-500 mb-2">
        {basics.headline}
      </Paragraph>
      <div className="text-sm text-gray-600 mb-4">
        <p>{basics.email} | {basics.phone}</p>
        {basics.location && <p>{basics.location}</p>}
      </div>
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: summary.content }}
      />
    </div>
  );
};
