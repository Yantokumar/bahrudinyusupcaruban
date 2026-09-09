import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../../data/techStack';
import { Cpu } from 'lucide-react';
import { getBrandIcon } from '../ui/Icons';
import { SpotlightCard } from '../ui/SpotlightCard';

export const TechStackSection: React.FC<{ showAll?: boolean }> = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', ...Array.from(new Set(techStackData.map((item) => item.category)))];

  const filteredItems = selectedCategory === 'Semua'
    ? techStackData
    : techStackData.filter((item) => item.category === selectedCategory);

  const displayItems = showAll ? filteredItems : techStackData.slice(0, 16);

  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-neutral-400" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Teknologi & Ekosistem
            </h3>
          </div>
          <p className="mt-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Perangkat keras & lunak jaringan, protokol routing, firewall, observabilitas, dan otomatisasi
          </p>
        </div>

        {/* Tab filter kategori jika menampilkan semua */}
        {showAll && categories.length > 2 && (
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Kisi teknologi sederhana dengan animasi hover interaktif */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {displayItems.map((tech, idx) => {
          const Icon = getBrandIcon(tech.name);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 8) * 0.04 }}
            >
              <SpotlightCard
                className="p-3 transition-all group hover:border-neutral-400/80 dark:hover:border-neutral-600"
                spotlightColor={`${tech.color}25`}
              >
                <div className="flex items-center gap-2.5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-2xs dark:border-neutral-800 dark:bg-neutral-950 shrink-0 transition-transform"
                    style={{ color: tech.color }}
                  >
                    {Icon ? <Icon size={16} /> : <Cpu className="h-4 w-4 text-neutral-400" />}
                  </motion.div>

                  <div className="overflow-hidden">
                    <h4 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] text-neutral-400 block truncate">
                      {tech.category}
                    </span>
                  </div>
                </div>

                {tech.description && (
                  <p className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {tech.description}
                  </p>
                )}
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
