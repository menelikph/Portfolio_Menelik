"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TECNOLOGIES } from "../constants/contants";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-bl from-purple-900/20 from-2% via-purple-800/50 via-10% to-transparent to-60% pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="staatliches-regular bg-linear-to-r dark:from-purple-500  dark:to-purple-200 from-purple-500 to-purple-950 bg-clip-text text-transparent">Menelik Puerta</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-purple-950 dark:text-purple-100 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend Developer
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I build accessible, pixel-perfect digital experiences for the web.
              Specializing in React, Next.js, and TypeScript to create
              interfaces that blend thoughtful design with robust engineering.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                as={Link}
                href="/projects"
                color="secondary"
                size="lg"
                className=" flex  justify-between bg-purple-600 hover:bg-purple-700 py-4 px-6  rounded-lg text-white font-medium"
              >
                <>
                  {" "}
                  <p>View Projects</p> <ArrowRight className="w-6 h-6" />{" "}
                </>
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10 py-4 px-6  rounded-lg font-medium"
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-muted-foreground hover:text-purple-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technologies & Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TECNOLOGIES.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-background border border-border rounded-lg p-6 text-center hover:border-purple-500 transition-colors"
                >
                  <p className="font-medium text-foreground">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
              <Button
                as={Link}
                href="/projects"
                variant="light"
                endContent={<ArrowRight className="w-4 h-4" />}
                className="text-purple-500"
              >
                View All
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Portfolio project",
                  description:
                    "A portfolio website to showcase my projects and skills, built with Next.js and HeroUI.",
                  tags: ["Next.js", "TypeScript", "HeroUI", "Tailwind CSS", "MongoDB"],
                },
                
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-secondary/50 border border-border rounded-lg p-6 hover:border-purple-500 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
