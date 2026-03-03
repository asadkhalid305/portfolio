import test from "node:test";
import assert from "node:assert/strict";
import { isRealisticEmail } from "../src/utils/email-validation.ts";

test("accepts realistic emails", () => {
  const validEmails = [
    "john@example.org",
    "jane.doe+portfolio@gmail.com",
    "dev_team-42@sub.company.co",
    "A.B-C_d%tag@university.edu",
  ];

  for (const email of validEmails) {
    assert.equal(isRealisticEmail(email), true, `Expected valid: ${email}`);
  }
});

test("rejects malformed emails", () => {
  const invalidEmails = [
    "",
    "plainaddress",
    "@domain.com",
    "name@",
    "name@@domain.com",
    ".name@domain.com",
    "name.@domain.com",
    "na..me@domain.com",
    "name@-domain.com",
    "name@domain-.com",
    "name@domain",
    "name@domain.c",
    "name@domain.123",
  ];

  for (const email of invalidEmails) {
    assert.equal(isRealisticEmail(email), false, `Expected invalid: ${email}`);
  }
});

test("rejects placeholder and disposable domains", () => {
  const blockedEmails = [
    "john@example.com",
    "test@domain.com",
    "temp@mailinator.com",
    "foo@10minutemail.com",
  ];

  for (const email of blockedEmails) {
    assert.equal(isRealisticEmail(email), false, `Expected blocked: ${email}`);
  }
});
