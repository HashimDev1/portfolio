import {
  Code2,
  Server,
  Database,
  Smartphone,
  Palette,
  Wrench,
  DownloadCloud,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";



export const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, responsive, animated web interfaces using React, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Secure REST APIs using Node.js, Express.js, authentication, validation, and clean backend structure.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "MongoDB and Firebase database integration for real-time and scalable application data.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile application development using Flutter and Firebase.",
  },
  {
    icon: Wrench,
    title: "Project Debugging",
    description:
      "Fixing frontend, backend, Firebase, API, and deployment-related project issues.",
  },
];

export const projects = [
  {
    title: "Repair Marketplace",
    description:
      "A full-stack repair service marketplace where customers post repair jobs and vendors apply with offers.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "YouTube Downloader Web App",
    description:
      "A web app for downloading videos and audio with format and quality options.",
    tech: ["Node.js", "Express", "yt-dlp", "FFmpeg"],
  },
  {
    title: "Mobile App Projects",
    description: "Flutter and Firebase-based mobile app projects.",
    tech: ["Flutter", "Firebase"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio with modern UI and animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
];


export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hashim8611932@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3357244455",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
  },
];
