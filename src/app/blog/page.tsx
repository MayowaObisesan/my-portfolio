import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Blogs } from "@/components/Blogs";
import { MediumArticles } from "@/components/MediumArticles";
import { Metadata } from "next";
// import {getAllBlogs} from "../../../lib/getAllBlogs";

export const metadata: Metadata = {
  title: "Blogs | Mayowa Obisesan",

  description:
    "Mayowa Obisesan is a developer, writer and speaker. Full-stack engineer passionate about technology, software development, and building impactful solutions."
};

export default async function Blog() {
  /*const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      {/!*<span className="text-4xl">📝</span>*!/}
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        I also <Highlight>talk about tech</Highlight>, but this is the page where I <Highlight>write about Tech.</Highlight>
        {/!*Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been fascinated by technology.*!/}
      </Paragraph>
      {/!*<Blogs blogs={data} />*!/}
      <MediumArticles />
    </Container>
  );*/
}
