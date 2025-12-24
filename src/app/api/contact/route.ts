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
      from: 'Portfolio <contact@send.asadullahkhalid.com>',
      to: 'asadkhalid305@gmail.com',
      replyTo: email,
      subject: `New Inquiry: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #000000; border: 1px solid #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
              <div style="padding: 40px; border-bottom: 1px solid #1a1a1a;">
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.025em;">New Message</h1>
                <p style="margin: 8px 0 0 0; color: #a1a1aa; font-size: 14px;">Incoming inquiry from your portfolio website.</p>
              </div>
              
              <div style="padding: 40px;">
                <div style="margin-bottom: 32px;">
                  <label style="display: block; color: #52525b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">From</label>
                  <div style="color: #ffffff; font-size: 16px; font-weight: 500;">${name}</div>
                  <div style="color: #71717a; font-size: 14px;">${email}</div>
                </div>
                
                <div style="margin-bottom: 32px;">
                  <label style="display: block; color: #52525b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</label>
                  <div style="color: #e4e4e7; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background-color: #09090b; padding: 20px; border-radius: 8px; border: 1px solid #1a1a1a;">${message}</div>
                </div>
                
                <a href="mailto:${email}" style="display: inline-block; background-color: #ffffff; color: #000000; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none; transition: background-color 0.2s;">Reply directly</a>
              </div>
              
              <div style="padding: 24px 40px; background-color: #09090b; border-top: 1px solid #1a1a1a; text-align: center;">
                <p style="margin: 0; color: #3f3f46; font-size: 12px;">© ${new Date().getFullYear()} asadullahkhalid.com • Sent via Resend</p>
              </div>
            </div>
          </body>
        </html>
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
