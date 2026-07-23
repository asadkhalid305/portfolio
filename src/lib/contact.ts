import { createHmac, timingSafeEqual } from "node:crypto";
import { z } from "zod";

export const CONTACT_FORM_RATE_LIMIT_ID = "contact-form";
export const MIN_FORM_COMPLETION_MS = 3_000;
export const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1_000;

const contactSubmissionSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    message: z.string().trim().min(20).max(5_000),
    website: z.string().trim().max(200),
    formStartedAt: z.string().trim().min(1).max(200),
  })
  .strict();

export type ContactMessage = Pick<
  z.infer<typeof contactSubmissionSchema>,
  "name" | "email" | "message"
>;

type ContactResult = {
  status: number;
  body: { success: true } | { error: string };
};

type ProcessContactSubmissionOptions = {
  input: unknown;
  rateLimited: boolean;
  secret: string;
  sendEmail: (message: ContactMessage) => Promise<void>;
  now?: number;
};

const genericSpamResult: ContactResult = {
  status: 200,
  body: { success: true },
};

function signTimestamp(timestamp: string, secret: string) {
  return createHmac("sha256", secret).update(timestamp).digest("base64url");
}

export function createFormStartToken(secret: string, now = Date.now()) {
  const timestamp = String(now);
  return `${timestamp}.${signTimestamp(timestamp, secret)}`;
}

export function isValidFormStartToken(
  token: string,
  secret: string,
  now = Date.now()
) {
  const separatorIndex = token.indexOf(".");
  if (separatorIndex <= 0 || separatorIndex !== token.lastIndexOf(".")) {
    return false;
  }

  const timestamp = token.slice(0, separatorIndex);
  const signature = token.slice(separatorIndex + 1);
  const startedAt = Number(timestamp);

  if (!Number.isSafeInteger(startedAt)) {
    return false;
  }

  const age = now - startedAt;
  if (age < MIN_FORM_COMPLETION_MS || age > MAX_FORM_AGE_MS) {
    return false;
  }

  const expected = Buffer.from(signTimestamp(timestamp, secret));
  const received = Buffer.from(signature);

  return (
    expected.length === received.length && timingSafeEqual(expected, received)
  );
}

export async function processContactSubmission({
  input,
  rateLimited,
  secret,
  sendEmail,
  now = Date.now(),
}: ProcessContactSubmissionOptions): Promise<ContactResult> {
  if (rateLimited) {
    return {
      status: 429,
      body: { error: "Too many requests. Please try again later." },
    };
  }

  const parsed = contactSubmissionSchema.safeParse(input);
  if (!parsed.success) {
    const onlySpamFieldsAreInvalid = parsed.error.issues.every((issue) =>
      ["website", "formStartedAt"].includes(String(issue.path[0]))
    );

    if (onlySpamFieldsAreInvalid) {
      return genericSpamResult;
    }

    return {
      status: 400,
      body: { error: "Please check the form and try again." },
    };
  }

  const { website, formStartedAt, ...message } = parsed.data;

  if (website || !isValidFormStartToken(formStartedAt, secret, now)) {
    return genericSpamResult;
  }

  await sendEmail(message);

  return {
    status: 200,
    body: { success: true },
  };
}

export function getContactFormSecret() {
  const secret = process.env.CONTACT_FORM_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("CONTACT_FORM_SECRET must contain at least 32 characters");
  }

  return secret;
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}
