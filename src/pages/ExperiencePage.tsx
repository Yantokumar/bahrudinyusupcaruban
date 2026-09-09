import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { Briefcase } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="pt-8 pb-16"
    >
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-neutral-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Garis Waktu Karier
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Pengalaman & Edukasi
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
          Rekam jejak pengalaman profesional, perancangan topologi enterprise, implementasi keamanan siber perimeter, dan pencapaian keandalan sistem jaringan.
        </p>
      </div>

      <ExperienceSection />
    </motion.div>
  );
};
