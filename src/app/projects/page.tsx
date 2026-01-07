import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Mayowa Obisesan",

  description:
    "Hey there, I'm Mayowa Obisesan\n" +
    "Nickname: amtheblessed\n" +
    "I Love tech and I'm a versatile Software Engineer that build daily."
};

export default function Projects() {
  return (
    <Container>
      {/*<span className="text-4xl">⚡</span>*/}
      <Heading className="font-black mb-10 leading-tight">
        {" "}
        What I&apos;ve been working on in my spare time
      </Heading>

      <Products />
    </Container>
  );
}
