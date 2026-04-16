import { MetadataRoute } from 'next';
import { allBlogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://websyncdigital.com.ng';
  
  const posts = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${baseUrl}/assets/logo.png`,
        `${baseUrl}/assets/hero-image.jpg`,
        `${baseUrl}/assets/paystack-logo.jpg`,
      ],
    },
    {
      url: `${baseUrl}/west`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${baseUrl}/assets/west_profile_updated.jpg`],
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...posts.map(p => ({
      ...p,
      images: [allBlogPosts.find(bp => `${baseUrl}/blog/${bp.id}` === p.url)?.image || ''],
    })),
  ];
}
