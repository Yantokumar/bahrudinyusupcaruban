import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PixelAvatar } from '../ui/PixelAvatar';
import { profileData } from '../../data/profile';
import { FileText, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      scalar: 0.75,
      colors: ['#10b981', '#3b82f6', '#06b6d4'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResumeClick = () => {
    confetti({
      particleCount: 35,
      spread: 65,
      origin: { y: 0.75 },
      scalar: 0.85,
      colors: ['#3b82f6', '#06b6d4', '#8b5cf6'],
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="pt-8 pb-12"
    >
      {/* Baris Atas: Avatar + Lencana Ketersediaan */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <PixelAvatar
              realAvatar={profileData.avatarUrl}
              pixelAvatar={profileData.pixelAvatarUrl}
              name={profileData.name}
            />
          </motion.div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                {profileData.name}
              </h1>
            </div>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {profileData.handle} · {profileData.location.split('/')[0].trim()}
            </p>
          </div>
        </div>

        {/* Lencana Status Ketersediaan */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400 shadow-2xs backdrop-blur-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>{profileData.availability.label}</span>
        </motion.div>
      </div>

      {/* Tajuk Utama & Biografi */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50">
          {profileData.headline}
        </h2>
        
        <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          {profileData.bioIntro}
        </p>

        <p className="text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {profileData.bioDetail}
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <motion.a
          href={profileData.resumeUrl}
          onClick={handleResumeClick}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="relative group overflow-hidden inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all cursor-pointer"
        >
          <FileText className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
          <span>Lihat CV / Resume</span>
        </motion.a>

        <motion.button
          onClick={handleCopyEmail}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white/90 px-4 py-2.5 text-xs font-medium text-neutral-700 shadow-2xs hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-all cursor-pointer backdrop-blur-xs"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500 animate-bounce" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Email berhasil disalin!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-neutral-400" />
              <span>Salin Email</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Rangkuman Statistik Ringkas */}
      <div className="mt-10 grid grid-cols-3 gap-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 pt-6">
        {profileData.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {stat.value}
            </span>
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mt-0.5">
              {stat.label}
            </span>
            {stat.desc && (
              <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                {stat.desc}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};
