import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Certification } from '../../types';
import { X, ExternalLink, Award, Calendar, Hash } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Latar Belakang Redup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Konten Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative z-10 w-full max-w-lg overflow-y-auto max-h-[88vh] rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="absolute top-4 right-4 rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Pratinjau Gambar Sertifikat */}
          {cert.imageUrl && (
            <div className="mb-4 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="h-48 w-full object-cover"
              />
            </div>
          )}

          {/* Judul & Penerbit */}
          <div className="flex items-start gap-3">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2.5 dark:border-neutral-800 dark:bg-neutral-800">
              <Award className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                {cert.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {cert.issuer}
              </p>
            </div>
          </div>

          {/* Detail Meta */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50/80 p-2.5 dark:border-neutral-800/80 dark:bg-neutral-800/40">
              <Calendar className="h-4 w-4 text-neutral-400" />
              <div>
                <span className="block text-neutral-400">Diterbitkan</span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">{cert.issueDate}</span>
              </div>
            </div>

            {cert.credentialId && (
              <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50/80 p-2.5 dark:border-neutral-800/80 dark:bg-neutral-800/40">
                <Hash className="h-4 w-4 text-neutral-400" />
                <div className="overflow-hidden">
                  <span className="block text-neutral-400">ID Kredensial</span>
                  <span className="font-mono font-medium text-neutral-700 dark:text-neutral-300 truncate block">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Tag Keahlian */}
          <div className="mt-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-neutral-400">Keahlian Terverifikasi</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>Verifikasi Kredensial</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="rounded-lg border border-neutral-200 px-3.5 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
