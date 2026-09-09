import React from 'react';
import { motion } from 'framer-motion';
import { TechStackSection } from '../components/sections/TechStackSection';
import { Cpu } from 'lucide-react';

export const TechStackPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="pt-8 pb-16"
    >
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-neutral-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Keahlian & Perangkat
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Teknologi & Ekosistem
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
          Perangkat keras & lunak jaringan, protokol routing enterprise, sistem operasi jaringan, firewall, observabilitas lalu lintas, dan otomasi infrastruktur yang saya gunakan untuk mengelola jaringan berkinerja tinggi.
        </p>
      </div>

      <TechStackSection showAll={true} />
    </motion.div>
  );
};
