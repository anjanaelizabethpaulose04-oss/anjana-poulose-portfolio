import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL || "anjanapaulose0404@gmail.com";
    // Resend's shared test sender works with zero setup. Once you verify your own
    // domain in Resend, set CONTACT_FROM_EMAIL to something like
    // "Portfolio <hello@yourdomain.com>" for better deliverability.
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact Form <onboarding@resend.dev>";

    if (apiKey) {
      const escape = (s: string) =>
        s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: toAddress,
          reply_to: email,
          subject: `New portfolio message from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
          html: `<p><strong>From:</strong> ${escape(name)} &lt;${escape(email)}&gt;</p><p>${escape(message).replace(/\n/g, "<br/>")}</p>`,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Resend API error:", emailRes.status, errBody);
        return NextResponse.json(
          { error: "Message could not be delivered right now. Please try emailing me directly." },
          { status: 502 }
        );
      }
    } else {
      // No email provider configured yet — log so submissions aren't silently lost
      // during local development, but let the user know via the console/README.
      console.log("New contact form submission (RESEND_API_KEY not set, email not sent):", {
        name,
        email,
        message,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
