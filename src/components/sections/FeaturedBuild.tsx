import React from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '../../data/projects';
import { Clock } from 'lucide-react';
import { getBrandIcon } from '../ui/Icons';

export const FeaturedBuild: React.FC = () => {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];

  if (!featured) return null;

  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-500" />
          <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Karya Unggulan
          </h3>
        </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          Arsitektur Utama
        </span>
      </div>

      <SpotlightCard className="p-5 sm:p-6" spotlightColor="rgba(59, 130, 246, 0.15)">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Pratinjau Gambar Proyek */}
          {featured.imageUrl && (
            <div className="md:w-5/12 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 shrink-0">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="h-48 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* Rincian Proyek */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  {featured.title}
                </h4>
                <span className="font-mono text-xs text-neutral-400">
                  {featured.year}
                </span>
              </div>

              <p className="mt-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {featured.tagline}
              </p>

              {featured.description && (
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {featured.description}
                </p>
              )}
            </div>

            {/* Deretan Stack & Status */}
            <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Ikon Teknologi */}
              <div className="flex flex-wrap items-center gap-1.5">
                {featured.techStack && featured.techStack.map((tech, i) => {
                  const Icon = getBrandIcon(tech);
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-2 py-1 text-[11px] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      {Icon && <Icon size={12} />}
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-2xs dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                  <span>Segera Hadir</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};
