import feedbacksHome from "/public/projects-images/feedbacks-home.png";
import feedbacksBrands from "/public/projects-images/feedbacks-brands.png";
import feedbacksCategories from "/public/projects-images/feedbacks-categories.png";
import aidHome from "/public/projects-images/aid-home.png";
import aidProcessing from "/public/projects-images/aid-processing.png";
import aidResult from "/public/projects-images/aid-result.png";
import solideHome from "/public/projects-images/sol-ide-home.png";
import solideOpen from "/public/projects-images/sol-ide-open.png";
import solideCompiler from "/public/projects-images/sol-ide-compiler.png";
import solideDeployment from "/public/projects-images/sol-ide-deployment.png";
import solideTests from "/public/projects-images/sol-ide-tests.png";
import walletproUnlock from "/public/projects-images/walletpro-unlock.png";
import walletproSettings from "/public/projects-images/walletpro-settings.png";
import FeedbacksSummary from "@/components/FeedbacksSummary.mdx";
import SolIDESummary from "@/components/SolIDESummary.mdx";

export const products = [
  {
    href: "https://sendfeedbacks.com",
    title: "Feedbacks",
    description:
      "A Platform to send, collect and manage feedbacks for both users and for brands.",
    thumbnail: feedbacksHome,
    images: [feedbacksHome, feedbacksBrands, feedbacksCategories],
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
    thumbnail: aidHome,
    images: [aidHome, aidProcessing, aidResult],
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
    thumbnail: solideOpen,
    images: [solideHome, solideOpen, solideCompiler, solideDeployment, solideTests],
    stack: ["Nextjs", "Tailwindcss", "ShadcnUI", "Zustand"],
    slug: "sol-ide",
    content: (
      <div>
        <p>
          Create
          Start building your smart contracts
          ✓ Open the file explorer
          ✓ Create or edit Solidity files
          ✓ Your files are persisted
          ✓ All basic editor operations supported
        </p>
        <div>
          {/*<SolIDESummary />*/}
          Some of the best features of Sol-IDE:
          <br/>
          1. Sol-IDE works on Mobile, that means you can write, run and test Solidity Smart Contracts on Mobile. <br/>
          2. Sol-IDE works well with all major wallets. It also allows you to test using virtual wallets, it is a bring your wallet-first platform. <br/>
          3. Sol-IDE works with all major blockchains. It provides support for 67 major blockchains and that number also looks to grow rapidly. <br/>
          4. Sol-IDE is built on modern technologies, that means more optimized performance and better user experience, with a captivating UI that does not strain your eye. <br/>
          5. Sol-IDE is built for the unreached 6 billion crypto users and devs. <br/>
          6. Sol-IDE is built to quickly onboard people to the world of Blockchain Programming. <br/>
        </div>{" "}
      </div>
    ),
  },
  {
    href: "https://walletpro.com",
    title: "Wallet Pro",
    description:
      "A Smart Web3 Wallet built for humans.",
    thumbnail: walletproUnlock,
    images: [walletproUnlock, walletproSettings],
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
