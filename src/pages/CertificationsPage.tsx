import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { CertificateModal } from '../components/ui/CertificateModal';
import type { Certification } from '../types';
import { Award, ExternalLink, Eye } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

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
          <Award className="h-4 w-4 text-neutral-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Kredensial & Lisensi
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Sertifikasi Profesional
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
          Sertifikasi profesional terverifikasi di bidang rekayasa jaringan (Cisco CCNA, MikroTik), keamanan siber perimeter (CompTIA Security+), dan arsitektur cloud (AWS).
        </p>
      </div>

      {/* Kisi Kartu Sertifikasi atau Tampilan Segera Hadir */}
      {certificationsData.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-200 p-12 text-center dark:border-neutral-800">
          <Award className="mx-auto h-8 w-8 text-neutral-400 mb-3" />
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Segera Hadir</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Daftar sertifikasi profesional Cisco & MikroTik sedang dalam proses persiapan dan pengujian.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificationsData.map((cert: Certification, index: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <SpotlightCard
                onClick={() => setSelectedCert(cert)}
                className="p-5 cursor-pointer transition-all hover:translate-y-[-2px] h-full flex flex-col justify-between"
                spotlightColor="rgba(234, 179, 8, 0.15)"
              >
                <div>
                  {cert.imageUrl && (
                    <div className="mb-4 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 h-36">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {cert.issuer} · {cert.issueDate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.skills.map((skill: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-[10px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Eye className="h-3 w-3" />
                    <span>Klik untuk pratinjau</span>
                  </span>
                  {cert.credentialUrl && (
                    <ExternalLink className="h-3 w-3 text-neutral-400" />
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </motion.div>
  );
};
