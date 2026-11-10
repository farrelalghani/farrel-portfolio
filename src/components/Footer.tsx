import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/social-icons';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-foreground/10 bg-background py-12 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <a href="#home" className="flex items-center gap-2 text-lg font-black tracking-widest">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-foreground text-background text-xs font-black">
                F
              </span>
              <span>FARREL.</span>
            </a>
            <p className="font-mono text-xs text-foreground/50">
              © {new Date().getFullYear()} Farrel Muhammad Alghani. {t.footer.rights}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="h-4 w-4" />
            </a>

            <div className="h-4 w-[1px] bg-foreground/10" />

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground/70 transition-colors hover:text-foreground"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

