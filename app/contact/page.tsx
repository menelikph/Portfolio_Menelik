"use client"

import { motion } from "framer-motion"
import ContactForm from "@/app/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"
import { EMAIL } from "../../constants/contants"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get in Touch</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always open to discussing new
            opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Mail className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Phone className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-purple-500 transition-colors">
                     +57 304 134 18 09
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <MapPin className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">Medellin, Co</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m currently available for freelance work and full-time opportunities. Whether you have a project in
                mind or just want to connect, I&apos;d love to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond within 24 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
