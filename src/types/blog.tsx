export type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  categories?: string[];
  link?: string;
  pubDate?: string;
  // rest
  [key: string]: any;
};
