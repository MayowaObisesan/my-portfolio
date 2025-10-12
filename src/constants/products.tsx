import sidefolioAceternity from "/public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "/public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "/public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "/public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "/public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "/public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "/public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "/public/images/sidefolio-tailwindmasterkit-2.png";
import FeedbacksSummary from "@/components/FeedbacksSummary.mdx";

export const products = [
  {
    href: "https://sendfeedbacks.com",
    title: "Feedbacks",
    description:
      "A Platform to send, collect and manage feedbacks for both users and for brands.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["React Router", "Tailwindcss", "Zustand", "HeroUI"],
    slug: "feedbacks",
    content: (
      <div>
        <FeedbacksSummary />
      </div>
    ),
  },
  {
    href: "https://ai-image-detector-three.vercel.app",
    title: "AI Image Detector",
    description:
      "A Platform that detects AI generated Images and is always up-to-date.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "ShadcnUI", "Tailwindcss", "Python"],
    slug: "mirror",
    content: (
      <div>
        <p>
          AI generated images are everywhere. It&apos;s hard to tell them apart
          from real images. This platform helps you detect AI generated images
          and always up-to-date.
        </p>
        <p>
          It uses the latest AI models to detect AI generated images and is
          always up-to-date with the latest Image Processing AI models. It&apos;s
          a work in progress and I&apos;m always looking to improve it.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sol-ide.org",
    title: "Sol-IDE",
    description:
      "Sol-IDE is a MODERN web-based IDE that makes writing Solidity programming language more accessible with secure templates to start with. " +
      "Now you can quickly test your contracts on mobile, desktop and everywhere",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss", "ShadcnUI", "Zustand"],
    slug: "sol-ide",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://walletpro.com",
    title: "Wallet Pro",
    description:
      "A Smart Web3 Wallet built for humans.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Radix UI", "ShadcnUI", "Tailwindcss", "Zustand", "Chrome Extension", "Web APIs"],
    slug: "wallet-pro",
    content: (
      <div>
        <p>
          Equipped with the latest Ethereum Account features and it makes using Crypto Wallet as easy as using WhatsApp.
          Wallet Pro is a Smart Web3 Wallet that supports the latest Ethereum Account features, completely ditches users paying for gas and has
          features that makes using Crypto Wallet as easy as using WhatsApp. It is built for the unreached 6 billion crypto users and devs.
        </p>
        <p>
          Wallet Pro is built for the unreached 6 billion crypto users and devs.
          1. It is extremely easy-to-setup even if you have no prior crypto experience. <br/>
          2. It removes all complexity of Crypto Wallets and features easy-to-use User Interface for a Rich, Expressive and Secure Crypto Experience.
          3. It is the first wallet built for humans.
        </p>{" "}
      </div>
    ),
  },
];
