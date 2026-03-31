"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { allBlogPosts } from '@/data/blogData';

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  
  const filteredPosts = activeCategory === 'All Stories' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === activeCategory);

  const categories = ['All Stories', 'Business Strategy', 'Tech Trends', 'Marketing', 'UI/UX Design', 'Security', 'Ecommerce', 'Case Study'];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-[#050505] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-primary/10 blur-[110px] rounded-full" />
        </div>
        
        <div className="container-custom relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/30 hover:text-primary transition-colors duration-300 mb-12 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:-translate-x-1">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Back to Home</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest mb-8">
              Insights & Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight">
              The Digital Blueprint <br />
              <span className="text-primary italic">for Nigerian SMEs</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-body leading-relaxed max-w-2xl">
              Deep dives into technology, design, and growth strategies specifically tailored for the burgeoning West African business ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Categories/Filter */}
          <div className="flex items-center gap-4 mb-16 md:mb-20 border-b border-border pb-4 md:pb-8 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-4 min-w-max pb-4 md:pb-0 px-1">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 px-2 py-1 relative whitespace-nowrap ${
                    activeCategory === cat ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeCat"
                      className="absolute -bottom-[29px] md:-bottom-[33px] left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20 p-1">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 bg-zinc-100 shadow-sm border border-border/50">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-black rounded-lg shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 px-1">
                      <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">
                        <span>{post.date}</span>
                        <span className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                        <span>{post.author}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-medium leading-[1.2] group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-black/60 font-body leading-relaxed line-clamp-2 text-base md:text-lg">
                        {post.description}
                      </p>

                      <div className="pt-4 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read Article 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button (Visual) */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 pt-16 border-t border-border">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:-translate-x-1">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Return to Home</span>
            </Link>

            <button className="px-12 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-xl shadow-black/5">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-10 md:p-20 shadow-2xl relative overflow-hidden border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Join our newsletter for <br />
                <span className="text-primary italic">exclusive digital strategies</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">
                Weekly insights on SEO, branding, and tech trends to help you dominate the Nigerian market. No spam, only value.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your business email" 
                  className="flex-1 px-6 py-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm"
                  required
                />
                <button className="px-10 py-4 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-primary/20 transition-all">
                  Subscribe
                </button>
              </form>
              
              <p className="mt-6 text-[10px] text-muted-foreground uppercase tracking-widest">
                Join 500+ Nigerian SME owners getting ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
