"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const metrics = [
  { value: 100, suffix: '+', label: 'Websites Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 7, suffix: '-14', label: 'Days To Launch' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

interface CounterProps {
  target: number;
  suffix: string;
  isInView: boolean;
}

const Counter = ({ target, suffix, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metrics" className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground">
                <Counter
                  target={metric.value}
                  suffix={metric.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="mt-2 md:mt-3 text-xs sm:text-sm font-body font-medium tracking-wide uppercase text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
