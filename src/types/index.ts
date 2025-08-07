export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
