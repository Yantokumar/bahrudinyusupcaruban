import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PhotoMemory } from '../../types';
import { ArrowRight, RotateCw, MapPin, Calendar, Grab } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BorderBeam } from './BorderBeam';

interface CardDeckProps {
  cards: PhotoMemory[];
}

export const CardDeck: React.FC<CardDeckProps> = ({ cards }) => {
  const [deck, setDeck] = useState(cards);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    confetti({
      particleCount: 22,
      spread: 55,
      origin: { y: 0.7 },
      scalar: 0.75,
      colors: ['#10b981', '#38bdf8', '#fbbf24'],
    });
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handleShuffle = () => {
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.7 },
      scalar: 0.8,
      colors: ['#3b82f6', '#10b981', '#a855f7'],
    });
    setDeck((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Kontainer Tumpukan Foto 3D dengan Dukungan Drag Gesture */}
      <div className="relative h-80 sm:h-96 w-full max-w-sm select-none py-4">
        <AnimatePresence mode="popLayout">
          {deck.map((card, i) => {
            const offset = (i - currentIndex + deck.length) % deck.length;
            if (offset > 2) return null;

            const isTop = offset === 0;
            const zIndex = 30 - offset * 10;
            const yOffset = offset * 10;
            const scale = 1 - offset * 0.05;
            const rotation = isTop ? (card.rotation || 0) : (card.rotation || 0) / 2;

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ scale: 0.9, opacity: 0, y: -20 }}
                animate={{
                  scale,
                  opacity: 1 - offset * 0.18,
                  y: yOffset,
                  rotate: rotation,
                  zIndex,
                }}
                exit={{
                  x: 340,
                  opacity: 0,
                  rotate: 20,
                  transition: { duration: 0.28 },
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                drag={isTop ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 60) {
                    handleNext();
                  }
                }}
                onClick={isTop ? handleNext : undefined}
                whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
                whileHover={isTop ? { scale: 1.02, cursor: 'grab' } : undefined}
                className="absolute inset-0 mx-auto w-full rounded-2xl border border-neutral-200/90 bg-white p-3 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 cursor-grab active:cursor-grabbing overflow-hidden"
              >
                {/* BorderBeam halus pada kartu paling atas */}
                {isTop && (
                  <BorderBeam
                    size={170}
                    duration={10}
                    borderWidth={1.5}
                    colorFrom="#10b981"
                    colorTo="#38bdf8"
                  />
                )}

                {/* Bingkai foto */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover pointer-events-none transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {card.location && (
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full bg-neutral-900/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md shadow-xs">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      <span>{card.location}</span>
                    </div>
                  )}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-neutral-900/75 px-2 py-1 text-[11px] font-mono text-white/90 backdrop-blur-md shadow-xs">
                    <Calendar className="h-3 w-3 text-sky-400" />
                    <span>{card.year}</span>
                  </div>

                  {/* Indikator swipe interaktif di bagian atas foto pertama */}
                  {isTop && (
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      animate={{ x: [-3, 3, -3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full bg-neutral-900/80 px-2.5 py-1 text-[10px] text-white/95 backdrop-blur-md shadow-xs"
                    >
                      <Grab className="h-2.5 w-2.5 text-emerald-400" />
                      <span>Geser untuk berganti</span>
                    </motion.div>
                  )}
                </div>

                {/* Info teks memori */}
                <div className="mt-3 px-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                      {card.title}
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                      Outdoor
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {card.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Kontrol & Penghitung Dek */}
      <div className="mt-6 flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <span className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800">
          {currentIndex + 1} / {deck.length}
        </span>
        <motion.button
          whileHover={{ scale: 1.05, x: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-2xs hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <span>Foto berikutnya</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.button>
        <motion.button
          whileHover={{ rotate: 180, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShuffle}
          title="Acak tumpukan foto"
          className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1.5 text-neutral-500 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors cursor-pointer"
        >
          <RotateCw className="h-3.5 w-3.5" />
        </motion.button>
      </div>
    </div>
  );
};
