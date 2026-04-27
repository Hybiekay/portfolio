import {
  BookOpen,
  Briefcase,
  Cloud,
  Code2,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Smartphone
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const projects = [
  {
    name: 'Eulogia Technologies',
    description: 'Building resilient digital platforms and infrastructure systems powering modern African businesses.',
    tags: ['Infrastructure', 'SaaS', 'Leadership']
  },
  {
    name: 'EuCloudHost',
    description: 'A hosting and VPS operations brand focused on performance, reliability, and scale for growth-stage teams.',
    tags: ['Cloud', 'DevOps', 'VPS']
  },
  {
    name: 'SchoolHQ',
    description: 'An education operating system for institutions managing learning, operations, and communication in one place.',
    tags: ['EdTech', 'Platform', 'Web']
  },
  {
    name: 'Flint Dart',
    description: 'Dart-first developer tooling and architecture utilities enabling faster Flutter product delivery.',
    tags: ['Flutter', 'Dart', 'Tooling']
  },
  {
    name: 'ClipZy',
    description: 'A creative utility platform streamlining media workflows and quick publishing for digital creators.',
    tags: ['Product', 'Creator Economy', 'Mobile']
  },
  {
    name: 'Gate Africa',
    description: 'Cross-border digital gateway concept focused on access, identity, and trusted African commerce rails.',
    tags: ['Fintech', 'Identity', 'Ecosystem']
  }
];

export const skills = [
  { title: 'Mobile Development', icon: Smartphone, text: 'Production-grade Flutter and Dart applications with polished UX.' },
  { title: 'Backend Engineering', icon: Code2, text: 'Robust APIs, secure architecture, and scalable service design.' },
  { title: 'Web Development', icon: Layers, text: 'High-converting product websites and operational dashboards.' },
  { title: 'Cloud Infrastructure', icon: Cloud, text: 'VPS deployment strategy, automation, uptime, and observability.' },
  { title: 'Product Strategy', icon: Briefcase, text: 'Founder-level prioritization, market positioning, and execution.' },
  { title: 'Teaching', icon: BookOpen, text: 'Practical training systems that help people ship real products.' }
];

export const experiences = [
  {
    role: 'CEO',
    company: 'Eulogia Technologies',
    icon: Briefcase,
    summary: 'Leading vision, product architecture, and growth across infrastructure and software products.'
  },
  {
    role: 'Mobile App Instructor',
    company: 'Appclick Technology',
    icon: BookOpen,
    summary: 'Training aspiring engineers in Flutter and mobile product development with practical cohorts.'
  },
  {
    role: 'Founder & Product Builder',
    company: 'Independent Ventures',
    icon: Layers,
    summary: 'Building and launching platforms that solve operational and market access problems.'
  },
  {
    role: 'Computer Science Student',
    company: 'University of the People',
    icon: GraduationCap,
    summary: 'Strengthening theoretical depth in systems, algorithms, and applied computing.'
  }
];

export const metrics = [
  { label: '95+ VPS managed', value: '95+' },
  { label: 'Real products in production', value: '06' },
  { label: 'Students trained', value: '150+' },
  { label: 'Multiple platforms built', value: '10+' }
];

export const contacts = [
  { label: 'Email', value: 'ademola@eulogia.tech', href: 'mailto:ademola@eulogia.tech', icon: Mail },
  { label: 'WhatsApp', value: '+234 000 000 0000', href: 'https://wa.me/2340000000000', icon: MessageCircle },
  { label: 'LinkedIn', value: 'linkedin.com/in/ademola', href: 'https://linkedin.com/in/ademola', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/ademola', href: 'https://github.com/ademola', icon: Github }
];
