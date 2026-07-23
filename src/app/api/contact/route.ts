import { checkRateLimit } from "@vercel/firewall";
import { Resend } from "resend";
import {
  CONTACT_FORM_RATE_LIMIT_ID,
  createFormStartToken,
  escapeHtml,
  getContactFormSecret,
  processContactSubmission,
} from "@/lib/contact";

const MAX_REQUEST_BYTES = 16_384;
const VERIFIED_SENDER = "Portfolio <contact@send.asadullahkhalid.com>";
const CONTACT_RECIPIENT = "asadkhalid305@gmail.com";

let resendClient: Resend | undefined;

function getResend() {
  resendClient ??= new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

export async function GET() {
  try {
    const formStartedAt = createFormStartToken(getContactFormSecret());

    return Response.json(
      { formStartedAt },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Contact form initialization error:", error);
    return Response.json(
      { error: "Unable to initialize the form." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { rateLimited } = await checkRateLimit(CONTACT_FORM_RATE_LIMIT_ID, {
      request,
    });

    const contentLength = Number(request.headers.get("content-length") ?? 0);
    let input: unknown;

    if (!rateLimited && contentLength <= MAX_REQUEST_BYTES) {
      try {
        input = await request.json();
      } catch {
        input = undefined;
      }
    }

    const result = await processContactSubmission({
      input,
      rateLimited,
      secret: rateLimited ? "" : getContactFormSecret(),
      sendEmail: async ({ name, email, message }) => {
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message);

        const { error } = await getResend().emails.send({
          from: VERIFIED_SENDER,
          to: CONTACT_RECIPIENT,
          replyTo: CONTACT_RECIPIENT,
          subject: "New portfolio inquiry",
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
                  <div style="color: #ffffff; font-size: 16px; font-weight: 500;">${safeName}</div>
                  <div style="color: #71717a; font-size: 14px;">${safeEmail}</div>
                </div>
                
                <div style="margin-bottom: 32px;">
                  <label style="display: block; color: #52525b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</label>
                  <div style="color: #e4e4e7; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background-color: #09090b; padding: 20px; border-radius: 8px; border: 1px solid #1a1a1a;">${safeMessage}</div>
                </div>
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
          throw new Error("Email provider rejected the contact message");
        }
      },
    });

    return Response.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Unable to submit the form." },
      { status: 500 }
    );
  }
}
