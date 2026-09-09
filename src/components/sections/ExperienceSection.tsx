import React from 'react';
import { experienceData, educationData } from '../../data/experience';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

export const ExperienceSection: React.FC = () => {
  const hasExperience = experienceData.length > 0;

  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      {/* Garis Waktu Pengalaman (jika ada) */}
      {hasExperience && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-4 w-4 text-neutral-400" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Pengalaman Kerja
            </h3>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <SpotlightCard key={exp.id} className="p-5" spotlightColor="rgba(16, 185, 129, 0.12)">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{exp.company}</span>
                      <span>·</span>
                      <span>{exp.type}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-2 sm:mt-0 shrink-0">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Poin Pencapaian */}
                <ul className="mt-3 space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">›</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Keahlian & Teknologi */}
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      )}

      {/* Subbagian Pendidikan */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-4 w-4 text-neutral-400" />
          <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Pendidikan
          </h3>
        </div>

        <div className="space-y-4">
          {educationData.map((edu) => (
            <SpotlightCard key={edu.id} className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
                <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0">
                  {edu.period}
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="mt-3 space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-400">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
