import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const timeoutMs = 10_000;
const records = [];

function collectUrls(value, file) {
  if (typeof value === "string" && /^https:\/\//i.test(value)) {
    records.push({ file, url: value });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectUrls(item, file));
    return;
  }
  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectUrls(item, file));
  }
}

for (const relative of [
  "src/constants/about.json",
  "src/constants/experience.json",
  "src/constants/socials.json",
  "src/constants/testimonials.json",
]) {
  collectUrls(JSON.parse(fs.readFileSync(path.join(root, relative), "utf8")), relative);
}

for (const type of ["projects", "events", "blogs", "book-reviews"]) {
  const directory = path.join(root, "src/content", type);
  for (const name of fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"))) {
    const relative = path.join("src/content", type, name);
    const { data } = matter(fs.readFileSync(path.join(root, relative), "utf8"));
    collectUrls(data, relative);
  }
}

async function request(url, method) {
  return fetch(url, {
    method,
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
    headers: { "user-agent": "Portfolio-Link-Checker/1.0" },
  });
}

async function check({ file, url }) {
  try {
    let response = await request(url, "HEAD");
    if (response.status >= 400 || response.status === 0) response = await request(url, "GET");

    if ([401, 403, 418, 429, 999].includes(response.status)) {
      return { file, url, status: "unverifiable", detail: `HTTP ${response.status}` };
    }
    if (response.status >= 400) {
      return { file, url, status: "broken", detail: `HTTP ${response.status}` };
    }
    return { file, url, status: "healthy", detail: `HTTP ${response.status}` };
  } catch (error) {
    return {
      file,
      url,
      status: "broken",
      detail: error?.name === "TimeoutError" ? "timeout" : error?.message || "request failed",
    };
  }
}

const unique = [...new Map(records.map((record) => [`${record.file}\0${record.url}`, record])).values()];
const results = [];
for (let index = 0; index < unique.length; index += 6) {
  results.push(...(await Promise.all(unique.slice(index, index + 6).map(check))));
}

for (const file of [...new Set(results.map((result) => result.file))].sort()) {
  console.log(`\n${file}`);
  for (const result of results.filter((item) => item.file === file)) {
    const icon = result.status === "healthy" ? "OK" : result.status === "unverifiable" ? "INFO" : "ERROR";
    console.log(`  ${icon} ${result.url} (${result.detail})`);
  }
}

const counts = Object.fromEntries(["healthy", "unverifiable", "broken"].map((status) => [status, results.filter((item) => item.status === status).length]));
console.log(`\nSummary: ${counts.broken} broken, ${counts.unverifiable} unverifiable, ${counts.healthy} healthy across ${results.length} URLs.`);
process.exitCode = counts.broken > 0 ? 1 : 0;
