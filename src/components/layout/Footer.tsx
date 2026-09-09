import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { SocialIcons } from '../ui/Icons';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-dashed border-neutral-200 dark:border-neutral-800 py-10 text-xs text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Kiri: Lokasi & Waktu Langsung */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono text-neutral-800 dark:text-neutral-200 font-medium">
                {time ? `${time} WIB` : 'WIB (GMT+7)'}
              </span>
              <span className="text-neutral-400">·</span>
              <span>{profileData.location.split('/')[0].trim()}</span>
            </div>
            <p className="text-neutral-400 text-[11px]">
              Dirancang & dibangun dengan pendekatan rekayasa web minimalis dan modern.
            </p>
          </div>

          {/* Kanan: Ikon Sosial & Kembali ke Atas */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {profileData.socials.github && (
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil GitHub"
                  title="GitHub"
                  className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
                >
                  <SocialIcons.github size={16} />
                </a>
              )}
              {profileData.socials.linkedin && (
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil LinkedIn"
                  title="LinkedIn"
                  className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
                >
                  <SocialIcons.linkedin size={16} />
                </a>
              )}
              {profileData.socials.instagram && (
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil Instagram"
                  title="Instagram"
                  className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
                >
                  <SocialIcons.instagram size={16} />
                </a>
              )}
              {profileData.socials.email && (
                <a
                  href={`mailto:${profileData.socials.email}`}
                  aria-label="Kirim Email"
                  title="Kirim Email"
                  className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>

            <button
              onClick={scrollToTop}
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Catatan Hak Cipta Bawah */}
        <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400">
          <span>© {new Date().getFullYear()} {profileData.name}. Hak cipta dilindungi.</span>
          <span className="mt-2 sm:mt-0 font-mono">React · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
