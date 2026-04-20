import {Container} from "@/components/Container";
import {SingleProduct} from "@/components/Product";
import {products} from "@/constants/products";
import {Product} from "@/types/products";
import {Metadata} from "next";
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LucideArrowLeft} from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | John Doe",
      description:
        "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default async function SingleProjectPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      {/*<Heading as={'h4'} className={'uppercase'}>{slug}</Heading>*/}
      <Link href={'/projects'} passHref>
        <Button
          className={'cursor-pointer'}
          variant={'link'}
        >
          <LucideArrowLeft/> Back
        </Button>
      </Link>
      <SingleProduct product={product}/>
    </Container>
  );
}
