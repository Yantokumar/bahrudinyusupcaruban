import type { PortfolioConfig } from './types';

/**
 * =========================================================================
 * 🛠️ FILE KONFIGURASI UTAMA PORTOFOLIO (config.ts)
 * =========================================================================
 * Semua data dan konten website terpusat di satu file ini.
 * Anda dapat dengan mudah mengubah teks, data diri, proyek, keahlian,
 * riwayat pengalaman, dan sertifikasi langsung di sini!
 * =========================================================================
 */

export const portfolioConfig: PortfolioConfig = {
  // -----------------------------------------------------------------------
  // 1. PROFIL & IDENTITAS PRIBADI
  // -----------------------------------------------------------------------
  profile: {
    name: "Bahrudin Yusup Caruban",
    handle: "Zhyusff.Dev",
    title: "Network & Systems",
    headline: "Tertarik dan mempelajari jaringan komputer.",
    bioIntro: "Mahasiswa S1 Sistem Informasi di Universitas Pamulang dengan minat di bidang jaringan komputer.",
    bioDetail: "Aktif mempelajari dan berlatih konfigurasi perangkat Cisco dan MikroTik.",
    location: "Indonesia / Tersedia Remote & On-site",
    availability: {
      status: "available",
      label: "Terbuka untuk peluang Magang & Belajar",
    },
    socials: {
      github: "https://github.com/yusup007l",
      linkedin: "https://www.linkedin.com/in/bahrudin-yusup-caruban-73666833b/",
      instagram: "https://www.instagram.com/yusup_007l",
      email: "bahrudinyusup825@gmail.com",
    },
    resumeUrl: "#resume",
    avatarUrl: "/profil.png",
    pixelAvatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Zhyusff&mood=happy",
    stats: [
      { label: "Minat", value: "Jaringan", desc: "routing & switching" },
      { label: "Studi", value: "S1 SI", desc: "Universitas Pamulang" },
      { label: "Fokus Lab", value: "Cisco & MikroTik", desc: "perangkat yang dipelajari" },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. KARYA & PROYEK PORTOFOLIO (Coming Soon)
  // -----------------------------------------------------------------------
  projects: [
    {
      id: "project-coming-soon",
      title: "Coming Soon",
      slug: "coming-soon",
      tagline: "Proyek dan dokumentasi jaringan akan segera hadir.",
      description: "",
      featured: true,
      status: "Coming Soon",
      isComingSoon: true,
      role: "Network & Systems",
      year: "2026",
      techStack: ["--", "--"],
      imageUrl: "/anime.jpg",
    },
  ],

  // -----------------------------------------------------------------------
  // 3. TEKNOLOGI & EKOSISTEM (Tech Stack)
  // -----------------------------------------------------------------------
  techStack: [
    {
      name: "Cisco IOS",
      category: "Jaringan",
      icon: "cisco",
      color: "#049fd9",
      description: "Konfigurasi perangkat router & switch Cisco, inter-VLAN, dan protokol routing",
    },
    {
      name: "MikroTik RouterOS",
      category: "Jaringan",
      icon: "mikrotik",
      color: "#E20074",
      description: "Routing dinamis, bandwidth management (Queue), NAT, dan firewall filter",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: "html5",
      color: "#E34F26",
      description: "Struktur semantik dokumen web modern dan aksesibilitas",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: "css3",
      color: "#1572B6",
      description: "Tata letak responsif, Flexbox, Grid, dan animasi antarmuka",
    },
    {
      name: "JavaScript",
      category: "Bahasa",
      icon: "javascript",
      color: "#F7DF1E",
      description: "Logika pemrograman dinamis, manipulasi DOM, dan interaktivitas",
    },
    {
      name: "TypeScript",
      category: "Bahasa",
      icon: "typescript",
      color: "#3178C6",
      description: "JavaScript dengan static typing untuk kode yang andal dan terstruktur",
    },
    {
      name: "Python",
      category: "Bahasa",
      icon: "python",
      color: "#3776AB",
      description: "Scripting otomasi, pengolahan data, dan administrasi sistem",
    },
    {
      name: "PHP",
      category: "Backend",
      icon: "php",
      color: "#777BB4",
      description: "Pengembangan web sisi server dan integrasi basis data",
    },
    {
      name: "Git",
      category: "DevOps & Alat",
      icon: "git",
      color: "#F05032",
      description: "Sistem kontrol versi terdistribusi untuk pelacakan kode",
    },
    {
      name: "GitHub",
      category: "DevOps & Alat",
      icon: "github",
      color: "#24292e",
      description: "Hosting repositori kode, kolaborasi, dan otomatisasi workflow",
    },
    {
      name: "Docker",
      category: "DevOps & Alat",
      icon: "docker",
      color: "#2496ED",
      description: "Kontainerisasi aplikasi untuk lingkungan pengujian yang konsisten",
    },
  ],

  // -----------------------------------------------------------------------
  // 4. PENGALAMAN KERJA (Work Experience - Kosong)
  // -----------------------------------------------------------------------
  experience: [],

  // -----------------------------------------------------------------------
  // 5. RIWAYAT PENDIDIKAN (Education)
  // -----------------------------------------------------------------------
  education: [
    {
      id: "edu-unpam",
      degree: "S1 Sistem Informasi (Mahasiswa Aktif)",
      institution: "Universitas Pamulang",
      period: "2025 — Sekarang",
      location: "Tangerang Selatan, Banten",
      highlights: [
        "Fokus pendalaman pada Arsitektur Jaringan Komputer, Rekayasa Sistem Informasi, dan Administrasi Basis Data",
        "Mengintegrasikan ilmu akademis sistem informasi dengan eksplorasi routing & switching Cisco dan MikroTik",
        "Mendalami otomasi dan konfigurasi perangkat jaringan di sela-sela waktu perkuliahan",
      ],
    },
    {
      id: "edu-sman6",
      degree: "Sekolah Menengah Atas — Peminatan MIPA (Matematika & IPA)",
      institution: "SMA Negeri 6 Batanghari",
      period: "2022 — 2025",
      location: "Batanghari, Jambi",
      highlights: [
        "Lulus peminatan MIPA dengan landasan logika matematika dan sains yang kuat",
        "Aktif dalam kegiatan ekstrakurikuler Teknologi Informasi & Komputer (TIK) serta kepemimpinan siswa",
      ],
    },
    {
      id: "edu-smpn3",
      degree: "Sekolah Menengah Pertama",
      institution: "SMP Negeri 3 Batanghari",
      period: "2019 — 2022",
      location: "Batanghari, Jambi",
      highlights: [
        "Menyelesaikan pendidikan dasar 9 tahun dengan prestasi baik (Masuk kelas 7 tahun 2019)",
        "Awal mula ketertarikan dan eksplorasi dasar perangkat keras komputer serta teknologi informasi",
      ],
    },
    {
      id: "edu-sdn64",
      degree: "Sekolah Dasar",
      institution: "SDN 64 Muara Bulian",
      period: "2013 — 2019",
      location: "Batanghari, Jambi",
      highlights: [
        "Menyelesaikan pendidikan dasar 6 tahun dengan baik",
        "Membangun dasar kemampuan akademik, disiplin, dan keaktifan kegiatan sekolah",
      ],
    },
  ],

  // -----------------------------------------------------------------------
  // 6. SERTIFIKASI & KREDENSIAL PROFESIONAL (Certifications - Kosong)
  // -----------------------------------------------------------------------
  certifications: [],

  // -----------------------------------------------------------------------
  // 7. DI LUAR TERMINAL & IDE (Foto & Memori Hobi)
  // -----------------------------------------------------------------------
  outsideTheIde: [
    {
      id: "photo-1",
      title: "Momen hiking",
      caption: "Menjelajahi alam dan menaklukkan tanjakan terjal, menyegarkan pikiran di ketinggian.",
      imageUrl: "/outdoor.jpeg",
      location: "Lembah Purba",
      year: "2025",
      rotation: -4,
    },
    {
      id: "photo-2",
      title: "Sunrise Gunung Luhur",
      caption: "Menikmati keindahan alam dan hangatnya sinar mentari pagi di puncak gunung setelah pendakian dini hari.",
      imageUrl: "/outdoor1.jpeg",
      location: "Gunung Luhur",
      year: "2025",
      rotation: 3,
    },
    {
      id: "photo-3",
      title: "Mencapai puncak Gunung Luhur",
      caption: "Menikmati udara sejuk dan pemandangan dari ketinggian.",
      imageUrl: "/outdoor2.jpeg",
      location: "Gunung Luhur",
      year: "2025",
      rotation: -2,
    },
    {
      id: "photo-4",
      title: "Momen hiking",
      caption: "Menikmati suasana alam dan kebersamaan di tengah sejuknya udara.",
      imageUrl: "/outdoor3.jpeg",
      location: "Lembah Purba",
      year: "2026",
      rotation: 4,
    },
  ],
};

// =========================================================================
// Helper Exports (Memungkinkan import langsung nama variabel)
// =========================================================================
export const profileData = portfolioConfig.profile;
export const projectsData = portfolioConfig.projects;
export const techStackData = portfolioConfig.techStack;
export const experienceData = portfolioConfig.experience;
export const educationData = portfolioConfig.education;
export const certificationsData = portfolioConfig.certifications;
export const photoMemories = portfolioConfig.outsideTheIde;
