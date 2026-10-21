import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface NavItemsProps {
  label: string;
  icon: IconType;
  routerName: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  bg: string;
}

export interface StatProps {
  value: string;
  label: string;
  icon: IconType;
  gradient: string;
}

export interface TechIconProps {
  name: string;
  src: string;
  invert?: boolean;
}

export interface WhatIDoProps {
  title: string;
  image: string;
  skills: string[];
  points: string[];
}

export interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  sector: string;
  type: string;
  current?: boolean;
  logo: string;
  color: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  website?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  icon: IconType;
  color: string;
  featured?: boolean;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroupProps {
  title: string;
  dot: string;
  skills: string[];
}

export interface SectionHeadingprops {
  icon: IconType;
  title: string;
  description: string;
  gradient?: string;
  width?: string;
  padding?: string;
  children?: ReactNode;
}

export interface CallToActionButton {
  label: string;
  routerName: string;
}

export interface CallToActionProps {
  title: string;
  description: string;
  primary: CallToActionButton;
  secondary: CallToActionButton;
  primaryGradient?: string;
}

export interface ContactCardProps {
  icon: IconType;
  title: string;
  sub: string;
  value: string;
  href: string;
}

export interface FaqProps {
  q: string;
  a: string;
}
