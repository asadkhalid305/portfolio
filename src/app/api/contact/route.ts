import { NextResponse } from "next/server";
import { Resend } from 'resend';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'contact@asadullahkhalid.com',
      replyTo: email,
      subject: `Portfolio: New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0;">New Inquiry from Portfolio</h2>
          <div style="margin-bottom: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">From</p>
            <p style="margin: 4px 0 0 0; color: #0f172a; font-weight: 600;">${name} (${email})</p>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">Message</p>
            <p style="margin: 8px 0 0 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 0; color: #94a3b8; font-size: 12px; text-align: center;">Sent via Portfolio Contact Form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Email recorded successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
