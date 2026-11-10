import React from 'react';
import { Mail } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { getPortfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/social-icons';

export const MinimalistHeroDemo = () => {
  const { language, t } = useLanguage();
  const { personalInfo } = getPortfolioData(language);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: personalInfo.githubUrl, label: 'GitHub Profile' },
    { icon: LinkedinIcon, href: personalInfo.linkedinUrl, label: 'LinkedIn Profile' },
    { icon: WhatsappIcon, href: personalInfo.whatsappUrl, label: 'WhatsApp Chat' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Send Email' },
  ];

  return (
    <MinimalistHero
      logoText="FARREL."
      navLinks={navLinks}
      mainText={t.hero.description}
      exploreBtnText={t.hero.exploreBtn}
      contactBtnText={t.hero.contactBtn}
      readMoreLink="#about"
      imageSrc="/profile-side.png"
      imageAlt="Farrel Muhammad Alghani - Side profile portrait"
      overlayText={{
        part1: 'code &',
        part2: 'spatial.',
      }}
      socialLinks={socialLinks}
      locationText={t.hero.location}
    />
  );
};

export default MinimalistHeroDemo;
