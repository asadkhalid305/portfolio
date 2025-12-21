import { Chatbot } from "@/lib/utils/types";

const useOpenRouter = process.env.USE_OPENROUTER === "true";

export const chatbot: Chatbot = {
  config: {
    // Use free OpenRouter model or OpenAI based on flag
    model: useOpenRouter
      ? "meta-llama/llama-3.2-3b-instruct:free" // Free OpenRouter model (updated to available model)
      : "gpt-4o-mini", // OpenAI model
    temperature: 1,
    maxTokens: 150,
  },
  prompt:
    'You are an AI assistant representing Asad Ullah on his portfolio website. Answer questions about his professional background, experience, and expertise based on the provided information. Be direct, practical, and honest—avoid exaggeration or marketing fluff. If asked about information not covered in the dataset, respond with: "I don\'t have that specific information. Please reach out to Asad Ullah directly for further details." Focus only on portfolio-related questions.',
  dataset: `# Asad Ullah Khalid - Complete Professional Profile

## Introduction
Asad Ullah is a Senior Software Engineer at Mercedes-Benz.io in Germany with 6+ years of experience in the field. He has come a long way through learning, networking, and giving back to the community. As a mentor and public speaker, he has helped numerous students and professionals in their career journeys. He is actively involved in teaching, writing, and collaborating with others in the tech industry.

## Identity & Current Role
- Full name: Asad Ullah Khalid (commonly goes by "Asad")
- Current position: Senior Software Engineer at Mercedes-Benz.io (since August 2023)
- Location: Berlin, Germany (relocated from Karachi, Pakistan in 2022)
- Born: August 1997 in Karachi, Pakistan
- Current age: 27 years old
- Personal: Happily married

## Professional Journey & Background Story

Born in 1997 in Pakistan, Asad's journey began with a focus on Islamic studies. It wasn't until he was 11 years old, starting in class 2 while his classmates were much younger, that he entered formal schooling. Progressing through only odd-numbered classes, he eventually secured admission to a reputable university (University of Karachi) for a BSCS degree, despite struggling with childhood struggles and lack of confidence.

Determined to improve, he devoted himself to his studies and career, working up to 18 hours a day. In his third year of university, he landed his first internship, followed by part-time and full-time jobs. Simultaneously, he shared his knowledge, serving as chairman of a non-profit organization (IEEE UoK Student Branch) that impacted thousands of students and earned him recognition as a leader.

Post-graduation, he expanded into giving workshops, mentoring, and writing to help others grow in their careers. In 2022, he embarked on a new chapter in Germany, where he worked for one year before joining one of the world's largest automobile companies (Mercedes-Benz.io) as a Senior Developer.

Today, he stands at the intersection of experience and ambition, actively writing content to guide fellow tech enthusiasts on their career journeys. With passion, persistence, and a commitment to growth, he is excited about what lies ahead and looks forward to making an even greater impact in the world of technology and lives of many.

## Technical Expertise

### Frontend (Primary Focus)
JavaScript (ES6+), TypeScript (enterprise-grade), Vue.js (Vue 3, Composition API), React, Nuxt.js, Next.js, Tailwind CSS, Sass, component-driven UI design, accessibility and UX-focused implementation

### Backend & Architecture
Node.js, Backend-for-Frontend (BFF) architecture, REST APIs, Supabase (Auth, Database, Row Level Security), Go (working knowledge), authentication & authorization flows, credit-based and usage-based systems

### Databases
PostgreSQL (via Supabase), MySQL, MongoDB

### DevOps & Tooling
Docker, Kubernetes (working knowledge), Turborepo (monorepo setups), CI/CD concepts, Datadog (monitoring & observability), GitHub Copilot

## Professional Experience & Work History

Asad's fascination with web technologies and how they can transform the way we communicate, learn, and work began early. His journey as a web developer started in 2016 when he began building pet projects with HTML and CSS as an undergraduate student. This sparked his interest and passion for web development and helped him land his first internship.

### Work Experience Timeline:

**Mercedes-Benz.io** (August 2023 - Present)
- Position: Senior Frontend Developer
- Location: Berlin, Germany
- One of the world's largest automobile companies

**Labforward** (August 2022 - August 2023)
- Position: Frontend Engineer
- Location: Berlin, Germany

**Securiti** (February 2020 - July 2022)
- Position: Software Development Engineer
- Location: Karachi, Pakistan

Has worked across startups and large enterprise environments, contributing to SaaS platforms, internal tooling, design-system-driven applications, and scalable frontend architectures.

More details: https://www.linkedin.com/in/asadkhalid305/details/experience/

## Education

- **Bachelor's Degree in Computer Science**, University of Karachi (2016-2019)
- **Master's program in Computer Science**, Institute of Business Administration (started 2021, dropped due to relocation to Germany from Pakistan)

## SaaS & Product Experience

Actively building independent SaaS products for end-to-end product learning. Hands-on experience includes:
- Anonymous authentication systems
- Credit-based usage limits and user upgrade flows (anonymous → registered)
- Subscription modeling (PLUS/PRO tiers)
- Preventing API misuse and cost overruns
- Minimal pricing focused on value, not aggressive monetization
- AI-powered applications using LLMs
- Planning future RAG and recommendation systems

Prefers simple, robust systems over over-engineered solutions. Values shipping, learning, and iterating.

## AI & LLM Interests

Practical use of LLMs in real products, guided concierge-style AI experiences, non-technical user accessibility, guardrails for cost and misuse. Future interests: RAG systems, AI recommendation engines, tool-selection and decision-support AI.

## Community Contributions & Teaching

Creates educational content with a passion to empower individuals on their career journeys. His own path to success, starting from a challenging educational background and working tirelessly to achieve his goals, fuels his motivation to help others. Through workshops, mentoring, and writing, he aims to assist individuals in navigating their careers effectively. His content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience. He believes that with the right knowledge and support, anyone can achieve their professional aspirations.

### Leadership Roles:
- Chairman of IEEE UoK Student Branch
- Head of Management at UBIT Literacy Club
- Organized events, mentored students, and contributed to community-building initiatives

### Speaking Engagements & Events:

**University of Karachi Final Year Project Mentorship** (2022-2023)
Started a mentorship program for computer science students at University of Karachi. Along with industry professionals, guided them to create industry-standard final year projects and assisted throughout their journey.
Link: https://www.linkedin.com/posts/asadkhalid305_dcs-activity-6903682935338131456-jEYp

**Frontend Nation** (June 2024)
Delivered a talk on the topic of "How to Revamp Your Frontend Development with BFF" (Backend for Frontend)
Link: https://frontendnation.com/

**GDG DevFest Karachi** (June 2024)
Shared experience and expertise on the topic of "Importance of Soft Skills for Career Growth" as a panelist
Link: https://frontendnation.com/

**Google Developers Group I/O Extended** (July 2022)
Mentored participants on the subject of web technologies
Link: https://www.linkedin.com/feed/update/urn:li:activity:6822123556755791872/

**Code Movement Pakistan - DevCon 6** (January 2022)
Gave a tech talk on the topic of "Data Driven UI Components"
Link: https://www.linkedin.com/feed/update/urn:li:activity:6883406697751207936/

### Written Content & Blogs:

**"Making the Most of Company Events"** (December 2023)
Blog post about how to make the most of company events for career growth
Link: https://asadkhalid305.medium.com/career-growth-making-the-most-of-company-events-cc8ec5149bb8

**"Tech Jobs in Europe"** (December 2023)
Blog post with tips and insights to get interview calls from European companies
Link: https://asadkhalid305.medium.com/tech-jobs-in-europe-insights-and-tips-to-get-interview-calls-a202622cbc99

Actively helps others with career growth, engineering guidance, and transitioning into tech roles. Maintains strong LinkedIn presence. Converts technical talks and presentations into blogs. Values clear explanations over buzzwords.

## Engineering Philosophy

Pragmatic over theoretical. Simple systems scale better than clever ones. Strong belief in:
- Clean abstractions
- Reusable components
- Clear ownership boundaries
- Skeptical of hype-driven tech adoption
- Values learning by building real products

## Professional Reputation & Testimonials

What colleagues say about Asad:

**Carlos Cunha** (Senior Software Engineer at GetSafe):
"A fast learner developer, Asad was a very good contributor to the project we worked on together. Within a short time after entering the project, he contributed directly to the codebase with high coding standards and with improvement proposals in maintainability and reusability."

**Abdul Wahab** (Technical Lead at Securiti.ai):
"Met with Asad in 2020 at Securiti.ai and now it's around two years of experience working with him. He started his career at the associate level but soon raised himself to work among senior developers. He is the backbone of our front end team now as he always delivers his work on time with full responsibility."

**Shahnawaz A K** (Senior Full Stack Engineer at Rapyd):
"Passion and eagerness to grow: 10, Team player: 10, Results: 10, Communication 10 (+10). What else are you looking for? Asad has always shown tremendous energy and a positive attitude towards work. His active engagements with communities clearly show how much he loves contributing to Open Source and sharing knowledge with others. Throw any problem at him and he will come up with a solution. Always ready to outperform his previous self."

**Hassan Ahmed** (Senior Software Engineer at Phrase):
"During my time working alongside Asad for although what was a brief period of time, I found him to be a good team player, career oriented, pragmatic thinker and someone who possesses valuable experience. As a colleague and a person he is a very polite, approachable and humble individual to work with. Someone who is a good collaborator and acknowledges the importance of it. When working, I liked his ability to take into view the broader perspective and propose stable and long lasting solutions. I also felt he keeps in touch with the latest development and trends in the industry and is constantly striving to improve himself."

**Rehmat Murad Ali** (Senior Software Engineer at Bayzat):
"Asad is very passionate and has great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards. One of the best things I found in Asad is taking ownership of the project. Kudos"

**Syed M Suhaib** (Senior Software Engineer at Nisum):
"I rarely come across real talents who stand out like Asad Ullah. He was dedicated and sincere towards his responsibilities and his ability to handle pressure was exceptional. No matter how much complex tasks was but he accomplished them and his eagerness towards learning and adopting new technologies was there to be appreciated. As a team member, Asad earns my highest respect."

Common themes: passionate, dedicated, fast learner, team player, eager to grow, always delivers on time, takes ownership, approachable, humble, good collaborator, career-oriented, pragmatic thinker, keeps up with industry trends, proposes stable long-lasting solutions.

## Personal Interests & Characteristics

- Building side projects and SaaS tools
- Exploring better developer workflows
- Learning languages (currently learning German)
- Product design thinking
- System simplification and optimization
- Known as a go-to person for career and life advice
- Always up-to-date with industry trends
- Passionate about helping others grow

## Contact & Social Links

- LinkedIn: https://www.linkedin.com/in/asadkhalid305
- GitHub: https://github.com/asadkhalid305
- Topmate.io: https://topmate.io/asadullahkhalid
- Company: Mercedes-Benz.io (https://www.mercedes-benz.io/)

---

**Response Guidelines:** Be direct and practical. Avoid exaggeration or marketing fluff. Explain trade-offs honestly when relevant. Prefer real examples over theory. Keep responses simple and grounded in real experience. Use the information above to answer specific questions about Asad's journey, experiences, talks, writings, or any other aspect of his professional profile.
  `,
  info: `Welcome! This AI Assistant is designed to answer questions about my professional background, experience, and journey in tech.

Your privacy matters: All conversations are stored locally in your browser only—I don't collect or store any data on external servers.

Feel free to ask about my experience, projects, or anything else you'd like to know. I'm here to help you get the information you need.

Thank you for visiting!
  `,
  header: {
    heading: "AI Assistant",
  },
};
