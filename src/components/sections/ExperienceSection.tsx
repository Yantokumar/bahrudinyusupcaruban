import React from 'react';
import { motion } from 'framer-motion';
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
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-5" spotlightColor="rgba(16, 185, 129, 0.12)">
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
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Subbagian Pendidikan dengan Garis Waktu Interaktif */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </div>
          <GraduationCap className="h-4 w-4 text-neutral-400" />
          <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Riwayat Pendidikan
          </h3>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-5 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-neutral-300 before:to-neutral-200 dark:before:via-neutral-700 dark:before:to-neutral-800">
          {educationData.map((edu, index) => {
            const isLatest = index === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-5 flex h-4 w-4 items-center justify-center rounded-full border bg-white dark:bg-neutral-950 ${
                    isLatest
                      ? 'border-blue-500 text-blue-500 shadow-xs ring-4 ring-blue-500/10'
                      : 'border-neutral-300 dark:border-neutral-700 text-neutral-400'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isLatest ? 'bg-blue-500 animate-pulse' : 'bg-neutral-400 dark:bg-neutral-600'
                    }`}
                  />
                </div>

                <SpotlightCard
                  className={`p-5 transition-all ${
                    isLatest
                      ? 'border-blue-200/80 dark:border-blue-900/60 bg-white/80 dark:bg-neutral-900/60'
                      : 'bg-white/70 dark:bg-neutral-900/40'
                  }`}
                  spotlightColor={isLatest ? 'rgba(59, 130, 246, 0.16)' : 'rgba(120, 119, 198, 0.1)'}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                          {edu.degree}
                        </h4>
                        {isLatest && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50/90 px-2 py-0.5 text-[10px] font-medium text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/50">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
                            <span>Aktif</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        <span className="font-medium text-neutral-800 dark:text-neutral-200">
                          {edu.institution}
                        </span>{' '}
                        · {edu.location}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0 shrink-0">
                      {edu.period}
                    </div>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-3.5 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                      {edu.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ x: 2 }}
                          className="flex items-start gap-2 transition-transform"
                        >
                          <span className="text-blue-500 font-bold mt-0.5">›</span>
                          <span>{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
