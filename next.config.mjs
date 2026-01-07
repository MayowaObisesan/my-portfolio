/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    images: {
        domains: [
            "images.unsplash.com",
            "res.cloudinary.com",
            "twilik.com",
            "cdn-images-1.medium.com"
        ],
    },
    experimental: {
        mdxRs: true,
        // turbo: {
        //     loaders: {
        //         '.mdx': ['@mdx-js/loader'],
        //     },
        // },
    },
    // Configure MDX directly in the main config
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
    },
};

// const withMDX = nextMDX({
//     extension: /\.mdx?$/,
// });
//
// export default withMDX(nextConfig);

export default nextConfig;
