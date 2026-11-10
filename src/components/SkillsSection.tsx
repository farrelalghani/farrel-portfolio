import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Layers, Terminal, Database, ShieldCheck } from 'lucide-react';
import { getPortfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { TechIcon } from '@/components/ui/tech-icons';

const getCategoryIcon = (category: string) => {
  const c = category.toLowerCase();
  if (c.includes('bahasa') || c.includes('programming')) return Terminal;
  if (c.includes('web')) return Layers;
  if (c.includes('augmented') || c.includes('3d') || c.includes('spatial')) return Sparkles;
  if (c.includes('database')) return Database;
  if (c.includes('data') || c.includes('ai') || c.includes('intelligence')) return Cpu;
  return ShieldCheck;
};

export const SkillsSection = () => {
  const { language, t } = useLanguage();
  const { skillCategories } = getPortfolioData(language);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-foreground/10 bg-background py-24 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300"
    >
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[450px] w-[450px] rounded-full bg-foreground/[0.02] blur-[150px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[400px] w-[400px] rounded-full bg-foreground/[0.02] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:items-end sm:justify-between border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
              <span>{t.skills.sectionTag}</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {t.skills.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-foreground/60">
            {t.skills.subheading}
          </p>
        </div>

        {/* Skills Categories Grid with Dark Matte Glass & Real Tech Logos */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            const skillNumber = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="dark-matte-glass-card group relative overflow-hidden rounded-[2rem] p-6 sm:p-7 transition-all duration-300 hover:border-foreground/30"
              >
                <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.05] text-foreground/80">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <span className="font-mono text-xs font-bold text-foreground/40 tracking-wider">
                    {skillNumber}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-foreground/60 min-h-[36px]">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-foreground/[0.08]">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/badge flex items-center gap-2 rounded-lg border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs text-foreground/85 transition-all hover:border-foreground/25 hover:bg-foreground/[0.07]"
                    >
                      <TechIcon name={skill.name} className="h-3.5 w-3.5 shrink-0" />
                      <span className="font-medium text-[11px]">{skill.name}</span>
                      {skill.level && (
                        <span className="rounded bg-foreground/10 dark:bg-white/10 px-1.5 py-0.2 text-[9px] font-semibold text-foreground/50">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
