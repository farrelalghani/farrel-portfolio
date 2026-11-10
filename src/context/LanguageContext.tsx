import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    certifications: string;
    skills: string;
    contact: string;
    contactButton: string;
  };
  hero: {
    title: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
    location: string;
  };
  about: {
    sectionTag: string;
    heading: string;
    subheading: string;
    summaryLead: string;
    summaryBody: string;
    waBtn: string;
    projectsBtn: string;
    statusText: string;
    educationTitle: string;
    thesisLabel: string;
  };
  experience: {
    sectionTag: string;
    heading: string;
    subheading: string;
    repoLink: string;
  };
  projects: {
    sectionTag: string;
    heading: string;
    subheading: string;
    allTab: string;
    searchPlaceholder: string;
    noResults: string;
    resetFilter: string;
    detailBtn: string;
    zoomBtn: string;
    modalSolution: string;
    modalFeatures: string;
    modalTech: string;
    modalLive: string;
    modalSource: string;
  };
  certifications: {
    sectionTag: string;
    heading: string;
    subheading: string;
    verifiedText: string;
    credentialText: string;
  };
  skills: {
    sectionTag: string;
    heading: string;
    subheading: string;
  };
  contact: {
    sectionTag: string;
    heading: string;
    subheading: string;
    leadTitle: string;
    leadBody: string;
    waLabel: string;
    emailLabel: string;
    locationLabel: string;
    formTitle: string;
    formSub: string;
    formBadge: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    formReset: string;
  };
  footer: {
    backToTop: string;
    rights: string;
    designed: string;
  };
}

