import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { getPortfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { TechIcon } from '@/components/ui/tech-icons';

export const AboutSection = () => {
  const { language, t } = useLanguage();
  const { personalInfo } = getPortfolioData(language);

  return (
    <section id="about" className="relative overflow-hidden border-t border-foreground/10 bg-background py-24 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[420px] w-[420px] rounded-full bg-foreground/[0.02] blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[380px] w-[380px] rounded-full bg-foreground/[0.02] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:items-end sm:justify-between border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
              <span>{t.about.sectionTag}</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {t.about.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-foreground/60">
            {t.about.subheading}
          </p>
        </div>

        {/* Main Balanced 2-Column Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Narrative Summary, Actions & Location */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-foreground/80">
              <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {t.about.summaryBody}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-black tracking-wider uppercase text-background transition-all hover:opacity-90 hover:shadow-lg"
              >
                <span>{t.about.waBtn}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-xs font-bold tracking-wider uppercase text-foreground transition-all hover:border-foreground hover:text-foreground backdrop-blur-sm"
              >
                {t.about.projectsBtn}
              </a>
            </div>

            {/* Location & Status Bar */}
            <div className="dark-matte-glass-card rounded-2xl p-4 flex items-center justify-between font-mono text-xs text-foreground/70 transition-colors hover:border-foreground/20">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-foreground/50" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.about.statusText}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Highlight Card */}
          <div className="lg:col-span-6">
            <div className="dark-matte-glass-card group relative overflow-hidden rounded-[2rem] p-7 sm:p-9 transition-all duration-300 hover:border-foreground/30">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/[0.02] blur-2xl" />
              
              <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-4 mb-5 text-xs font-mono">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-foreground/70">
                  <GraduationCap className="h-4 w-4 text-foreground" />
                  <span>{t.about.educationTitle}</span>
                </div>
                <span className="font-semibold text-foreground/50">
                  {personalInfo.education.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                  {personalInfo.education.institution}
                </h3>
                <p className="mt-1 text-sm font-bold text-foreground/80">
                  {personalInfo.education.degree} · <span className="font-mono text-foreground font-black">GPA {personalInfo.education.gpa}</span>
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-4.5 shadow-inner">
                <p className="font-mono text-[11px] font-bold text-foreground/50 uppercase tracking-wider">
                  {t.about.thesisLabel}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-foreground leading-relaxed">
                  "{personalInfo.education.thesis}"
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  language === 'en' ? 'Chemical 3D Simulation' : 'Simulasi 3D Kimia',
                  'Vuforia Marker Tracking',
                  'Unity C#',
                  language === 'en' ? 'Internal X-Ray Mode' : 'Mode X-Ray Praktikum',
                ].map((tSkill) => (
                  <span
                    key={tSkill}
                    className="rounded-lg border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-medium text-foreground/80 flex items-center gap-2 transition-colors hover:border-foreground/30"
                  >
                    <TechIcon name={tSkill} className="h-3.5 w-3.5 shrink-0" />
                    <span>{tSkill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
