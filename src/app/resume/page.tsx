"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { ResumeSummary } from "@/components/ResumeSummary";
import { WorkHistory } from "@/components/WorkHistory";
import { ResumeSkills } from "@/components/ResumeSkills";
import { ResumeProfiles } from "@/components/ResumeProfiles";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <ResumeSummary />
      <WorkHistory />
      <ResumeSkills />
      <ResumeProfiles />
    </Container>
  );
}
