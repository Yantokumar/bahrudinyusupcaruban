import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, RefreshCw } from 'lucide-react';
import { profileData } from '../../data/profile';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'm-1',
      sender: 'bot',
      text: `Halo! 👋 Saya asisten virtual ${profileData.name} (${profileData.handle}). Tanyakan apa saja tentang proyek, keahlian teknologi, atau ketersediaan kerja saya!`,
      timestamp: 'Baru saja',
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickPrompts = [
    "Apa teknologi utama yang kamu kuasai?",
    "Ceritakan tentang proyek unggulanmu",
    "Apakah kamu terbuka untuk proyek/kerja?",
    "Bagaimana cara menghubungimu?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('teknologi') || q.includes('stack') || q.includes('keahlian') || q.includes('skills') || q.includes('jaringan') || q.includes('network') || q.includes('router') || q.includes('switch')) {
      return `Teknologi yang saya gunakan dan fokuskan adalah Cisco IOS dan MikroTik RouterOS untuk konfigurasi routing, switching, manajemen bandwidth, dan pengaturan jaringan. Rincian selengkapnya ada di menu 'Teknologi'!`;
    }

    if (q.includes('proyek') || q.includes('project') || q.includes('karya') || q.includes('unggulan') || q.includes('soon')) {
      return `Karya dan dokumentasi proyek jaringan saya saat ini berstatus Coming Soon (Segera Hadir). Saya sedang mempersiapkan dokumentasi lab pengujian topologi Cisco IOS & MikroTik RouterOS!`;
    }

    if (q.includes('sertifikat') || q.includes('sertifikasi') || q.includes('license')) {
      return `Data sertifikasi saat ini sedang dalam proses persiapan dan pembaruan. Silakan cek berkala di menu 'Sertifikasi'!`;
    }

    if (q.includes('terbuka') || q.includes('kerja') || q.includes('hire') || q.includes('freelance') || q.includes('proyek baru') || q.includes('available')) {
      return `Tentu saja! ${profileData.availability.label}. Saya terbuka untuk peluang magang, posisi junior network engineer, atau kolaborasi lab jaringan. Hubungi saya via email di ${profileData.socials.email}!`;
    }

    if (q.includes('kontak') || q.includes('hubungi') || q.includes('email') || q.includes('instagram') || q.includes('github') || q.includes('linkedin')) {
      return `Anda dapat menghubungi saya langsung melalui email di ${profileData.socials.email}, atau terhubung melalui LinkedIn (${profileData.socials.linkedin}), Instagram (${profileData.socials.instagram}), dan GitHub (${profileData.socials.github}).`;
    }

    if (q.includes('halo') || q.includes('hai') || q.includes('hei') || q.includes('selamat')) {
      return `Halo! Senang bertemu dengan Anda. Silakan tanyakan tentang keahlian Cisco IOS, MikroTik RouterOS, maupun riwayat pendidikan saya!`;
    }

    if (q.includes('pendidikan') || q.includes('kuliah') || q.includes('sekolah') || q.includes('universitas') || q.includes('pamulang') || q.includes('unpam')) {
      return `Bahrudin saat ini merupakan mahasiswa aktif S1 Sistem Informasi di Universitas Pamulang (2025 — Sekarang). Riwayat pendidikannya meliputi SMA Negeri 6 Batanghari (2022 — 2025), SMP Negeri 3 Batanghari (2019 — 2022), dan SDN 64 Muara Bulian (2013 — 2019). Rincian selengkapnya dapat dilihat di bagian 'Pengalaman & Edukasi'!`;
    }

    if (q.includes('hobi') || q.includes('minat') || q.includes('hiking') || q.includes('haiking') || q.includes('gunung') || q.includes('mendaki')) {
      return `Di luar kesibukan studi dan praktik jaringan komputer, Bahrudin sangat gemar kegiatan alam terbuka seperti hiking dan mendaki gunung! Menyusuri jalur pendakian, menikmati udara segar pegunungan, dan menyaksikan matahari terbit di puncak adalah cara favoritnya untuk menyegarkan pikiran.`;
    }

    if (q.includes('siapa') || q.includes('tentang') || q.includes('pengalaman')) {
      return `${profileData.name} (${profileData.handle}) adalah ${profileData.title} yang berdomisili di ${profileData.location}. ${profileData.bioIntro} ${profileData.bioDetail}`;
    }

    return `Terima kasih atas pertanyaannya! Saya pemula yang sedang giat belajar jaringan komputer dengan Cisco IOS dan MikroTik. Jangan ragu hubungi saya langsung di ${profileData.socials.email}!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: generateBotReply(messageText),
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 550);
  };

  const handleReset = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Tombol Pemicu Mengambang */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Buka asisten virtual"
            className="flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white/90 px-4 py-2.5 text-neutral-800 shadow-lg backdrop-blur-md transition-all hover:bg-white hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
          >
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </div>
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs font-medium">Chat dengan Yusup</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Jendela Obrolan Interaktif */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] flex flex-col rounded-2xl border border-neutral-200 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 overflow-hidden"
          >
            {/* Header Chat */}
            <div className="flex items-center justify-between border-b border-neutral-200/80 px-4 py-3 bg-neutral-50/80 dark:border-neutral-800/80 dark:bg-neutral-900/60">
              <div className="flex items-center gap-2.5">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-neutral-300 dark:border-neutral-700">
                  <img
                    src={profileData.pixelAvatarUrl}
                    alt={profileData.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-white dark:ring-neutral-900" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                    <span>Yusup</span>
                    <span className="text-[10px] font-normal text-neutral-500 dark:text-neutral-400 bg-neutral-200/60 dark:bg-neutral-800 px-1.5 py-0.2 rounded">AI</span>
                  </h4>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400">Online & siap menjawab</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Mulai ulang percakapan"
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-200/50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Tutup jendela chat"
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-200/50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Alur Pesan */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded-br-xs'
                        : 'border border-neutral-200/70 bg-neutral-100/80 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 rounded-bl-xs'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className={`block mt-1 text-[9px] ${
                      msg.sender === 'user' ? 'text-neutral-400 dark:text-neutral-500 text-right' : 'text-neutral-400'
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl border border-neutral-200/70 bg-neutral-100/80 px-3 py-2 text-xs dark:border-neutral-800 dark:bg-neutral-900">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400"></span>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400 [animation-delay:0.2s]"></span>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400 [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Pilihan Pertanyaan Cepat */}
            <div className="border-t border-neutral-100 dark:border-neutral-800/80 px-3 py-2 bg-neutral-50/50 dark:bg-neutral-900/30">
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    className="whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] text-neutral-600 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 transition-colors shrink-0 cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Formulir Input Pesan */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 border-t border-neutral-200/80 p-3 bg-white dark:border-neutral-800 dark:bg-neutral-950"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:border-neutral-400 focus:bg-white focus:outline-hidden dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:border-neutral-600"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                title="Kirim pesan"
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white disabled:opacity-40 dark:bg-neutral-100 dark:text-neutral-900 transition-opacity cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
