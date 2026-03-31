"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="accent-line mx-auto mb-10 md:mb-12"
          />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance"
          >
            We believe in the power of{' '}
            <span className="text-primary">purposeful design</span> to shape
            meaningful connections.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground font-body font-light max-w-2xl mx-auto"
          >
            Every project begins with understanding. We immerse ourselves in your
            world to create solutions that resonate with your audience and drive
            real results.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
