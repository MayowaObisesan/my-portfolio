import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseResponsibilities(html: string): string[] {
  if (!html) return [];

  // Match all <li> content directly
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  const matches = [...html.matchAll(liRegex)];

  if (matches.length > 0) {
    return matches
      .map(match => match[1])
      .map(content => {
        // Remove inner HTML tags (like <p>) and decode entities
        return content
          .replace(/<[^>]+>/g, '')           // Strip all HTML tags
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .trim();
      })
      .filter(item => item.length > 0);
  }

  return [];
}
