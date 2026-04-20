import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Mayowa Obisesan - a full-stack developer. Reach out via email or connect on social platforms.",
  openGraph: {
    title: "Contact Me | Mayowa Obisesan",
    description: "Get in touch with Mayowa Obisesan - a full-stack developer.",
    type: "website",
    images: ["/images/my_profile_picture_blurred.jpg"],
  },
};

export default function Projects() {
  return (
    <Container>
      {/*<span className="text-4xl">✉️</span>*/}
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me directly via email or connect on social platforms. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
