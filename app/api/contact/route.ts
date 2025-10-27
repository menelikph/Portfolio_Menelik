import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import ContactMessage from "@/models/Contact"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, message } = body

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    await connectToDatabase()
    const contact = await ContactMessage.create({
      fullName,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "Message sent successfully", data: contact }, { status: 201 })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectToDatabase()
    const contacts = await ContactMessage.find().sort({ createdAt: -1 })

    return NextResponse.json({ data: contacts }, { status: 200 })
  } catch (error) {
    console.error("Contact GET error:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
