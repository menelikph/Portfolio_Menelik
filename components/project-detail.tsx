"use client"

import { motion } from "framer-motion"
import { Button, Chip } from "@heroui/react"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github: string
  demo: string
  features: string[]
  challenges: string[]
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button
            as={Link}
            href="/projects"
            variant="light"
            startContent={<ArrowLeft className="w-4 h-4" />}
            className="mb-8 text-purple-500"
          >
            Back to Projects
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Chip key={tag} size="md" className="bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {tag}
              </Chip>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <Button
              as="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              startContent={<Github className="w-4 h-4" />}
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              View Code
            </Button>
            <Button
              as="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              startContent={<ExternalLink className="w-4 h-4" />}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Live Demo
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-lg aspect-video mb-12 border border-border">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
