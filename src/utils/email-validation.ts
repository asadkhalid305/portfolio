const COMMON_PLACEHOLDER_DOMAINS = new Set([
  "example.com",
  "test.com",
  "email.com",
  "domain.com",
  "yourdomain.com",
  "invalid.com",
]);

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "tempmail.com",
  "trashmail.com",
  "yopmail.com",
]);

export function isRealisticEmail(input: string): boolean {
  const email = input.trim().toLowerCase();

  if (!email || email.length > 254) {
    return false;
  }

  const atIndex = email.indexOf("@");
  if (atIndex <= 0 || atIndex !== email.lastIndexOf("@")) {
    return false;
  }

  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);

  if (
    !localPart ||
    !domain ||
    localPart.length > 64 ||
    domain.length > 253 ||
    localPart.startsWith(".") ||
    localPart.endsWith(".") ||
    localPart.includes("..")
  ) {
    return false;
  }

  if (!/^[a-z0-9._%+-]+$/i.test(localPart)) {
    return false;
  }

  if (!domain.includes(".") || COMMON_PLACEHOLDER_DOMAINS.has(domain)) {
    return false;
  }

  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return false;
  }

  const labels = domain.split(".");
  if (labels.some((label) => !label || label.length > 63)) {
    return false;
  }

  if (
    labels.some(
      (label) =>
        !/^[a-z0-9-]+$/i.test(label) ||
        label.startsWith("-") ||
        label.endsWith("-")
    )
  ) {
    return false;
  }

  const tld = labels[labels.length - 1];
  if (!/^[a-z]{2,24}$/i.test(tld)) {
    return false;
  }

  return true;
}
