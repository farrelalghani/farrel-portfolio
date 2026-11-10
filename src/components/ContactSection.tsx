import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { getPortfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/social-icons';

export const ContactSection = () => {
  const { language, t } = useLanguage();
  const { personalInfo } = getPortfolioData(language);
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-foreground/10 bg-background py-24 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300"
    >
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[460px] w-[460px] rounded-full bg-foreground/[0.02] blur-[150px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[420px] w-[420px] rounded-full bg-foreground/[0.02] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:items-end sm:justify-between border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
              <span>{t.contact.sectionTag}</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {t.contact.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-foreground/60">
            {t.contact.subheading}
          </p>
        </div>

        {/* Contact Grid with Glassmorphic Elements */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Action & Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-foreground">
                {t.contact.leadTitle}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {t.contact.leadBody}
              </p>
            </div>

            {/* Direct Cards with Dark Matte Glass */}
            <div className="space-y-3.5">
              {/* WhatsApp Quick Action with Official WhatsApp Green */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-matte-glass-card group flex items-center justify-between rounded-2xl p-4.5 transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.03]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 text-[#25D366]">
                    <WhatsappIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold text-[#25D366] uppercase tracking-wider">
                      {t.contact.waLabel}
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#25D366] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Email Card with Copy button */}
              <div className="dark-matte-glass-card rounded-2xl p-4.5 flex items-center justify-between transition-colors hover:border-foreground/30">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] text-foreground/75">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
                      {t.contact.emailLabel}
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block truncate text-xs sm:text-sm font-bold text-foreground hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-foreground/[0.08] bg-foreground/[0.04] text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="dark-matte-glass-card rounded-2xl p-4.5 flex items-center gap-3.5 font-mono text-xs text-foreground/70 transition-colors hover:border-foreground/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] text-foreground/75">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
                    {t.contact.locationLabel}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground font-sans">
                    {personalInfo.location} (UTC+7)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-matte-glass-card flex items-center gap-2 rounded-full px-4.5 py-2 text-xs font-mono font-semibold text-foreground transition-all hover:border-foreground/40 shadow-sm"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-matte-glass-card flex items-center gap-2 rounded-full px-4.5 py-2 text-xs font-mono font-semibold text-foreground transition-all hover:border-foreground/40 shadow-sm"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form with Dark Matte Glass Panel */}
          <div className="lg:col-span-7">
            <div className="dark-matte-glass-card group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 transition-all duration-300 hover:border-foreground/30">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-foreground/[0.02] blur-3xl" />

              <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {t.contact.formTitle}
                  </h4>
                  <p className="mt-0.5 font-mono text-xs text-foreground/60">
                    {t.contact.formSub}
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-foreground/50">
                  {t.contact.formBadge}
                </span>
              </div>

              {formSubmitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center backdrop-blur-md">
                  <Check className="mx-auto h-8 w-8 text-emerald-400" />
                  <p className="mt-2 text-sm font-bold text-foreground">
                    {t.contact.formSuccessTitle}
                  </p>
                  <p className="mt-1 text-xs text-foreground/70">
                    {t.contact.formSuccessBody}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 text-xs font-semibold text-foreground underline"
                  >
                    {t.contact.formReset}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.formNamePlaceholder}
                      className="w-full rounded-xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-3.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none shadow-inner transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.formEmailPlaceholder}
                      className="w-full rounded-xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-3.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none shadow-inner transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.formMessagePlaceholder}
                      className="w-full rounded-xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-3.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none shadow-inner transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground p-4 text-xs font-bold uppercase tracking-wider text-background transition-all hover:opacity-90 hover:shadow-lg"
                  >
                    <span>{t.contact.formSubmit}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

