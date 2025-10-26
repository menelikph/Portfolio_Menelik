"use client"

import { motion } from "framer-motion"
import { Card, CardBody, CardFooter, Chip } from "@heroui/react"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring product management, shopping cart, and Stripe payment integration.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    tags: ["React", "MongoDB", "Socket.io", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/weather-dashboard-dark-theme.jpg",
    tags: ["React", "API Integration", "Charts", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description:
      "No-code portfolio builder allowing users to create beautiful portfolio websites with customizable templates.",
    image: "/portfolio-builder-interface.png",
    tags: ["Next.js", "CMS", "Tailwind", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "chat-application",
    title: "Real-Time Chat App",
    description: "Modern chat application with real-time messaging, file sharing, and group chat capabilities.",
    image: "/chat-application-dark-interface.jpg",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard with data visualization, reporting, and real-time metrics tracking.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tags: ["Next.js", "D3.js", "TypeScript", "API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Projects</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A collection of my recent work, showcasing various technologies and approaches to solving real-world
            problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-secondary/50 border border-border hover:border-purple-500 transition-all group">
                <CardBody className="p-0">
                  <Link href={`/projects/${project.id}`}>
                    <div className="relative overflow-hidden rounded-t-lg aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="sm"
                          className="bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="border-t border-border px-6 py-4 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