export const translationsMap: Record<Language, Translations> = {
  id: {
    nav: {
      home: 'BERANDA',
      about: 'TENTANG',
      experience: 'PENGALAMAN',
      projects: 'KARYA',
      certifications: 'SERTIFIKASI',
      skills: 'KEAHLIAN',
      contact: 'KONTAK',
      contactButton: 'Hubungi',
    },
    hero: {
      title: 'SOFTWARE ENGINEER',
      description:
        'Software Engineer lulusan UNIKOM dengan spesialisasi rekayasa sistem web skalabel dan visualisasi spatial computing interaktif. Berpengalaman membangun sistem end-to-end yang tangguh, efisien, dan berpusat pada pengguna.',
      exploreBtn: 'Jelajahi Profil',
      contactBtn: 'Hubungi Saya',
      location: 'Bandung, Jawa Barat, ID',
    },
    about: {
      sectionTag: '01 / TENTANG SAYA',
      heading: 'Profil & Pendidikan',
      subheading: 'Software Engineer · Universitas Komputer Indonesia',
      summaryLead:
        'Software Engineer lulusan Sarjana Teknik Informatika UNIKOM dengan fokus pada arsitektur web skalabel dan pengembangan spatial computing interaktif.',
      summaryBody:
        'Terbiasa menangani siklus pengembangan aplikasi mulai dari perancangan skema database relasional, integrasi REST API dan payment gateway, hingga deployment server produksi. Di bidang spatial computing, aktif mengembangkan simulasi 3D interaktif dan WebAR berbasis browser.',
      waBtn: 'Hubungi via WhatsApp',
      projectsBtn: 'Lihat Proyek',
      statusText: 'Open for Projects & Hire',
      educationTitle: 'Pendidikan Formal',
      thesisLabel: 'Tugas Akhir / Skripsi (2026):',
    },
    experience: {
      sectionTag: '02 / PENGALAMAN KERJA',
      heading: 'Riwayat Profesional',
      subheading: 'Pengembangan sistem web produksi & kolaborasi teknis',
      repoLink: 'Lihat Repositori Proyek',
    },
    projects: {
      sectionTag: '03 / PROYEK TEKNIS',
      heading: 'Karya Pilihan',
      subheading: 'Augmented Reality, Web Full-Stack, dan spatial computing interaktif',
      allTab: 'Semua Proyek',
      searchPlaceholder: 'Cari proyek atau stack...',
      noResults: 'Tidak ada proyek yang sesuai dengan kata kunci',
      resetFilter: 'Reset Filter',
      detailBtn: 'Detail',
      zoomBtn: 'Perbesar Arsitektur',
      modalSolution: 'Latar Belakang & Solusi Rekayasa',
      modalFeatures: 'Keunggulan Arsitektur & Fitur Kunci',
      modalTech: 'Teknologi yang Digunakan',
      modalLive: 'Buka Live Demo',
      modalSource: 'Source Code GitHub',
    },
    certifications: {
      sectionTag: '04 / SERTIFIKASI RESMI',
      heading: 'Lisensi & Sertifikat',
      subheading: 'Sertifikasi kompetensi nasional BNSP, Google for Education, dan Cisco',
      verifiedText: 'Kompetensi Terverifikasi',
      credentialText: 'Official Credential',
    },
    skills: {
      sectionTag: '05 / KEAHLIAN TEKNIS',
      heading: 'Stack Teknologi',
      subheading: 'Bahasa pemrograman, framework, dan toolchain operasional',
    },
    contact: {
      sectionTag: '06 / KONTAK & DISKUSI',
      heading: 'Mari Terhubung',
      subheading: 'Terbuka untuk diskusi proyek web full-stack, spatial computing AR, atau peluang kerja sama.',
      leadTitle: 'Siap mewujudkan ide digital Anda?',
      leadBody: 'Silakan hubungi saya melalui jalur komunikasi tercepat di bawah ini atau kirimkan detail kebutuhan melalui formulir pesan.',
      waLabel: 'Respon Cepat (WhatsApp)',
      emailLabel: 'Email Resmi',
      locationLabel: 'Lokasi Domisili',
      formTitle: 'Kirim Pesan Langsung',
      formSub: 'Formulir terhubung langsung ke email resmi Farrel.',
      formBadge: 'Direct Email',
      formName: 'Nama Lengkap Anda',
      formNamePlaceholder: 'Contoh: Budi Santoso',
      formEmail: 'Alamat Email',
      formEmailPlaceholder: 'nama@perusahaan.com',
      formMessage: 'Detail Kebutuhan / Pesan',
      formMessagePlaceholder: 'Ceritakan proyek web, aplikasi AR, atau peluang kolaborasi yang ingin Anda bicarakan...',
      formSubmit: 'Kirim Pesan Sekarang',
      formSuccessTitle: 'Terima kasih telah mengirimkan pesan!',
      formSuccessBody: 'Klien email Anda telah terbuka dengan draft pesan ini.',
      formReset: 'Kirim pesan lain',
    },
    footer: {
      backToTop: 'Kembali ke Atas',
      rights: 'Seluruh hak cipta dilindungi.',
      designed: 'Dirancang & dibangun dengan React 19, TypeScript, dan Tailwind CSS.',
    },
  },
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      certifications: 'CERTIFICATES',
      skills: 'SKILLS',
      contact: 'CONTACT',
      contactButton: 'Contact',
    },
    hero: {
      title: 'SOFTWARE ENGINEER',
      description:
        'Software Engineer graduated from UNIKOM specializing in scalable web systems and interactive spatial computing. Experienced in delivering robust, high-performance, and user-centric end-to-end architectures.',
      exploreBtn: 'Explore Profile',
      contactBtn: 'Get In Touch',
      location: 'Bandung, West Java, ID',
    },
    about: {
      sectionTag: '01 / ABOUT ME',
      heading: 'Profile & Education',
      subheading: 'Software Engineer · Universitas Komputer Indonesia',
      summaryLead:
        'Software Engineer graduated with a Bachelor of Computer Science from UNIKOM, focusing on scalable web architectures and interactive spatial computing.',
      summaryBody:
        'Hands-on expertise across full application lifecycles—from relational database modeling, REST API & payment gateway integrations, to production server deployments. In spatial computing, actively developing browser-based WebAR and 3D simulations.',
      waBtn: 'Contact via WhatsApp',
      projectsBtn: 'View Projects',
      statusText: 'Open for Projects & Hire',
      educationTitle: 'Formal Education',
      thesisLabel: 'Undergraduate Thesis (2026):',
    },
    experience: {
      sectionTag: '02 / WORK EXPERIENCE',
      heading: 'Professional Track Record',
      subheading: 'Production web systems engineering & technical collaboration',
      repoLink: 'View Project Repository',
    },
    projects: {
      sectionTag: '03 / TECHNICAL PROJECTS',
      heading: 'Selected Works',
      subheading: 'Augmented Reality, Full-Stack Web, and interactive spatial computing',
      allTab: 'All Projects',
      searchPlaceholder: 'Search projects or tech stack...',
      noResults: 'No projects found matching keyword',
      resetFilter: 'Reset Filter',
      detailBtn: 'Details',
      zoomBtn: 'Inspect Architecture',
      modalSolution: 'Background & Engineering Solution',
      modalFeatures: 'Key Architecture & Core Highlights',
      modalTech: 'Technologies Used',
      modalLive: 'Open Live Demo',
      modalSource: 'GitHub Repository',
    },
    certifications: {
      sectionTag: '04 / OFFICIAL CERTIFICATIONS',
      heading: 'Licenses & Credentials',
      subheading: 'Official competence certifications from BNSP, Google for Education, and Cisco',
      verifiedText: 'Verified Competency',
      credentialText: 'Official Credential',
    },
    skills: {
      sectionTag: '05 / TECHNICAL SKILLS',
      heading: 'Technology Stack',
      subheading: 'Programming languages, frameworks, and operational toolchains',
    },
    contact: {
      sectionTag: '06 / CONTACT & INQUIRY',
      heading: "Let's Connect",
      subheading: 'Open for discussions regarding full-stack web projects, AR spatial computing, or software engineering roles.',
      leadTitle: 'Ready to bring your digital vision to life?',
      leadBody: 'Reach out via the fastest communication channels below or drop your project specifications through the inquiry form.',
      waLabel: 'Fast Response (WhatsApp)',
      emailLabel: 'Official Email',
      locationLabel: 'Location & Base',
      formTitle: 'Send a Direct Inquiry',
      formSub: 'This form will instantly generate an email draft to Farrel.',
      formBadge: 'Direct Email',
      formName: 'Your Full Name',
      formNamePlaceholder: 'e.g. John Doe',
      formEmail: 'Email Address',
      formEmailPlaceholder: 'name@company.com',
      formMessage: 'Project Details / Message',
      formMessagePlaceholder: 'Tell me about your web platform, AR app, or engineering opportunity...',
      formSubmit: 'Send Message Now',
      formSuccessTitle: 'Thank you for your message!',
      formSuccessBody: 'Your email client has opened with your inquiry draft.',
      formReset: 'Send another message',
    },
    footer: {
      backToTop: 'Back to Top',
      rights: 'All rights reserved.',
      designed: 'Engineered & built with React 19, TypeScript, and Tailwind CSS.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang') as Language | null;
      if (saved === 'id' || saved === 'en') return saved;
    }
    return 'id';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translationsMap[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

