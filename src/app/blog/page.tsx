import { Metadata } from 'next';
import BlogListing from '@/components/BlogListing';

export const metadata: Metadata = {
  title: "Blog | WebSync Digital - Digital Insights for Nigerian SMEs",
  description: "Read our latest stories on web design, SEO, and digital strategy to help you dominate the Nigerian market.",
};

export default function BlogPage() {
  return <BlogListing />;
}
