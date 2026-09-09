import React from 'react';
import { motion } from 'framer-motion';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Primary Ambient Orb */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[120px]"
      />

      {/* Secondary Ambient Orb */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 -right-32 h-[450px] w-[450px] rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-[130px]"
      />

      {/* Tertiary Ambient Orb for Depth */}
      <motion.div
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-32 left-1/3 h-[380px] w-[380px] rounded-full bg-emerald-500/10 dark:bg-emerald-600/10 blur-[120px]"
      />
    </div>
  );
};
