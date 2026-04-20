import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Heading className="text-9xl font-black text-muted-foreground">404</Heading>
        <Heading as="h1" className="font-black mt-4">
          Page Not Found
        </Heading>
        <Paragraph className="max-w-md mt-4">
          Oops! The page you're looking for doesn't exist. It might have been moved
          or deleted.
        </Paragraph>
        <Link href="/" className="mt-8">
          <Button className="gap-2">
            <Home size={18} />
            Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
}
