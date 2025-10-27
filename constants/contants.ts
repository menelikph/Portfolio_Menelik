import { Project } from "@/app/components/project-detail";
import { mongo } from "mongoose";

export const EMAIL = "menelikdev@gmail.com";
export const GITHUB_URL = "https://github.com/menelikph";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/menelik-puerta-herrera-65769922a";

export const TECNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "Web design",
];


export const projects: Project[] = [
  {
  id: "portfolio",
  title: "Personal Portfolio Website",
  description:
    "A modern and responsive personal portfolio built with Next.js and HeroUI, designed to showcase projects, skills, and professional experience.",
  longDescription:
    "This portfolio website was crafted to present my professional journey as a Front-End Developer. Built with Next.js (App Router) and styled using HeroUI, it features dark and light themes with smooth transitions and an elegant, accessible interface. The goal is to provide an engaging experience where visitors can explore my projects, skills, and background. It also integrates SEO metadata for better visibility and uses responsive design techniques to adapt seamlessly to any device.",
  image: "/portfolio-screenshot.png",
  tags: ["Next.js", "TypeScript", "HeroUI", "Tailwind CSS", "MongoDB"],
  github: "https://github.com/menelikph/Portfolio_Menelik",
  demo: "https://portfolio-menelik.vercel.app",
  features: [
    "Dark and light theme toggle with Next-Themes",
    "Responsive layout using Tailwind and Grid",
    "Projects section with dynamic filtering",
    "Contact form with validation and email integration",
    "Smooth animations and transitions with Framer Motion",
  ],
  challenges: [
    "Creating a consistent design system across components",
    "Implementing theme switching with persistent user preference",
    "Optimizing images and metadata for SEO and performance",
  ],
}

];