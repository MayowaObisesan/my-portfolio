import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseResponsibilities(summary: string): string[] {
  if (!summary) return []

  // Remove <ul> and </ul> tags from the beginning and end
  let cleanedSummary = summary.replace(/^<(ul|UL)[^>]*>/, '').replace(/<\/(ul|UL)>$/i, '')

  // First try to parse as proper HTML with <li> tags
  const liItems = cleanedSummary.split(/<\/?li[^>]*>/i).filter(item => item.trim())

  if (liItems.length > 1) {
    // Had <li> tags, parse them properly
    return liItems.map(item => {
      // Remove any remaining <p> tags and trim
      return item.replace(/<\/?p[^>]*>/gi, '').trim()
    }).filter(item => item.length > 0)
  }

  // If no <li> tags found, split by double newlines or handle as plain text
  return cleanedSummary
    .split(/\n\s*\n/) // Split by paragraphs (double newlines)
    .map(item => item.replace(/<\/?p[^>]*>/gi, '').trim()) // Remove any remaining <p> tags
    .filter(item => item.length > 0)
}
