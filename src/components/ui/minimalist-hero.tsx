import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: React.ComponentType<{ className?: string }>; href: string; label?: string }[];
  locationText: string;
  badgeText?: string;
  exploreBtnText?: string;
  contactBtnText?: string;
  showInnerHeader?: boolean;
  className?: string;
}

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="group relative text-xs font-semibold tracking-widest uppercase text-foreground/70 transition-colors hover:text-foreground"
  >
    <span>{children}</span>
    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
  </a>
);

const SocialIcon = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label || 'Social Link'}
    className="group flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/10 hover:text-foreground hover:scale-105"
  >
    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  badgeText = 'Available for Q1 2026',
  exploreBtnText = 'Explore Profile',
  contactBtnText = 'Hubungi Saya',
  showInnerHeader = false,
  className,
}: MinimalistHeroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-6 pt-24 font-sans sm:p-8 sm:pt-28 md:p-12 md:pt-32 lg:px-16 selection:bg-yellow-400 selection:text-black transition-colors duration-300',
        className
      )}
    >
      {/* Subtle warm ambient lighting */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[140px]" />

      {/* Optional Inner Header */}
      {showInnerHeader && (
        <header className="z-40 flex w-full max-w-7xl items-center justify-between border-b border-foreground/10 pb-5">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-2 text-xl font-black tracking-widest"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background text-xs font-black">
              F
            </span>
            <span className="tracking-widest">{logoText}</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center space-x-7 lg:space-x-9 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right CTA / Badge */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{badgeText}</span>
            </motion.div>
          </div>

          {/* Mobile menu trigger */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/15 text-foreground md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </header>
      )}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {showInnerHeader && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-24 left-6 right-6 z-50 rounded-2xl border border-foreground/15 bg-background/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-foreground/10 flex items-center justify-between text-xs text-foreground/70">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {badgeText}
                </span>
                <span>{locationText}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative my-auto grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-8 py-8 md:grid-cols-3 md:gap-4 md:py-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.03] px-3 py-1 text-xs font-mono font-medium text-foreground/80 mb-4 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-yellow-400" />
            <span>Software Engineer · S.Kom UNIKOM</span>
          </div>

          <p className="mx-auto max-w-sm text-sm sm:text-base leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={readMoreLink}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-background transition-all hover:bg-yellow-400 hover:text-black hover:shadow-lg"
            >
              <span>{exploreBtnText}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-foreground transition-all hover:border-yellow-400/60 hover:text-foreground"
            >
              <span>{contactBtnText}</span>
            </a>
          </div>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full bg-yellow-400/90 shadow-[0_0_60px_rgba(250,204,21,0.25)] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px]"
          ></motion.div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-64 object-contain md:w-80 lg:w-[24rem] max-h-[380px] md:max-h-[480px] lg:max-h-[540px] translate-y-3 md:translate-y-5 lg:translate-y-7 drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] select-none pointer-events-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://cdn.21st.dev/assets/mirror/69/69f133c713200aa29789f9f07a83f105cc28793926179eb4a224b0454a743a00.svg`;
            }}
          />
        </div>

        {/* Right Text / Big Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-end md:text-right lg:pl-6"
        >
          <h1 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase leading-[0.9]">
            <span className="block text-foreground">{overlayText.part1}</span>
            <span className="block text-yellow-400">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-5 sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center space-x-3"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-2 font-mono text-xs font-medium text-foreground/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
          <span>{locationText}</span>
        </motion.div>
      </footer>
    </section>
  );
};
