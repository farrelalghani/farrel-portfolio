import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Search,
  X,
  CheckCircle2,
  Tag,
  ArrowUpRight,
  Eye,
} from 'lucide-react';
import { getPortfolioData, Project } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon } from '@/components/ui/social-icons';
import { TechIcon } from '@/components/ui/tech-icons';

type FilterCategory = 'all' | 'ar-3d' | 'fullstack';

export const ProjectsSection = () => {
  const { language, t } = useLanguage();
  const { projects } = getPortfolioData(language);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: FilterCategory; label: string; count: number }[] = [
    { key: 'all', label: t.projects.allTab, count: projects.length },
    {
      key: 'ar-3d',
      label: 'Augmented Reality & 3D',
      count: projects.filter((p) => p.category === 'ar-3d').length,
    },
    {
      key: 'fullstack',
      label: 'Full-Stack Web',
      count: projects.filter((p) => p.category === 'fullstack').length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-foreground/10 bg-background py-24 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300"
    >
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[480px] w-[480px] rounded-full bg-foreground/[0.02] blur-[150px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[450px] w-[450px] rounded-full bg-foreground/[0.02] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-12 sm:flex-row sm:items-end sm:justify-between border-b border-foreground/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/60">
              <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
              <span>{t.projects.sectionTag}</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {t.projects.heading}
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-foreground/60">
            {t.projects.subheading}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-xl transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-foreground text-background shadow-md'
                    : 'border border-foreground/15 bg-foreground/[0.03] dark:bg-white/[0.03] text-foreground/70 hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                    activeCategory === cat.key
                      ? 'bg-background/20 text-background'
                      : 'bg-foreground/10 text-foreground/70'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className="w-full rounded-full border border-foreground/15 bg-foreground/[0.03] dark:bg-white/[0.03] py-2 pl-9 pr-4 text-xs font-semibold text-foreground placeholder:text-foreground/40 backdrop-blur-xl focus:border-foreground/30 focus:outline-none shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Bento Horizontal Project Cards (Inspired by Reference) */}
        <div className="mt-10 space-y-8 sm:space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const projectNumber = String(idx + 1).padStart(2, '0');

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="dark-matte-glass-card group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 lg:p-11 transition-all duration-300 hover:border-foreground/30"
                >
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between border-b border-foreground/[0.08] pb-5 mb-7 text-xs font-mono text-foreground/60">
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold text-foreground/80 tracking-wide">
                        {project.period || '2026'}
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="text-foreground/65 font-medium">{project.categoryLabel}</span>
                    </div>

                    <span className="font-mono text-sm sm:text-base font-bold text-foreground/40 tracking-widest">
                      {projectNumber}
                    </span>
                  </div>

                  {/* 2-Column Bento Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Content, Metrics & Bullets */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                      <div>
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-foreground cursor-pointer transition-colors hover:text-foreground leading-tight"
                        >
                          {project.title}
                        </h3>

                        <p className="mt-2 font-mono text-xs sm:text-sm font-semibold text-foreground/60">
                          {project.subtitle}
                        </p>

                        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-foreground/75 font-normal">
                          {project.description}
                        </p>
                      </div>

                      {/* 3 Metric Inset Boxes (Bento Highlights) */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="rounded-xl sm:rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-3 sm:p-3.5 text-left transition-colors group-hover:border-foreground/20 shadow-inner"
                            >
                              <p className="font-mono text-base sm:text-lg lg:text-xl font-bold text-foreground tracking-tight">
                                {m.value}
                              </p>
                              <p className="mt-0.5 font-mono text-[9px] sm:text-[10px] text-foreground/45 uppercase tracking-wider">
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bullet Highlights */}
                      <div className="space-y-2.5 pt-2 border-t border-foreground/[0.08]">
                        {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/75"
                          >
                            <span className="text-foreground/40 font-bold shrink-0 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills & Action Buttons */}
                      <div className="pt-4 border-t border-foreground/[0.08] flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/80 flex items-center gap-1.5 transition-colors hover:border-foreground/25"
                            >
                              <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-foreground/15 bg-foreground/5 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
                              title="Source Code GitHub"
                              aria-label="GitHub Repository"
                            >
                              <GithubIcon className="h-3.5 w-3.5" />
                            </a>
                          )}

                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-foreground/20 bg-foreground/[0.04] px-3.5 py-1.5 text-xs font-bold text-foreground transition-all hover:border-foreground hover:text-foreground"
                          >
                            <span>{t.projects.detailBtn}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Preview Gallery */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="lg:col-span-6 cursor-pointer group/image"
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-foreground/15 bg-foreground/5 shadow-md">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="h-[280px] sm:h-[340px] lg:h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-black/80 px-3.5 py-1.5 font-mono text-xs font-bold text-black dark:text-white backdrop-blur-md opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 shadow-lg">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{t.projects.zoomBtn}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-foreground/20 p-12 text-center backdrop-blur-md">
            <p className="font-mono text-sm text-foreground/60">
              {t.projects.noResults} "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-foreground underline"
            >
              {t.projects.resetFilter}
            </button>
          </div>
        )}
      </div>

      {/* Comprehensive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="dark-matte-glass-card relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 shadow-2xl transition-all"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/[0.08] bg-foreground/5 dark:bg-black/40 text-foreground/70 backdrop-blur-md transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative -mx-6 -mt-6 sm:-mx-9 sm:-mt-9 mb-6 h-56 sm:h-72 w-[calc(100%+3rem)] sm:w-[calc(100%+4.5rem)] overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.5rem] bg-neutral-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute bottom-4 left-6 sm:left-9 right-6">
                  <span className="rounded-lg border border-white/20 bg-black/70 px-3 py-1 font-mono text-xs font-bold text-white uppercase backdrop-blur-md">
                    {selectedProject.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-foreground/60 mb-2">
                {selectedProject.period && <span>{selectedProject.period}</span>}
                {selectedProject.role && (
                  <>
                    <span>·</span>
                    <span className="text-foreground/80 font-bold">{selectedProject.role}</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                {selectedProject.title}
              </h3>

              <p className="mt-1 font-mono text-xs sm:text-sm text-foreground/70 font-semibold">
                {selectedProject.subtitle}
              </p>

              {/* Metrics Highlights */}
              {selectedProject.metrics && (
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-3 text-left shadow-inner"
                    >
                      <p className="font-mono text-base sm:text-lg font-black text-foreground">
                        {m.value}
                      </p>
                      <p className="mt-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Deep Technical Description */}
              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
                    {t.projects.modalSolution}
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] dark:bg-white/[0.035] p-5 shadow-inner">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">
                    {t.projects.modalFeatures}
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/80"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
                    {t.projects.modalTech}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-foreground/[0.08] bg-foreground/[0.04] dark:bg-white/[0.04] px-3 py-1.5 font-mono text-xs font-semibold text-foreground flex items-center gap-2"
                      >
                        <TechIcon name={tech} className="h-4 w-4 shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Live Demo & GitHub */}
                <div className="pt-6 border-t border-foreground/10 flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-black uppercase tracking-wider text-background hover:opacity-90 transition-all shadow-md"
                    >
                      <span>{t.projects.modalLive}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground hover:border-foreground hover:text-foreground transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>{t.projects.modalSource}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
