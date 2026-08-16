import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private/'],
      },
      // Block aggressive scrapers used mainly for bulk training-data
      // harvesting, not for search indexing or AI answer citations.
      // (llms.txt above is deliberately left open for answer engines
      // like GPTBot, ClaudeBot, and PerplexityBot.)
      {
        userAgent: ['Bytespider', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://airtixholiday.com/sitemap.xml',
  };
}
