import React from 'react';
import { CardDeck } from '../ui/CardDeck';
import { photoMemories } from '../../data/outsideTheIde';
import { Compass } from 'lucide-react';

export const OutsideTheIdeSection: React.FC = () => {
  return (
    <section className="py-8 border-t border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-2 mb-2">
        <Compass className="h-4 w-4 text-neutral-400" />
        <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Di Luar Terminal & IDE
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
        <div>
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
            Kehidupan, ritual & minat di luar dunia baris kode
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            Ketika sedang tidak mengonfigurasi perangkat jaringan atau mempelajari topologi sistem, saya paling suka melakukan aktivitas luar ruangan seperti hiking, mendaki gunung, menjelajah alam terbuka, serta menikmati keindahan matahari terbit di puncak ketinggian.
          </p>
        </div>
      </div>

      {/* Tumpukan Dek Foto Interaktif */}
      <CardDeck cards={photoMemories} />
    </section>
  );
};
