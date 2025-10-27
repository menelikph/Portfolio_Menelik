"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Button, Input, Textarea } from "@heroui/react"
import { Send } from "lucide-react"

interface ContactFormData {
  fullName: string
  email: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          
          <Input
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            label="Full Name"
            placeholder="John Doe"
            variant="bordered"
            isInvalid={!!errors.fullName}
            errorMessage={errors.fullName?.message}
            classNames={{
              input: "bg-background",
              inputWrapper: "border-border hover:border-purple-500 focus-within:border-purple-500",
            }}
          />
        </div>

        <div>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
            label="Email"
            placeholder="john@example.com"
            variant="bordered"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            classNames={{
              input: "bg-background",
              inputWrapper: "border-border hover:border-purple-500 focus-within:border-purple-500",
            }}
          />
        </div>

        <div>
          <Textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            label="Message"
            placeholder="Tell me about your project..."
            variant="bordered"
            minRows={6}
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
            classNames={{
              input: "bg-background",
              inputWrapper: "border-border hover:border-purple-500 focus-within:border-purple-500",
            }}
          />
        </div>

        <Button
          type="submit"
          color="secondary"
          size="lg"
          isLoading={isSubmitting}
          endContent={!isSubmitting && <Send className="w-4 h-4" />}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <p className="text-sm text-green-500">Message sent successfully! I&apos;ll get back to you soon.</p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <p className="text-sm text-red-500">Failed to send message. Please try again or email me directly.</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
