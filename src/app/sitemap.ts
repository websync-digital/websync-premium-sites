import { MetadataRoute } from 'next';
import { allBlogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://websyncdigital.com.ng';
  const now = new Date();

  // Individual blog posts — auto-mapped with their cover images
  const blogPosts = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: post.image ? [post.image] : [],
  }));

  return [
    // ── Tier 1: Homepage (critical anchor)
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${baseUrl}/icon.png`,
        `${baseUrl}/assets/hero-image.jpg`,
        `${baseUrl}/assets/paystack-logo.jpg`,
      ],
    },

    // ── Tier 2: Core commercial pages (sitelink targets)
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Tier 3: Authority pages
    {
      url: `${baseUrl}/west`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [`${baseUrl}/assets/west_profile_updated.jpg`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ── Tier 4: Blog posts
    ...blogPosts,

    // ── Tier 5: Legal / utility (minimal crawl budget)
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];
}
