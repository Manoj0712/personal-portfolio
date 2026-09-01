
export interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}
export interface ExperienceCard {
  experienceDetails: ExperienceCardProps
}

export interface SectionHeadingprops {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}
export interface SkillGroupProps {
  title: string;
  skills: string[];
}

export interface HeaderProps {
  scrollToSection: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  mobileMenu: boolean;
  setMobileMenu: (mobileMenu: boolean) => void;
}

export interface MobileNavigationProps {
  scrollToSection: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  mobileMenu: boolean;
}

export interface DeskTopActionsProps {
  scrollToSection: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  mobileMenu: boolean;
  setMobileMenu: (mobileMenu: boolean) => void;
}
export interface NavItemsProps {
  label: string;
  icon: any;
  routerName: string;
}