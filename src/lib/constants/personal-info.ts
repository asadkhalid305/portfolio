import { Contact, Intro, Socials } from "@/lib/utils/types";

const year = new Date().getFullYear();

export const intro: Intro = {
  heading: "Introduction",
  description: `Hey, I am <span class="font-bold">Asad Ullah</span>, a Senior Software Engineer at <a class="underline focus:decoration-none" href="https://mercedes-benz.io" target="_blank" rel="noopener noreferrer">Mercedes-Benz.io</a> in Germany. With 6+ years in the field, I have come a long way, learning, networking, and giving back to the community. As a <span class="font-bold">mentor and public speaker</span>, I have helped numerous students and professionals in their career journeys. <br /> <br />If you are seeking guidance or interested in collaborating, <span class="font-bold">reach out to me!</span>`,
};

export const contact: Contact = {
  heading: `Let's Connect`,
  description:
    "Your thoughts and questions are always welcome, so do not hesitate to drop me a message if you need assistance or have something to talk about. I would love to hear from you!",
  profile: {
    company: "Mercedes-Benz.io",
    name: "Asad Ullah Khalid",
    position: "Frontend Expertise with Focus on JavaScript",
    role: "Senior Software Engineer",
  },
};

export const footer = {
  copyright: `${year} Asad Ullah Khalid. All rights reserved`,
};

export const socials: Socials = {
  linkedIn: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/asadkhalid305",
    icon: "/icons/linkedin.min.svg",
  },
  github: {
    name: "GitHub",
    href: "https://github.com/asadkhalid305/",
    icon: "/icons/github.min.svg",
  },
  topmateIO: {
    name: "Topmate.io",
    href: "https://topmate.io/asadullahkhalid",
    icon: "",
  },
  mercedesBenzIO: {
    name: "Mercedes-Benz.io",
    href: "https://www.mercedes-benz.io/",
    icon: "",
  },
};
