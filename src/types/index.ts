export interface TechItem {
  name: string;
  category: string;
  icon: string;
  color: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  featured?: boolean;
  isComingSoon?: boolean;
  status: 'Aktif' | 'Dalam Proses' | 'Unggulan' | 'Karya Utama';
  role: string;
  year: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: 'Purnawaktu' | 'Kontrak' | 'Lepas (Freelance)' | 'Magang';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
  skills: string[];
}

export interface PhotoMemory {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  location?: string;
  year: string;
  rotation?: number;
}

export interface Profile {
  name: string;
  handle: string;
  title: string;
  headline: string;
  bioIntro: string;
  bioDetail: string;
  location: string;
  availability: {
    status: 'available' | 'busy' | 'selective';
    label: string;
  };
  socials: {
    github: string;
    linkedin: string;
    instagram?: string;
    email: string;
    twitter?: string;
  };
  resumeUrl: string;
  avatarUrl: string;
  pixelAvatarUrl: string;
  stats: Array<{ label: string; value: string; desc?: string }>;
}

export interface PortfolioConfig {
  profile: Profile;
  projects: Project[];
  techStack: TechItem[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  outsideTheIde: PhotoMemory[];
}
