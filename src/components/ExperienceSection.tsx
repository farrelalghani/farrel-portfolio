import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { getPortfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { TechIcon } from '@/components/ui/tech-icons';

export const ExperienceSection = () => {
  const { language, t } = useLanguage();
  const { experiences } = getPortfolioData(language);

  return (
    <section id="experience" className="relative overflow-hidden border-t border-foreground/10 bg-background py-24 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[450px] w-[450px] rounded-full bg-foreground/[0.02] blur-[140px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-[380px] w-[380px] rounded-full bg-foreground/[0.02] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:items-end sm:justify-between border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
              <span>{t.experience.sectionTag}</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {t.experience.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-foreground/60">
            {t.experience.subheading}
          </p>
        </div>

        {/* Experience List */}
        <div className="mt-12 space-y-8">
          {experiences.map((exp, idx) => {
            const expNumber = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="dark-matte-glass-card group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 transition-all duration-300 hover:border-foreground/30"
              >
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-5 mb-7 text-xs font-mono text-foreground/60">
                  <div className="flex items-center gap-2.5">
                    <span className="font-semibold text-foreground/80 tracking-wide">
                      {exp.period}
                    </span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-foreground/65 font-medium">{exp.type}</span>
                  </div>

                  <span className="font-mono text-sm sm:text-base font-bold text-foreground/40 tracking-widest">
                    {expNumber}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                  {/* Left Meta Info */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                        {exp.company}
                      </h3>

                      <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-foreground/75">
                        {exp.role}
                      </p>

                      <div className="mt-3 flex items-center gap-2 font-mono text-xs text-foreground/60">
                        <MapPin className="h-3.5 w-3.5 text-foreground/50" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {exp.repositoryUrl && (
                      <div className="mt-6 pt-4 border-t border-foreground/[0.08]">
                        <a
                          href={exp.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-foreground/80 hover:text-foreground hover:underline"
                        >
                          <span>{t.experience.repoLink}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Description & Accomplishments */}
                  <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      {exp.description.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills badges as dark matte pills with official tech logos */}
                    <div className="pt-4 border-t border-foreground/[0.08] flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-medium text-foreground/80 flex items-center gap-2 transition-colors hover:border-foreground/25"
                        >
                          <TechIcon name={skill} className="h-3.5 w-3.5 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
