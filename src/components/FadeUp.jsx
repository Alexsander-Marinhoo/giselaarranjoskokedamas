import React from 'react';
import { motion } from 'framer-motion';

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.45,
  yOffset = 18,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 0px 0px', amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.26, 1, 0.3, 1], // Crisp, fast spring-like ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
