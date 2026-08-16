import { MetadataRoute } from 'next';

const baseUrl = 'https://airtixholiday.com';

// This is currently a single-page site (no CMS or nested routes), so
// there's nothing to fetch dynamically yet. Structured as an array of
// route entries so adding a real subpage later (e.g. a /blog listing
// pulled from a CMS) is a matter of appending entries here rather than
// rewriting the file.
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes];
}
