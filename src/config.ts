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
    title: "Network & Infrastructure Engineer",
    headline: "Mendalami rekayasa jaringan komputer, perancangan routing & switching dengan Cisco IOS dan MikroTik RouterOS.",
    bioIntro: "Mahasiswa S1 Sistem Informasi di Universitas Pamulang dengan fokus minat mendalam pada rekayasa jaringan komputer, khususnya perangkat Cisco IOS dan MikroTik RouterOS.",
    bioDetail: "Saat ini sedang menempuh studi S1 Sistem Informasi di Universitas Pamulang, sembari aktif mempelajari dan mempraktikkan konfigurasi topologi jaringan, routing dinamis, manajemen bandwidth, dan firewall pada Cisco dan MikroTik.",
    location: "Indonesia / Tersedia Remote & On-site",
    availability: {
      status: "available",
      label: "Terbuka untuk peluang Magang & Junior Network Engineer",
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
      { label: "Fokus Studi", value: "S1 SI", desc: "Sistem Informasi Universitas Pamulang" },
      { label: "Perangkat Utama", value: "2 Vendor", desc: "Cisco IOS & MikroTik RouterOS" },
      { label: "Karya & Lab", value: "Coming Soon", desc: "dalam tahap pengujian dan dokumentasi" },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. KARYA & PROYEK PORTOFOLIO (Coming Soon)
  // -----------------------------------------------------------------------
  projects: [
    {
      id: "net-lab-soon",
      title: "Arsitektur & Dokumentasi Lab Jaringan",
      slug: "lab-jaringan-coming-soon",
      tagline: "Dokumentasi implementasi routing & switching Cisco IOS dan MikroTik RouterOS segera hadir.",
      description: "Perancangan topologi jaringan, konfigurasi inter-VLAN routing, protokol routing dinamis, manajemen bandwidth, dan implementasi firewall sedang dalam proses pengujian lab dan penyusunan dokumentasi. Hasil konfigurasi dan skema jaringan akan segera dirilis.",
      featured: true,
      status: "Dalam Proses",
      isComingSoon: true,
      role: "Network Enthusiast",
      year: "2025",
      techStack: ["Cisco IOS", "MikroTik RouterOS"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Sedang dalam tahap perancangan topologi lab Cisco IOS & MikroTik",
        "Dokumentasi konfigurasi dan skema jaringan akan segera dipublikasikan",
      ],
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
      title: "Hiking & Mendaki Gunung",
      caption: "Menjelajahi jalur pendakian alam bebas, menaklukkan tanjakan terjal, dan menyegarkan pikiran di ketinggian.",
      imageUrl: "/outdoor.jpeg",
      location: "Jalur Pendakian Pegunungan",
      year: "2024",
      rotation: -4,
    },
    {
      id: "photo-2",
      title: "Matahari Terbit di Puncak",
      caption: "Menikmati lautan awan emas dan hangatnya sinar mentari pagi di puncak gunung setelah pendakian dini hari.",
      imageUrl: "/outdoor1.jpeg",
      location: "Puncak Gunung (2.500+ mdpl)",
      year: "2024",
      rotation: 3,
    },
    {
      id: "photo-3",
      title: "Trekking Menyusuri Hutan Alami",
      caption: "Menikmati udara sejuk pegunungan, rimbunnya vegetasi hijau, dan aliran air alami sepanjang perjalanan.",
      imageUrl: "/outdoor2.jpeg",
      location: "Lembah & Jalur Hutan",
      year: "2024",
      rotation: -2,
    },
    {
      id: "photo-4",
      title: "Momen Pendakian & Basecamp",
      caption: "Momen istirahat dan kebersamaan di tenda camp di tengah sejuknya udara malam pegunungan.",
      imageUrl: "/outdoor3.jpeg",
      location: "Pos Camp Pendakian",
      year: "2024",
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
