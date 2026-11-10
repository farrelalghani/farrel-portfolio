import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { getPortfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { TechIcon } from '@/components/ui/tech-icons';

export const CertificationsSection = () => {
  const { language, t } = useLanguage();
  const { certifications } = getPortfolioData(language);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-foreground/10 bg-background py-24 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300"
    >
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[440px] w-[440px] rounded-full bg-foreground/[0.02] blur-[140px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-[400px] w-[400px] rounded-full bg-foreground/[0.02] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:items-end sm:justify-between border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
              <span>{t.certifications.sectionTag}</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {t.certifications.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-foreground/60">
            {t.certifications.subheading}
          </p>
        </div>

        {/* Certifications Grid with Dark Matte Glass & Official Logos */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, idx) => {
            const certNumber = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="dark-matte-glass-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:border-foreground/30"
              >
                <div>
                  {/* Top Meta Bar with Real Issuer Logo */}
                  <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-4 mb-5 text-xs font-mono text-foreground/60">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.05]">
                        <TechIcon name={cert.issuer} className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-semibold text-foreground/80 tracking-wide">
                        {cert.type}
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="text-foreground/50">{cert.date}</span>
                    </div>

                    <span className="font-mono text-xs sm:text-sm font-bold text-foreground/40 tracking-wider">
                      {certNumber}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-foreground">
                    {cert.title}
                  </h3>

                  <p className="mt-1.5 font-mono text-xs font-medium text-foreground/60">
                    {cert.issuer}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-foreground/75 font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/[0.08] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{t.certifications.verifiedText}</span>
                  </div>
                  <span className="text-foreground/40 font-mono text-[11px]">{t.certifications.credentialText}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
