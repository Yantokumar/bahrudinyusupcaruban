import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../../data/techStack';
import { Cpu, Activity, Radio } from 'lucide-react';
import { getBrandIcon } from '../ui/Icons';
import { SpotlightCard } from '../ui/SpotlightCard';
import { BorderBeam } from '../ui/BorderBeam';

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
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Teknologi & Ekosistem Jaringan
            </h3>
          </div>
          <p className="mt-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Perangkat keras & lunak jaringan, protokol routing, firewall, dan konfigurasi sistem
          </p>
        </div>

        {/* Tab filter kategori jika ada banyak kategori */}
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

      {/* Kisi teknologi dengan animasi BorderBeam & live network telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {displayItems.map((tech, idx) => {
          const Icon = getBrandIcon(tech.name);
          const isCisco = tech.name.toLowerCase().includes('cisco');
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <SpotlightCard
                className="relative overflow-hidden p-4 sm:p-5 transition-all group hover:border-neutral-400/80 dark:hover:border-neutral-600 bg-white/80 dark:bg-neutral-900/60"
                spotlightColor={`${tech.color}25`}
              >
                {/* Rotating Border Beam Highlight */}
                <BorderBeam
                  size={190}
                  duration={isCisco ? 7 : 9}
                  borderWidth={1.5}
                  colorFrom={tech.color}
                  colorTo={isCisco ? '#38bdf8' : '#fb7185'}
                />

                {/* Header Kartu: Ikon + Status Telemetri */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200/90 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-950 shrink-0 transition-transform"
                      style={{ color: tech.color }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl opacity-20 blur-xs transition-opacity group-hover:opacity-40"
                        style={{ backgroundColor: tech.color }}
                      />
                      {Icon ? <Icon size={22} /> : <Cpu className="h-5 w-5 text-neutral-400" />}
                    </motion.div>

                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                        {tech.name}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                        {tech.category} · System Engine
                      </span>
                    </div>
                  </div>

                  {/* Lencana Telemetri Jaringan */}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 px-2 py-0.5 text-[10px] font-mono text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-neutral-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <span>{isCisco ? 'IOS v15+ · UP' : 'RouterOS v7+ · UP'}</span>
                  </span>
                </div>

                {/* Deskripsi */}
                {tech.description && (
                  <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {tech.description}
                  </p>
                )}

                {/* Garis Aliran Paket Data Animasi */}
                <div className="mt-4 pt-3 border-t border-dashed border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Radio className="h-3 w-3 text-sky-500 animate-pulse" />
                    <span>{isCisco ? 'Inter-VLAN · OSPF / Static' : 'Queue Mgmt · NAT / Firewall'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Activity className="h-3 w-3" />
                    <span>0% Loss · MTU 1500</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
