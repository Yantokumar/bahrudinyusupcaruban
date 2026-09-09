import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { getBrandIcon, SocialIcons } from '../components/ui/Icons';
import type { Project } from '../types';
import { ExternalLink, Search, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const filterTabs = ['Semua', 'Unggulan', 'Aktif', 'Dalam Proses'];

  const filteredProjects = projectsData.filter((project: Project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((t: string) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedFilter === 'Semua') return matchesSearch;
    if (selectedFilter === 'Unggulan') return matchesSearch && project.featured;
    if (selectedFilter === 'Aktif') return matchesSearch && project.status === 'Aktif';
    if (selectedFilter === 'Dalam Proses') return matchesSearch && (project.status === 'Dalam Proses' || project.isComingSoon);
    return matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="pt-8 pb-16"
    >
      {/* Header Halaman */}
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-neutral-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Portofolio
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Arsitektur & Proyek Jaringan
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
          Koleksi arsitektur jaringan enterprise, implementasi routing & switching, mesh VPN multi-cabang, dan otomatisasi infrastruktur yang telah saya rancang dan terapkan.
        </p>
      </div>

      {/* Baris Filter & Pencarian */}
      <div className="mb-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Tab Filter */}
        <div className="flex flex-wrap gap-1.5">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                  : 'border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Input Pencarian */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari proyek atau teknologi..."
            className="w-full sm:w-64 rounded-xl border border-neutral-200 bg-white py-1.5 pl-8 pr-3 text-xs text-neutral-800 placeholder-neutral-400 focus:border-neutral-400 focus:outline-hidden dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder-neutral-500"
          />
        </div>
      </div>

      {/* Daftar Proyek */}
      <div className="grid grid-cols-1 gap-5">
        {filteredProjects.map((project: Project) => (
          <SpotlightCard
            key={project.id}
            className="p-5 sm:p-6"
            spotlightColor="rgba(59, 130, 246, 0.12)"
          >
            <div className="flex flex-col md:flex-row gap-5">
              {project.imageUrl && (
                <div className="md:w-5/12 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-44 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                          Unggulan
                        </span>
                      )}
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                        {project.status}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-neutral-400">{project.year}</span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {project.tagline}
                  </p>

                  <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Poin Keunggulan */}
                  {project.highlights && (
                    <ul className="mt-3 space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                      {project.highlights.map((h: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-500 font-bold">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.techStack.map((tech: string, i: number) => {
                      const Icon = getBrandIcon(tech);
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-2 py-0.5 text-[11px] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                        >
                          {Icon && <Icon size={12} />}
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Lihat Kode Sumber di GitHub"
                        className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <SocialIcons.github size={14} />
                        <span>Kode Sumber</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Kunjungi Demo Langsung"
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
        ))}

        {filteredProjects.length === 0 && (
          <div className="rounded-xl border border-dashed border-neutral-200 p-8 text-center dark:border-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Tidak ada proyek yang sesuai dengan kriteria pencarian Anda.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
