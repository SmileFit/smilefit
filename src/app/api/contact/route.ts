import { NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      // Send email using Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SmileFit Contact <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "info@smilefit.com",
          subject: `[SmileFit Contact] ${escapeHtml(body.subject)}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(body.phone || "Not provided")}</p>
            <p><strong>Subject:</strong> ${escapeHtml(body.subject)}</p>
            <h3>Message:</h3>
            <p>${escapeHtml(body.message).replace(/\n/g, "<br>")}</p>
          `,
          reply_to: body.email,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Resend API error:", errorData)
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // If no email service is configured, log the submission (development mode)
    // Avoid logging PII for GDPR/CCPA compliance
    console.log("Contact form submission (no email service configured):", {
      name: body.name,
      subject: body.subject,
      hasEmail: !!body.email,
      hasPhone: !!body.phone,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
