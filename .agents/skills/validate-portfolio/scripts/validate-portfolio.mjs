import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const errors = [];
const warnings = [];
const info = [];

const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
const present = (value) => typeof value === "string" && value.trim().length > 0;
const report = (list, file, message) => list.push({ file, message });

function validateImage(image, file) {
  if (!image || !present(image.src) || !present(image.alt)) {
    report(errors, file, "image.src and image.alt are required");
    return;
  }
  if (!image.src.startsWith("/images/") || !image.src.endsWith(".webp")) {
    report(errors, file, `image must be a WebP under /images/: ${image.src}`);
    return;
  }
  if (!fs.existsSync(path.join(root, "public", image.src))) {
    report(errors, file, `missing image: ${image.src}`);
  }
}

const contentCounts = {};
for (const type of ["projects", "events", "blogs", "book-reviews"]) {
  const directory = path.join(root, "src/content", type);
  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"));
  contentCounts[type] = files.length;
  for (const name of files) {
    const relative = path.join("src/content", type, name);
    const { data } = matter(fs.readFileSync(path.join(root, relative), "utf8"));
    for (const key of ["title", "description", "date"]) {
      if (!present(data[key])) report(errors, relative, `missing required frontmatter field: ${key}`);
    }
    validateImage(data.image, relative);
    if (
      data.links !== undefined &&
      (!Array.isArray(data.links) ||
        data.links.some(
          (link) =>
            !present(link?.name) ||
            !(/^(https:\/\/|\/)/.test(link?.url || ""))
        ))
    ) {
      report(errors, relative, "links must contain a name and an https or site-relative URL");
    }
    if (type === "projects" && !/^\d{4}-\d{2}-\d{2}$/.test(data.date || "")) {
      report(errors, relative, "project date must use YYYY-MM-DD");
    }
    if (type === "events" && data.type && !["Talk", "Panel", "Conference", "Workshop", "Mentorship", "Community"].includes(data.type)) {
      report(errors, relative, `unsupported event type: ${data.type}`);
    }
  }
}

const experience = readJson("src/constants/experience.json");
const experienceIds = new Set();
const experienceTypes = ["Full-time", "Part-time", "Contract", "Internship", "Volunteer"];
const modes = ["On-site", "Hybrid", "Remote"];
for (const group of ["professionalExperiences", "communityExperiences"]) {
  if (!Array.isArray(experience[group])) {
    report(errors, "src/constants/experience.json", `${group} must be an array`);
    continue;
  }
  for (const item of experience[group]) {
    for (const key of ["id", "company", "role", "type", "period", "duration", "location", "mode", "description"]) {
      if (!present(item[key])) report(errors, "src/constants/experience.json", `${item.id || group} is missing ${key}`);
    }
    if (experienceIds.has(item.id)) report(errors, "src/constants/experience.json", `duplicate experience id: ${item.id}`);
    experienceIds.add(item.id);
    if (!experienceTypes.includes(item.type)) report(errors, "src/constants/experience.json", `${item.id} has unsupported type: ${item.type}`);
    if (!modes.includes(item.mode)) report(errors, "src/constants/experience.json", `${item.id} has unsupported mode: ${item.mode}`);
    if (!Array.isArray(item.responsibilities) || !Array.isArray(item.achievements)) report(errors, "src/constants/experience.json", `${item.id} requires responsibilities and achievements arrays`);
  }
}
if (!Array.isArray(experience.items) || experience.items.length !== 3) report(warnings, "src/constants/experience.json", "about-page experience preview should contain exactly three items");

const testimonials = readJson("src/constants/testimonials.json");
if (!Array.isArray(testimonials.items)) {
  report(errors, "src/constants/testimonials.json", "items must be an array");
} else {
  testimonials.items.forEach((item, index) => {
    const label = `testimonial ${index + 1}`;
    if (!present(item.text) || !present(item.author?.name) || !present(item.author?.job) || !/^https:\/\//.test(item.author?.link || "")) report(errors, "src/constants/testimonials.json", `${label} is missing required content`);
    validateImage(item.author?.image, "src/constants/testimonials.json");
    if (!["LinkedIn", "Topmate.io"].includes(item.source)) report(errors, "src/constants/testimonials.json", `${label} has unsupported source`);
    if (item.source === "Topmate.io" && (!Number.isInteger(item.rating) || item.rating < 1 || item.rating > 5)) report(errors, "src/constants/testimonials.json", `${label} requires a rating from 1 to 5`);
  });
}

const socials = readJson("src/constants/socials.json");
for (const [name, social] of Object.entries(socials)) {
  if (!/^https:\/\//.test(social?.href || "")) report(errors, "src/constants/socials.json", `${name}.href must be an https URL`);
}

const metadata = readJson("src/constants/metadata.json");
if (!present(metadata.title) || !present(metadata.description)) report(errors, "src/constants/metadata.json", "global title and description are required");
for (const [page, value] of Object.entries(metadata.pages || {})) {
  if (!present(value?.title) || !present(value?.description)) report(errors, "src/constants/metadata.json", `${page} requires title and description`);
}

const chatbot = fs.readFileSync(path.join(root, "src/constants/chatbot.ts"), "utf8");
for (const role of experience.professionalExperiences.filter((item) => item.period.includes("Present"))) {
  if (!chatbot.includes(role.company) || !chatbot.includes(role.role)) report(warnings, "src/constants/chatbot.ts", `current role may be stale: ${role.role} at ${role.company}`);
}
info.push({ file: "src/content", message: `${contentCounts.projects} projects, ${contentCounts.events} events, ${contentCounts.blogs} blogs, ${contentCounts["book-reviews"]} book reviews` });
info.push({ file: "src/constants/testimonials.json", message: `${testimonials.items?.length || 0} testimonials` });

for (const [label, entries] of [["ERROR", errors], ["WARNING", warnings], ["INFO", info]]) {
  entries.forEach(({ file, message }) => console.log(`${label} ${file}: ${message}`));
}
console.log(`\nSummary: ${errors.length} errors, ${warnings.length} warnings, ${info.length} informational checks.`);
process.exitCode = errors.length > 0 ? 1 : 0;
