import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import MinimalistHeroDemo from '@/components/ui/minimalist-hero-demo';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-amber-400 selection:text-black transition-colors duration-300">
          {/* Persistent Glassmorphic Navbar with Scrollspy, Theme & Language Switcher */}
          <Navbar />

          {/* 00 / Minimalist Hero Section */}
          <MinimalistHeroDemo />

          {/* 01 / About & Education Section */}
          <AboutSection />

          {/* 02 / Work Experience Section */}
          <ExperienceSection />

          {/* 03 / Featured Technical Projects Section */}
          <ProjectsSection />

          {/* 04 / Verified Certifications Section */}
          <CertificationsSection />

          {/* 05 / Skills Matrix Section */}
          <SkillsSection />

          {/* 06 / Contact & Inquiry Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
