import { Language } from '@/context/LanguageContext';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ar-3d' | 'fullstack' | 'ai-ml';
  categoryLabel: string;
  image: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  techStack: string[];
  period?: string;
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  repositoryUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: string;
  credentialId?: string;
  description: string;
  badgeColor: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export const getPortfolioData = (lang: Language = 'id') => {
  const isEn = lang === 'en';

  const personalInfo = {
    name: 'Farrel Muhammad Alghani',
    shortName: 'Farrel',
    title: 'Software Engineer',
    subTitle: isEn
      ? 'Bachelor of Computer Science (S.Kom), Universitas Komputer Indonesia'
      : 'Sarjana Teknik Informatika (S.Kom), Universitas Komputer Indonesia',
    summary: isEn
      ? 'Software Engineer graduated with a Bachelor of Computer Science from UNIKOM, focusing on scalable web architectures and interactive spatial computing. Experienced in delivering robust, high-performance, and user-centric end-to-end architectures—from relational database modeling, REST API & payment integrations, to production deployments, reinforced with BNSP-certified data analytics and AI adoption.'
      : 'Software Engineer lulusan Sarjana Teknik Informatika UNIKOM dengan fokus pada arsitektur web skalabel dan pengembangan spatial computing interaktif. Berpengalaman merancang sistem perangkat lunak end-to-end mulai dari skema database relasional, integrasi API & payment gateway, hingga deployment server produksi, diperkuat dengan keahlian analitik data bersertifikasi BNSP dan adopsi AI.',
    location: 'Bandung, West Java, Indonesia',
    email: 'farrelmuhammadalghani17@gmail.com',
    phone: '+62 822-1543-3017',
    whatsappUrl: isEn
      ? 'https://wa.me/6282215433017?text=Hello%20Farrel,%20I%20am%20interested%20in%20discussing%20a%20project%20or%20job%20opportunity.'
      : 'https://wa.me/6282215433017?text=Halo%20Farrel,%20saya%20tertarik%20berdiskusi%20tentang%20proyek%20atau%20peluang%20kerja.',
    linkedinUrl: 'https://linkedin.com/in/farrelalghani',
    githubUrl: 'https://github.com/farrelalghani',
    education: {
      institution: 'Universitas Komputer Indonesia (UNIKOM)',
      location: 'Bandung, Indonesia',
      degree: isEn
        ? 'Bachelor of Computer Science (S.Kom)'
        : 'Sarjana Teknik Informatika (S.Kom)',
      period: '2022 – 2026',
      gpa: '3.12 / 4.00',
      thesis: isEn
        ? 'Development of an Augmented Reality (AR) Based Virtual Chemistry Laboratory Interactive Multimedia on the Android Platform'
        : 'Pembangunan Multimedia Interaktif Laboratorium Virtual Kimia Berbasis Augmented Reality (AR) Pada Platform Android',
    },
    stats: [
      { label: isEn ? 'UNIKOM GPA' : 'IPK UNIKOM', value: '3.12' },
      { label: isEn ? 'Certifications' : 'Sertifikasi Resmi', value: '04' },
      { label: isEn ? 'Projects' : 'Proyek Rekayasa', value: '07+' },
      { label: isEn ? 'Graduation' : 'Tahun Kelulusan', value: '2026' },
    ],
  };

  const experiences: Experience[] = [
    {
      id: 'boboin-villa',
      company: 'Boboin Villa',
      role: isEn ? 'Freelance Full-Stack Engineer' : 'Freelance Full-Stack Engineer',
      period: isEn ? 'Jun 2026 – Sep 2026' : 'Jun 2026 – Sep 2026',
      location: 'Bandung, Indonesia',
      type: isEn ? 'Freelance Contract' : 'Kontrak Freelance',
      description: isEn
        ? [
            'Architected and deployed an end-to-end villa booking platform using Laravel MVC and Livewire, covering relational database modeling to production deployment.',
            'Integrated Xendit payment gateway REST API to automate real-time digital payment verification, eliminating manual ledger reconciliations.',
            'Designed comprehensive admin analytics dashboards to monitor reservation trends, occupancy rates, and monthly revenue summaries.',
            'Communicated directly with stakeholders for requirement elicitation, iterative feature refinement, and production server setup.',
          ]
        : [
            'Membangun platform pemesanan villa end-to-end berskala produksi menggunakan arsitektur MVC Laravel dan Livewire, mencakup perancangan struktur database kompleks hingga tahap deployment.',
            'Mengintegrasikan REST API payment gateway Xendit untuk mengotomatisasi verifikasi pembayaran digital secara real-time, mengeliminasi proses pencatatan manual.',
            'Merancang dashboard admin komprehensif dilengkapi visualisasi data analitik untuk memantau performa reservasi, ketersediaan hunian, dan rekapitulasi laporan keuangan bulanan.',
            'Berkomunikasi langsung dengan klien untuk requirement gathering, revisi fitur berkala, dan persiapan deployment ke server produksi.',
          ],
      skills: ['Laravel', 'Livewire', 'Xendit REST API', 'MySQL', 'Tailwind CSS', 'Admin Analytics Dashboard'],
    },
    {
      id: 'sinar-mulia',
      company: 'PT. Sinar Mulia Plasindo Lestari',
      role: isEn ? 'Intern Full-Stack Developer' : 'Intern Full-Stack Developer',
      period: isEn ? 'Sep 2025 – Nov 2025' : 'Sep 2025 – Nov 2025',
      location: 'Bandung, Indonesia',
      type: isEn ? 'Corporate Internship' : 'Magang Perusahaan',
      repositoryUrl: 'https://github.com/ryanmhildan/koperasi-pos',
      description: isEn
        ? [
            'Developed an integrated Point of Sale (POS) cooperative web platform alongside internal IT teams using Laravel 11, Livewire, and Tailwind CSS.',
            'Enforced granular role-based access control via Spatie Laravel Permission to segregate permissions across executives, cashiers, and cooperative members.',
            'Engineered a reactive cashier checkout interface without page reloads, accelerating daily sales logging and member record maintenance.',
            'Standardized transaction data flows and centralized inventory reporting.',
          ]
        : [
            'Mengembangkan website Koperasi Terpadu berbasis Point of Sale (POS) bersama tim IT menggunakan Laravel 11, Livewire, dan Tailwind CSS.',
            'Menerapkan manajemen hak akses multi-peran dengan paket Spatie Laravel Permission agar pengurus, kasir, dan anggota memiliki wewenang yang terpisah dan aman.',
            'Membangun antarmuka transaksi kasir yang reaktif tanpa reload halaman lewat komponen Livewire, serta merapikan alur data penjualan dan keanggotaan koperasi.',
            'Mengimplementasikan standarisasi alur data transaksi dan pelaporan inventaris barang secara terpusat.',
          ],
      skills: ['Laravel 11', 'Livewire', 'Spatie Permission (RBAC)', 'Tailwind CSS', 'POS Architecture', 'Git Collaboration'],
    },
  ];

  const certifications: Certification[] = [
    {
      id: 'bnsp-da',
      title: isEn ? 'Data Analyst (Competency Certificate)' : 'Data Analyst (Sertifikat Kompetensi)',
      issuer: isEn
        ? 'National Professional Certification Agency (BNSP) & LSP Telematika'
        : 'Badan Nasional Sertifikasi Profesi (BNSP) & LSP Informatika',
      date: isEn ? 'August 2026' : 'Agustus 2026',
      type: isEn ? 'National Professional Certification' : 'Sertifikasi Profesi Nasional',
      badgeColor: 'border-white/10 bg-white/5 text-zinc-300',
      description: isEn
        ? 'Official national competency certification in enterprise data analysis, relational database querying, statistical data modeling, and actionable operational dashboard visualization.'
        : 'Sertifikasi kompetensi resmi standar nasional untuk analisis data bisnis, querying database relasional, pemodelan data statistik, dan penyusunan visualisasi insight operasional.',
    },
    {
      id: 'google-gemini',
      title: 'Gemini Certified Student',
      issuer: 'Google for Education',
      date: isEn ? 'August 2026' : 'Agustus 2026',
      type: 'Google AI Certification',
      badgeColor: 'border-white/10 bg-white/5 text-zinc-300',
      description: isEn
        ? 'Demonstrated competency in Google Gemini generative AI implementation, prompt engineering, AI API integrations, and ethical LLM deployment.'
        : 'Kompetensi implementasi model AI generatif Gemini, prompting engineering, integrasi API kecerdasan buatan, dan etika implementasi solusi berbasis LLM.',
    },
    {
      id: 'cisco-cyber',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: isEn ? 'June 2025' : 'Juni 2025',
      type: 'Cisco Credential',
      badgeColor: 'border-white/10 bg-white/5 text-zinc-300',
      description: isEn
        ? 'Comprehensive understanding of cybersecurity fundamentals, network defense strategies, web application vulnerability vectors (OWASP), and threat mitigation.'
        : 'Pemahaman mendalam mengenai prinsip keamanan siber, pertahanan ancaman jaringan, kerentanan sistem web (OWASP), dan mitigasi serangan digital.',
    },
    {
      id: 'cisco-ccna',
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: isEn ? 'February 2024' : 'Februari 2024',
      type: 'Cisco Credential',
      badgeColor: 'border-white/10 bg-white/5 text-zinc-300',
      description: isEn
        ? 'Core concepts of computer networking architectures, OSI & TCP/IP models, IPv4/IPv6 addressing, subnetting, and Cisco router/switch configuration.'
        : 'Konsep dasar arsitektur jaringan komputer, model OSI & TCP/IP, IP addressing (IPv4/IPv6), subnetting, serta konfigurasi router dan switch Cisco.',
    },
  ];

  const projects: Project[] = [
    {
      id: 'simular-hplc',
      title: 'SimulAR HPLC',
      subtitle: isEn
        ? 'Virtual Chemistry Laboratory via Augmented Reality Android'
        : 'Laboratorium Virtual Kimia Berbasis Augmented Reality Android',
      category: 'ar-3d',
      categoryLabel: isEn ? 'Augmented Reality & 3D' : 'Augmented Reality & 3D',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      period: isEn ? 'Undergraduate Thesis · 2026' : 'Tugas Akhir · 2026',
      role: 'Lead AR Engineer & 3D Modeler',
      featured: true,
      githubUrl: 'https://github.com/farrelalghani/simular-hplc',
      liveUrl: undefined,
      description: isEn
        ? 'Android Augmented Reality application for simulating High Performance Liquid Chromatography (HPLC) procedures. Features interactive 3D instrument visualization, Vuforia marker tracking, and real-time X-Ray internal fluid simulation for safe and cost-effective procedural chemistry education.'
        : 'Aplikasi Augmented Reality Android untuk simulasi praktikum High Performance Liquid Chromatography (HPLC). Menghadirkan visualisasi instrumen 3D interaktif berbasis marker tracking dan simulasi Mode X-Ray sebagai media pembelajaran prosedural praktikum kimia yang aman dan hemat biaya.',
      detailedDescription: isEn
        ? 'SimulAR HPLC addresses the prohibitive costs of high-performance liquid chromatography laboratory hardware in secondary and higher education. Leveraging Vuforia marker tracking and precision 3D asset modeling in Blender, students can disassemble, inspect internal mobile-phase fluid dynamics, and perform procedural lab runs with zero equipment damage risk.'
        : 'SimulAR HPLC memecahkan masalah mahalnya peralatan laboratorium kromatografi cair bertekanan tinggi (HPLC) di institusi pendidikan SMK/Universitas. Melalui teknologi marker tracking Vuforia dan pemodelan instrumen 3D presisi tinggi di Blender, mahasiswa dapat membongkar, menginspeksi alur fluida eluen, serta menjalankan simulasi praktikum analitik tanpa risiko kerusakan alat instrumen fisik berharga puluhan juta.',
      metrics: [
        { label: 'Frame Rate', value: '60 FPS Solid' },
        { label: isEn ? 'Tracking Latency' : 'Latensi Tracking', value: '<25ms Instant' },
        { label: 'Platform', value: 'Android APK' },
      ],
      highlights: isEn
        ? [
            '3D chemical laboratory instrument visualization using Vuforia marker tracking',
            'Interactive X-Ray Mode revealing internal HPLC fluid circulation and column separation',
            'Drastically improves procedural mastery with zero risk of instrument damage',
            '3D assets modeled and optimized in Blender 4.x for stable 60 FPS mobile performance',
          ]
        : [
            'Visualisasi instrumen 3D laboratorium kimia dengan marker tracking Vuforia',
            'Fitur Mode X-Ray interaktif untuk melihat aliran komponen internal HPLC',
            'Meningkatkan efisiensi pembelajaran prosedural tanpa risiko kerusakan alat nyata',
            'Asset 3D dioptimasi secara manual menggunakan Blender untuk performa mobile 60 FPS',
          ],
      techStack: ['Unity 3D', 'Vuforia Engine', 'Blender 4.x', 'C#', 'Android SDK'],
    },
    {
      id: 'webar-bisindo',
      title: 'WebAR Belajar BISINDO',
      subtitle: isEn
        ? 'Web-Based Sign Language Education via Real-Time Hand Gesture Detection'
        : 'Edukasi Bahasa Isyarat Berbasis Web & Deteksi Gestur Tangan',
      category: 'ar-3d',
      categoryLabel: isEn ? 'Augmented Reality & 3D' : 'Augmented Reality & 3D',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      period: isEn ? 'Accessibility Research · 2025' : 'Accessibility Research · 2025',
      role: 'Computer Vision & WebAR Developer',
      featured: true,
      githubUrl: 'https://github.com/farrelalghani/webar-bisindo',
      liveUrl: 'https://farrelalghani.github.io/webar-bisindo',
      description: isEn
        ? 'Zero-install web-based augmented reality application for Indonesian Sign Language (BISINDO) fingerspelling. Leverages MediaPipe Hand Landmarker to detect 21 hand joints via webcam, paired with Three.js 3D alphabet rendering and Web Speech synthesis.'
        : 'Aplikasi augmented reality berbasis web tanpa instalasi untuk mengeja kata dalam bahasa isyarat BISINDO. Memanfaatkan deteksi gerakan tangan real-time menggunakan webcam, dilengkapi visualisasi huruf 3D interaktif dan Text-to-Speech (TTS) untuk mendukung edukasi yang inklusif.',
      detailedDescription: isEn
        ? 'Designed to lower barriers in learning Indonesian Sign Language (BISINDO) directly from standard web browsers. MediaPipe Hand Landmarker tracks 21 skeletal joints in real time, while Three.js renders 3D responsive alphabet feedback accompanied by automated speech synthesis.'
        : 'Aplikasi ini dirancang untuk mempermudah siapa saja mempelajari abjad jari Bahasa Isyarat Indonesia (BISINDO) langsung dari peramban web tanpa memerlukan sensor eksternal khusus. Model machine learning MediaPipe Hand Landmarker melacak 21 titik persendian tangan secara real-time melalui kamera webcam, kemudian Three.js me-render alfabet 3D interaktif yang bersuara otomatis saat gestur dieksekusi dengan benar.',
      metrics: [
        { label: isEn ? 'Tracking Points' : 'Titik Tracking', value: '21 Landmark Keypoints' },
        { label: 'Zero Install', value: 'Direct Web Browser' },
        { label: 'Feedback', value: 'Speech Synthesis (TTS)' },
      ],
      highlights: isEn
        ? [
            'Real-time 21 hand-joint coordinate tracking via MediaPipe Hand Landmarker',
            'Interactive 3D alphabet models rendered in-browser using Three.js',
            'Automated Text-to-Speech (Web Speech API) audio feedback on verified gestures',
            'Zero-install instant browser accessibility on mobile and desktop',
          ]
        : [
            'Deteksi 21 titik koordinat gestur tangan secara real-time via MediaPipe Hand Landmarker',
            'Render model 3D alfabet interaktif dengan Three.js langsung di browser',
            'Sintesis suara Text-to-Speech (Web Speech API) otomatis saat gestur berhasil dikenali',
            'Akses instan dari browser mobile dan desktop tanpa perlu install aplikasi native',
          ],
      techStack: ['Three.js', 'MediaPipe Hand Landmarker', 'JavaScript', 'HTML5/CSS3', 'Web Speech API'],
    },
    {
      id: 'boboin-villa-platform',
      title: 'Boboin Villa Booking Platform',
      subtitle: isEn
        ? 'End-to-End Accommodation Booking & Payment Automation'
        : 'Sistem Reservasi Villa End-to-End & Payment Automation',
      category: 'fullstack',
      categoryLabel: isEn ? 'Full-Stack Web' : 'Full-Stack Web',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      period: isEn ? 'Freelance Production · 2026' : 'Freelance Production · 2026',
      role: 'Full-Stack Web Architect',
      featured: true,
      githubUrl: 'https://github.com/farrelalghani/BoboinVIilla',
      liveUrl: undefined,
      description: isEn
        ? 'Production accommodation reservation platform architected with Laravel MVC and Livewire. Features full Xendit payment gateway integration for automated real-time verification and analytics dashboard for reservation trends.'
        : 'Platform reservasi penginapan mewah end-to-end yang dibangun dengan Laravel MVC & Livewire. Dilengkapi integrasi payment gateway Xendit untuk verifikasi pembayaran real-time serta dashboard analitik reservasi dan pendapatan bulanan.',
      detailedDescription: isEn
        ? 'Engineered a modern villa booking ecosystem from system architecture to production deployment. Eliminates double-booking via atomic reservation locking, automates collections across Virtual Accounts, QRIS, and E-Wallets via Xendit webhooks, and delivers financial summaries.'
        : 'Membangun sistem pemesanan villa mewah dari tahap arsitektur hingga deployment produksi. Platform ini mengotomatiskan seluruh alur bisnis mulai dari pengecekan ketersediaan tanggal reservasi, pencegahan double-booking kamar, penagihan instan via Xendit payment gateway (Virtual Account, QRIS, E-Wallet) dengan webhook callback, hingga dashboard analitik keuangan bulanan bagi pemilik villa.',
      metrics: [
        { label: 'Payment Gateway', value: 'Xendit REST API & Webhook' },
        { label: isEn ? 'Verification' : 'Verifikasi', value: isEn ? 'Instant Real-Time' : 'Otomatis Real-Time' },
        { label: 'Dashboard', value: isEn ? 'Live Financial Analytics' : 'Live Financial Analytics' },
      ],
      highlights: isEn
        ? [
            'Integrated Xendit Payment Gateway REST API (VA, QRIS, E-Wallet) with automated webhooks',
            'Real-time analytics dashboard monitoring occupancy, guest demographics, and revenue',
            'Reactive Livewire components for fast checkout with conflict-free availability locking',
            'Custom calendar reservation manager preventing double-bookings',
          ]
        : [
            'Integrasi Xendit Payment Gateway REST API (VA, QRIS, E-Wallet) dengan webhook otomatis',
            'Dashboard analitik real-time memantau okupansi kamar, tren tamu, dan grafik omzet',
            'Komponen reaktif Livewire untuk pemesanan cepat dengan validasi ketersediaan instan',
            'Manajemen kalender check-in/check-out anti-bentrok dengan locking session',
          ],
      techStack: ['Laravel', 'Livewire', 'Xendit REST API', 'MySQL', 'Tailwind CSS', 'Chart.js'],
    },
    {
      id: 'koperasi-pos',
      title: 'Koperasi Terpadu Point of Sale',
      subtitle: isEn
        ? 'Multi-Role POS Cashier & Member Governance System'
        : 'Sistem POS Kasir & Manajemen Keanggotaan Multi-Role',
      category: 'fullstack',
      categoryLabel: isEn ? 'Full-Stack Web' : 'Full-Stack Web',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?auto=format&fit=crop&w=1200&q=80',
      period: isEn ? 'Corporate Internship · 2025' : 'Internship · 2025',
      role: 'Full-Stack Developer',
      githubUrl: 'https://github.com/ryanmhildan/koperasi-pos',
      liveUrl: 'https://github.com/ryanmhildan/koperasi-pos',
      featured: true,
      description: isEn
        ? 'Point of Sale (POS) and employee cooperative management system for PT. Sinar Mulia Plasindo Lestari. Delivers reactive cashier checkout, member balance administration, and Role-Based Access Control (RBAC).'
        : 'Aplikasi web Point of Sale (POS) dan tata kelola koperasi simpan pinjam/belanja untuk PT. Sinar Mulia Plasindo Lestari. Menyediakan checkout kasir reaktif, pencatatan transaksi anggota, dan sistem kontrol hak akses berbasis peran (RBAC).',
      detailedDescription: isEn
        ? 'Co-engineered with PT. Sinar Mulia Plasindo Lestari internal IT staff to modernize operational workflows. Employs Laravel 11 and Livewire for a rapid zero-reload cashier interface, coupled with Spatie RBAC separating administrators, cashiers, and cooperative members.'
        : 'Dibangun bersama tim IT PT. Sinar Mulia Plasindo Lestari untuk memodernisasi tata kelola koperasi karyawan. Sistem ini memiliki antarmuka kasir super reaktif berkecepatan tinggi tanpa reload halaman menggunakan Laravel 11 dan Livewire, dilengkapi Role-Based Access Control (RBAC) Spatie yang memisahkan otoritas antara pengurus, kasir, dan anggota.',
      metrics: [
        { label: 'Framework', value: 'Laravel 11 + Livewire' },
        { label: 'Access Control', value: 'Spatie RBAC Multi-Role' },
        { label: isEn ? 'Open Source' : 'Open Source', value: isEn ? 'Available on GitHub' : 'Tersedia di GitHub' },
      ],
      highlights: isEn
        ? [
            'Multi-role RBAC (Board, Cashier, Member) via Spatie Laravel Permission',
            'High-speed cashier checkout with zero page reloads via reactive Livewire',
            'Automated member dividend (SHU), discount calculations, and transaction ledgers',
            'Centralized inventory tracking for inbound and outbound retail goods',
          ]
        : [
            'Multi-role RBAC (Pengurus, Kasir, Anggota) via Spatie Laravel Permission',
            'Proses checkout reaktif tanpa reload halaman dengan Livewire',
            'Kalkulasi diskon anggota, sisa hasil usaha (SHU), dan riwayat mutasi otomatis',
            'Pencatatan inventori stok barang keluar/masuk secara terpusat',
          ],
      techStack: ['Laravel 11', 'Livewire', 'Spatie Permission', 'Tailwind CSS', 'MySQL', 'Alpine.js'],
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: isEn ? 'Programming Languages' : 'Bahasa Pemrograman',
      description: isEn
        ? 'Core languages used in backend engineering, modern frontend, AI scripting, and 3D simulation'
        : 'Bahasa inti yang digunakan dalam rekayasa backend, frontend, skrip AI, dan simulasi 3D',
      skills: [
        { name: 'PHP', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'C# (Unity)', level: 'Intermediate' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
      ],
    },
    {
      category: isEn ? 'Web & Full-Stack Frameworks' : 'Web & Full-Stack Frameworks',
      description: isEn
        ? 'Modern, reactive, and scalable web application architectures'
        : 'Arsitektur aplikasi web modern, reaktif, dan skalabel',
      skills: [
        { name: 'Laravel (MVC)', level: 'Advanced' },
        { name: 'Livewire & Volt', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Vite', level: 'Advanced' },
        { name: 'RESTful API Architecture', level: 'Advanced' },
      ],
    },
    {
      category: isEn ? 'Augmented Reality & 3D Spatial' : 'Augmented Reality & 3D',
      description: isEn
        ? 'Spatial computing, real-time hand gesture recognition, and interactive 3D modeling'
        : 'Pengembangan spatial computing, deteksi gestur, dan visualisasi 3D',
      skills: [
        { name: 'Unity 3D', level: 'Advanced' },
        { name: 'Vuforia Engine (Marker Tracking)', level: 'Advanced' },
        { name: 'Three.js (WebAR / WebGL)', level: 'Intermediate' },
        { name: 'MediaPipe Hand Landmarker', level: 'Intermediate' },
        { name: 'Blender (3D Modeling & UV)', level: 'Intermediate' },
        { name: 'Computer Vision (OpenCV)', level: 'Intermediate' },
      ],
    },
    {
      category: isEn ? 'Database & Business Integrations' : 'Database & Integrasi Bisnis',
      description: isEn
        ? 'Transactional data management, automated payment gateways, and analytical querying'
        : 'Manajemen data transaksi, payment gateway, dan querying analitik',
      skills: [
        { name: 'MySQL Relational Database', level: 'Advanced' },
        { name: 'Payment Gateway (Xendit)', level: 'Advanced' },
        { name: 'phpMyAdmin', level: 'Advanced' },
        { name: 'Spatie Permission (RBAC)', level: 'Advanced' },
        { name: 'Webhook & Event Listener', level: 'Intermediate' },
      ],
    },
    {
      category: isEn ? 'Data Science & Artificial Intelligence' : 'Data Science & AI',
      description: isEn
        ? 'BNSP-certified statistical data analysis and generative AI model implementation'
        : 'Analisis data bersertifikat BNSP dan implementasi model kecerdasan buatan',
      skills: [
        { name: 'Data Analytics (BNSP Certified)', level: 'Certified' },
        { name: 'Google Gemini & GenAI', level: 'Certified' },
        { name: 'Machine Learning (Scikit-Learn)', level: 'Intermediate' },
        { name: 'Deep Learning (TensorFlow/Keras)', level: 'Intermediate' },
        { name: 'Data Visualization', level: 'Advanced' },
      ],
    },
    {
      category: isEn ? 'Developer Tools & Infrastructure' : 'Developer Tools & Infrastruktur',
      description: isEn
        ? 'Team collaboration toolchains, prototyping, and foundational networking'
        : 'Toolchain kolaborasi tim, prototyping, dan pemahaman jaringan',
      skills: [
        { name: 'Git & GitHub Workflow', level: 'Advanced' },
        { name: 'Figma (UI/UX Prototyping)', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Cisco Networking (CCNA)', level: 'Certified' },
        { name: 'Cybersecurity Fundamentals', level: 'Certified' },
        { name: 'Katalon Studio (Automation Test)', level: 'Intermediate' },
      ],
    },
  ];

  return {
    personalInfo,
    experiences,
    certifications,
    projects,
    skillCategories,
  };
};

// Default export in Indonesian for backward compatibility
const defaultData = getPortfolioData('id');
export const personalInfo = defaultData.personalInfo;
export const experiences = defaultData.experiences;
export const certifications = defaultData.certifications;
export const projects = defaultData.projects;
export const skillCategories = defaultData.skillCategories;
