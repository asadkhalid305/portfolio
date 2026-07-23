import test from "node:test";
import assert from "node:assert/strict";
import {
  createFormStartToken,
  MIN_FORM_COMPLETION_MS,
  processContactSubmission,
} from "../src/lib/contact.ts";

const SECRET = "test-contact-form-secret-at-least-32-characters";
const NOW = 1_800_000_000_000;

function validSubmission(overrides = {}) {
  return {
    name: "  Ada Lovelace  ",
    email: "  ada@example.org  ",
    message: "  I would like to discuss a meaningful project.  ",
    website: "  ",
    formStartedAt: createFormStartToken(SECRET, NOW - 10_000),
    ...overrides,
  };
}

async function submit(input, { rateLimited = false } = {}) {
  const sent = [];
  const result = await processContactSubmission({
    input,
    rateLimited,
    secret: SECRET,
    now: NOW,
    sendEmail: async (message) => {
      sent.push(message);
    },
  });

  return { result, sent };
}

test("valid submissions are trimmed before one email is sent", async () => {
  const { result, sent } = await submit(validSubmission());

  assert.equal(result.status, 200);
  assert.deepEqual(sent, [
    {
      name: "Ada Lovelace",
      email: "ada@example.org",
      message: "I would like to discuss a meaningful project.",
    },
  ]);
});

test("empty and whitespace-only submissions never send email", async () => {
  const { result, sent } = await submit(
    validSubmission({ name: " ", message: "     " })
  );

  assert.equal(result.status, 400);
  assert.equal(sent.length, 0);
});

test("invalid email submissions never send email", async () => {
  const { result, sent } = await submit(
    validSubmission({ email: "not-an-email" })
  );

  assert.equal(result.status, 400);
  assert.equal(sent.length, 0);
});

test("too-fast submissions return the generic spam response and never send email", async () => {
  const { result, sent } = await submit(
    validSubmission({
      formStartedAt: createFormStartToken(
        SECRET,
        NOW - MIN_FORM_COMPLETION_MS + 1
      ),
    })
  );

  assert.deepEqual(result, { status: 200, body: { success: true } });
  assert.equal(sent.length, 0);
});

test("filled honeypot submissions return the generic spam response and never send email", async () => {
  const { result, sent } = await submit(
    validSubmission({ website: "https://spam.example" })
  );

  assert.deepEqual(result, { status: 200, body: { success: true } });
  assert.equal(sent.length, 0);
});

test("oversized submissions never send email", async () => {
  const oversizedFields = [
    { name: "x".repeat(101) },
    { email: `${"x".repeat(245)}@example.org` },
    { message: "x".repeat(5_001) },
    { website: "x".repeat(201) },
    { formStartedAt: "x".repeat(201) },
  ];

  for (const oversizedField of oversizedFields) {
    const { sent } = await submit(validSubmission(oversizedField));
    assert.equal(sent.length, 0);
  }
});

test("rate-limited submissions are rejected before validation and never send email", async () => {
  const { result, sent } = await submit(undefined, { rateLimited: true });

  assert.equal(result.status, 429);
  assert.equal(sent.length, 0);
});

test("invalid signed timestamps return the generic spam response and never send email", async () => {
  const invalidTimestamps = [
    `${NOW - 10_000}.tampered`,
    "",
    undefined,
  ];

  for (const formStartedAt of invalidTimestamps) {
    const { result, sent } = await submit(
      validSubmission({ formStartedAt })
    );

    assert.deepEqual(result, { status: 200, body: { success: true } });
    assert.equal(sent.length, 0);
  }
});
