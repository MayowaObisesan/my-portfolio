"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black leading-normal">Hello there! I&apos;m Mayowa</Heading>
      <Paragraph className="max-w-3xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps <b><Highlight>that people can use</Highlight></b> and that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-3xl mt-4">
        I&apos;m a software engineer with{" "}
        <Highlight>years of experience</Highlight> building diverse products,
        I like to build products that are performance optimized and that are good looking.
      </Paragraph>

      {/*<ResumeSkills />*/}
      {/*<ResumeProfiles />*/}

      {/*<br /><br />*/}
      {/*<GithubStats />*/}

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-12 mb-4"
      >
        What I&apos;ve been working on for MYSELF AND THE ECOSYSTEM
      </Heading>

      <div
        id="retainable-rss-embed"
        // data-rss="https://medium.com/feed/retainable, https://medium.com/feed/vue-mastery, https://medium.com/feed/@mayowaobisesan"
        data-rss="https://medium.com/feed/@mayowaobisesan"
        data-maxcols="3"
        data-layout="grid"
        data-poststyle="inline"
        data-readmore="Read the rest"
        data-buttonclass="btn btn-primary"
        data-offset="-100"
      ></div>
      <Products />
      {/*<TechStack />*/}
    </Container>
  );
}
