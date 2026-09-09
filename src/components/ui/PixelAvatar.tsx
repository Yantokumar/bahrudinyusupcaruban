import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PixelAvatarProps {
  realAvatar: string;
  pixelAvatar: string;
  name: string;
}

export const PixelAvatar: React.FC<PixelAvatarProps> = ({ realAvatar, pixelAvatar, name }) => {
  const [isPixel, setIsPixel] = useState(false);

  const handleAvatarClick = (e: React.MouseEvent) => {
    setIsPixel(!isPixel);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Dual particle pop
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
      disableForReducedMotion: true,
      scalar: 0.75,
    });
  };

  return (
    <div className="relative inline-block select-none" style={{ perspective: 1000 }}>
      {/* Pulsing subtle ambient halo behind avatar */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-subtle" />

      <motion.div
        onClick={handleAvatarClick}
        onMouseEnter={() => setIsPixel(true)}
        onMouseLeave={() => setIsPixel(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{ rotateY: isPixel ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="group relative h-20 w-20 sm:h-24 sm:w-24 cursor-pointer overflow-hidden rounded-2xl border-2 border-neutral-200/90 bg-neutral-100 shadow-md transition-colors dark:border-neutral-800 dark:bg-neutral-900"
        style={{ transformStyle: 'preserve-3d' }}
        title="Klik atau arahkan kursor untuk beralih gaya avatar!"
      >
        {/* Front: Real Photo */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            src={realAvatar}
            alt={name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-neutral-900/60 py-0.5 text-center text-[9px] font-mono text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
            foto
          </div>
        </div>

        {/* Back: 8-Bit Pixel Art Avatar */}
        <div
          className="absolute inset-0 h-full w-full bg-neutral-900"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={pixelAvatar}
            alt={`Avatar piksel ${name}`}
            className="h-full w-full object-cover rendering-pixelated"
          />
          <div className="absolute inset-x-0 bottom-0 bg-neutral-900/70 py-0.5 text-center text-[9px] font-mono text-emerald-400 backdrop-blur-[2px]">
            8-bit
          </div>
        </div>
      </motion.div>

      {/* Lencana Terverifikasi */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, delay: 0.2 }}
        className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white shadow-sm dark:border-neutral-950"
        title="Pengembang Terverifikasi"
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
      </motion.div>

      {/* Ikon kilau interaktif */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-neutral-950 shadow-xs"
      >
        <Sparkles className="h-2.5 w-2.5" />
      </motion.div>
    </div>
  );
};
