import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/data/portfolioData';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navSections = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(navSections[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navSections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -75;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 sm:px-8 md:px-12 lg:px-16',
        isScrolled
          ? 'backdrop-blur-2xl bg-background/80 border-b border-foreground/10 py-3 shadow-lg shadow-black/[0.04]'
          : 'backdrop-blur-md bg-background/50 border-b border-foreground/5 py-4 sm:py-5'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, 'home')}
          className="group flex items-center gap-2 text-lg sm:text-xl font-black tracking-widest text-foreground shrink-0"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background text-xs font-black shadow-sm">
            F
          </span>
          <span className="tracking-widest">FARREL.</span>
        </a>

        {/* Desktop Nav with Glassmorphic Active Pill (Ryan Hildan Style) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/[0.03] dark:bg-black/40 p-1 backdrop-blur-xl shadow-inner mx-auto"
        >
          {navSections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={cn(
                  'relative px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-colors duration-200 uppercase',
                  isActive
                    ? 'text-foreground font-black'
                    : 'text-foreground/60 hover:text-foreground'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="liquid-glass-pill absolute inset-0 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher, Dark Mode & WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Language Switcher Capsule [ID | EN] */}
          <div className="flex items-center rounded-full border border-foreground/15 bg-foreground/[0.04] p-0.5 text-xs font-mono font-bold backdrop-blur-md">
            <button
              onClick={() => setLanguage('id')}
              className={cn(
                'rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200',
                language === 'id'
                  ? 'bg-foreground text-background shadow-sm'
                  : 'text-foreground/50 hover:text-foreground'
              )}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200',
                language === 'en'
                  ? 'bg-foreground text-background shadow-sm'
                  : 'text-foreground/50 hover:text-foreground'
              )}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Ganti ke mode ${theme === 'dark' ? 'terang' : 'gelap'}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.04] text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.08]"
            title={`Mode saat ini: ${theme === 'dark' ? 'Mode Gelap' : 'Mode Terang'}`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 transition-transform hover:rotate-90 duration-300 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 transition-transform hover:-rotate-12 duration-300 text-foreground" />
            )}
          </button>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider text-background transition-all hover:opacity-90 hover:shadow-md"
          >
            <span>{t.nav.contactButton}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Actions: Language Switcher, Theme Toggle, Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center rounded-full border border-foreground/15 bg-foreground/[0.04] p-0.5 text-xs font-mono font-bold">
            <button
              onClick={() => setLanguage('id')}
              className={cn(
                'rounded-full px-2 py-0.5 text-[10px] font-bold transition-all',
                language === 'id' ? 'bg-foreground text-background' : 'text-foreground/50'
              )}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'rounded-full px-2 py-0.5 text-[10px] font-bold transition-all',
                language === 'en' ? 'bg-foreground text-background' : 'text-foreground/50'
              )}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.04] text-foreground"
          >
            {theme === 'dark' ? <Sun className="h-3.5 w-3.5 text-foreground" /> : <Moon className="h-3.5 w-3.5 text-foreground" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 text-foreground"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Glassmorphism */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-6 right-6 mt-3 rounded-2xl border border-foreground/15 bg-background/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navSections.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollTo(e, item.id)}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-all',
                      isActive
                        ? 'liquid-glass-pill text-foreground font-black'
                        : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                    )}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <div className="pt-3 border-t border-foreground/10 flex items-center justify-end">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xs text-foreground hover:underline"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
