import React from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '../../data/projects';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { getBrandIcon, SocialIcons } from '../ui/Icons';

export const FeaturedBuild: React.FC = () => {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];

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
                <ul className="mt-3 space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {featured.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
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

              {/* Tautan Eksternal */}
              <div className="flex items-center gap-2 shrink-0">
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <SocialIcons.github size={14} />
                    <span>Kode Sumber</span>
                  </a>
                )}
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
                  >
                    <span>Kunjungi Situs</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};
