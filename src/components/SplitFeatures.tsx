"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import feature1 from '@/assets/feature-1.jpg';
import feature2 from '@/assets/feature-2.jpg';
import feature3 from '@/assets/feature-3.jpg';

const features = [
  {
    title: 'Strategic Vision',
    subtitle: 'Strategy & Research',
    description:
      'We dive deep into your market, audience, and competition to craft strategies that position you for success. Every decision is backed by insight.',
    image: feature1,
    imageAlt: 'Modern creative design workspace with laptop and natural lighting for strategic planning',
  },
  {
    title: 'Creative Excellence',
    subtitle: 'Design & Development',
    description:
      'From concept to execution, we create stunning digital experiences that captivate users and drive engagement. Every pixel is intentional.',
    image: feature2,
    imageAlt: 'Hands sketching creative design concepts on paper for a new brand strategy',
  },
  {
    title: 'Collaborative Spirit',
    subtitle: 'Partnership & Growth',
    description:
      'We work alongside you as partners, not vendors. Your success is our success, and we are committed to your long-term growth.',
    image: feature3,
    imageAlt: 'Modern office meeting room with team collaboration and strategic mapping',
  },
];

interface FeatureBlockProps {
  feature: (typeof features)[0];
  index: number;
}

const FeatureBlock = ({ feature, index }: FeatureBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index !== 0 ? 'mt-16 md:mt-24 lg:mt-32' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}
      >
        <div className="aspect-[4/3] sm:aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] overflow-hidden relative">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${isReversed ? 'lg:order-1' : ''} py-2`}
      >
        <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">
          {feature.subtitle}
        </span>

        <h3 className="mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
          {feature.title}
        </h3>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed">
          {feature.description}
        </p>

        <div className="mt-6 md:mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors group"
          >
            Learn More
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const SplitFeatures = () => {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container-custom">
        {features.map((feature, index) => (
          <FeatureBlock key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SplitFeatures;
