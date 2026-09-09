import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { profileData } from '../../data/profile';
import { Mail, Copy, Check, MessageSquare } from 'lucide-react';
import { SocialIcons } from '../ui/Icons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.85 },
      scalar: 0.8,
    });
  };

  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-4 w-4 text-neutral-400" />
        <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Hubungi Saya
        </h3>
      </div>

      <SpotlightCard className="p-6 sm:p-8 text-center" spotlightColor="rgba(236, 72, 153, 0.12)">
        <div className="mx-auto max-w-lg space-y-3">
          <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Mari ciptakan karya digital luar biasa bersama.
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Apakah Anda memiliki peluang rekayasa perangkat lunak yang menantang, ingin berkolaborasi mengembangkan produk, atau sekadar berdiskusi seputar ekosistem web dan desain — kotak masuk email saya selalu terbuka.
          </p>

          {/* Tombol Aksi Kontak */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profileData.socials.email}`}
              onClick={handleConfetti}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all cursor-pointer"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Kirim Email</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-xs font-medium text-neutral-700 shadow-2xs hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Tersalin ke clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{profileData.socials.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Deretan Media Sosial */}
          <div className="pt-6 flex items-center justify-center gap-6 text-neutral-500 dark:text-neutral-400">
            {profileData.socials.github && (
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <SocialIcons.github size={16} />
                <span>GitHub</span>
              </a>
            )}
            {profileData.socials.linkedin && (
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <SocialIcons.linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            )}
            {profileData.socials.instagram && (
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <SocialIcons.instagram size={16} />
                <span>Instagram</span>
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};
