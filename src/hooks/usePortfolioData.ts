import { useState, useEffect } from 'react';

// Type definitions
export interface PersonalData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  resume: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface SkillsData {
  technical: {
    category: string;
    icon: string;
    skills: string[];
  }[];
  stats: {
    number: string;
    label: string;
  }[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
}

export interface ProjectsData {
  featured: Project[];
  categories: {
    key: string;
    label: string;
  }[];
}

export interface ContentData {
  navigation: {
    brand: string;
    items: { label: string; href: string }[];
  };
  hero: {
    greeting: string;
    subtitle: string;
    cta: {
      projects: string;
      download: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
  };
  projects: {
    title: string;
    subtitle: string;
    buttons: {
      viewLive: string;
      viewCode: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    followMe: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
    madeWith: string;
    tech: string;
    builtWith: string;
    backToTop: string;
  };
}

export const usePortfolioData = () => {
  const [personal, setPersonal] = useState<PersonalData | null>(null);
  const [skills, setSkills] = useState<SkillsData | null>(null);
  const [projects, setProjects] = useState<ProjectsData | null>(null);
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        const [personalRes, skillsRes, projectsRes, contentRes] = await Promise.all([
          import('../data/personal.json'),
          import('../data/skills.json'),
          import('../data/projects.json'),
          import('../data/content.json')
        ]);

        setPersonal(personalRes.default);
        setSkills(skillsRes.default);
        setProjects(projectsRes.default);
        setContent(contentRes.default);
      } catch (err) {
        setError('Failed to load portfolio data');
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    personal,
    skills,
    projects,
    content,
    loading,
    error
  };
};
