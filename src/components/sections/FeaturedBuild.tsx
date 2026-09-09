import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '../../data/projects';
import { ExternalLink, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { getBrandIcon, SocialIcons } from '../ui/Icons';
import { BorderBeam } from '../ui/BorderBeam';

export const FeaturedBuild: React.FC = () => {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];

  if (!featured) return null;

  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Karya Unggulan
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/40">
          <Sparkles className="h-3 w-3" />
          <span>Arsitektur Utama</span>
        </span>
      </div>

      <SpotlightCard className="relative overflow-hidden p-5 sm:p-6" spotlightColor="rgba(59, 130, 246, 0.18)">
        <BorderBeam
          size={240}
          duration={8}
          borderWidth={1.5}
          colorFrom="#38bdf8"
          colorTo="#6366f1"
        />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Pratinjau Gambar Proyek */}
          {featured.imageUrl && (
            <div className="relative md:w-5/12 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 shrink-0 group">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="h-48 md:h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-80" />
              {featured.isComingSoon && (
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                    <Clock className="h-3 w-3 animate-spin" style={{ animationDuration: '8s' }} />
                    <span>Segera Hadir</span>
                  </span>
                  <span className="font-mono text-[10px] text-white/90 bg-neutral-900/70 px-2 py-0.5 rounded-full backdrop-blur-xs">
                    Lab Config
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Rincian Proyek */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h4>
                <span className="font-mono text-xs text-neutral-400">
                  {featured.year}
                </span>
              </div>

              <p className="mt-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {featured.tagline}
              </p>

              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {featured.description}
              </p>

              {/* Sorotan Metrik */}
              {featured.metrics && (
                <div className="mt-4 grid grid-cols-3 gap-2 border-y border-neutral-100 dark:border-neutral-800/80 py-2.5">
                  {featured.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-mono text-sm font-bold text-neutral-900 dark:text-neutral-100">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Poin Keunggulan */}
              {featured.highlights && (
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {featured.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-1.5 transition-transform"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Deretan Stack & Tautan Aksi */}
            <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Ikon Teknologi */}
              <div className="flex flex-wrap items-center gap-1.5">
                {featured.techStack.map((tech, i) => {
                  const Icon = getBrandIcon(tech);
                  return (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="inline-flex items-center gap-1 rounded-md border border-neutral-200/90 bg-white/90 px-2 py-1 text-[11px] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 shadow-2xs"
                    >
                      {Icon && <Icon size={12} />}
                      <span>{tech}</span>
                    </motion.span>
                  );
                })}
              </div>

              {/* Tautan / Status Eksternal */}
              <div className="flex items-center gap-2 shrink-0">
                {featured.githubUrl && (
                  <motion.a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <SocialIcons.github size={14} />
                    <span>Kode Sumber</span>
                  </motion.a>
                )}
                {featured.liveUrl ? (
                  <motion.a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
                  >
                    <span>Kunjungi Situs</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </motion.a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 px-3 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>Dalam Tahap Rilis</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};
