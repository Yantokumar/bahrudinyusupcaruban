import React from 'react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '../../data/projects';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { getBrandIcon, SocialIcons } from '../ui/Icons';

interface ProjectsSectionProps {
  showAll?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showAll = false }) => {
  const displayProjects = showAll ? projectsData : projectsData.slice(1, 4);

  if (!showAll && displayProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-neutral-400" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Karya & Proyek Terpilih
            </h3>
          </div>
          <p className="mt-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Aplikasi produk, sistem backend, dan alat open-source
          </p>
        </div>

        {!showAll && (
          <Link
            to="/projects"
            className="group flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <span>Lihat semua ({projectsData.length})</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {displayProjects.map((project) => (
          <SpotlightCard
            key={project.id}
            className="p-5"
            spotlightColor="rgba(168, 85, 247, 0.12)"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h4>
                  {project.isComingSoon ? (
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                      Dalam Pengembangan
                    </span>
                  ) : (
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                      {project.status}
                    </span>
                  )}
                  <span className="font-mono text-xs text-neutral-400">
                    · {project.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  {project.tagline}
                </p>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Badge teknologi */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  {project.techStack.map((tech, idx) => {
                    const Icon = getBrandIcon(tech);
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
                      >
                        {Icon && <Icon size={12} />}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Tautan aksi */}
              <div className="flex items-center gap-2 sm:self-start shrink-0 pt-2 sm:pt-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Lihat Kode Sumber di GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
                  >
                    <SocialIcons.github size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Buka Pratinjau Langsung"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
