const chatbotData = {
  config: {
    models: {
      openrouter: "openai/gpt-oss-20b:free",
      openai: "gpt-4o-mini",
    },
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

I was born in 1997 in Pakistan, and my path hasn\'t been a typical one. My early years were spent entirely on Islamic studies, and I didn\'t actually start formal school until I was 11 years old. I remember starting in class 2, much older than everyone else and feeling like I was already miles behind. Because of that late start, I had to move fast, jumping through only odd-numbered classes while constantly fighting self-doubt and a feeling that I didn\'t have the same foundation as others.

But I didn\'t let that stop me. I eventually got into a good university for Computer Science, even though I struggled a lot at first with confidence and catching up on things everyone else seemed to know. I decided to work harder than anyone else. There were days I spent 18 hours just teaching myself, practicing code, and rebuilding my basics from the ground up.

In my third year, things finally started to click. I got my first internship, which quickly led to my first real jobs. But as I grew, I realized I wanted to help others who felt the same way I did. I started leading a non-profit, mentoring students, and eventually became a chairman. Helping thousands of students find their way was one of the most rewarding things I\'ve ever done.

After I graduated, I kept teaching. I started giving workshops and writing about my experiences to help people from non-traditional backgrounds understand that they can have a career in tech too.

In 2022, I made a big leap and moved to Germany. Starting over in a new country with a new language was a massive challenge, but it was also a fresh start. After working hard to find my place here, I joined one of the biggest automobile companies in the world as a Senior Software Engineer. Today, I work on systems that millions of people use, and I couldn\'t be more grateful.

Now, I spend my time at the intersection of building software and helping people. I write about tech careers and relocation because I want to show others that even if you start late or have a difficult path, you can still reach your goals through consistency and hard work. My journey has been full of resets and long nights, but it\'s taught me that real progress isn\'t about shortcuts, it\'s about staying curious and never giving up.

I\'m still driven by that same desire to learn and make an impact, both through the code I write and the people I can help along the way.

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

Asad\'s fascination with web technologies and how they can transform the way we communicate, learn, and work began early. His journey as a web developer started in 2016 when he began building pet projects with HTML and CSS as an undergraduate student. This sparked his interest and passion for web development and helped him land his first internship.

### Work Experience Timeline:

**Mercedes-Benz.io** (August 2023 - Present)
- Position: Senior Frontend Developer
- Location: Berlin, Germany
- One of the world\'s largest automobile companies

**Labforward** (August 2022 - August 2023)
- Position: Frontend Engineer
- Location: Berlin, Germany

**Securiti** (February 2020 - July 2022)
- Position: Software Development Engineer
- Location: Karachi, Pakistan

Has worked across startups and large enterprise environments, contributing to SaaS platforms, internal tooling, design-system-driven applications, and scalable frontend architectures.

More details: https://www.linkedin.com/in/asadkhalid305/details/experience/

## Education

- **Bachelor\'s Degree in Computer Science**, University of Karachi (2016-2019)
- **Master\'s program in Computer Science**, Institute of Business Administration (started 2021, dropped due to relocation to Germany from Pakistan)

## SaaS & Product Experience

Actively building independent SaaS products for end-to-end product learning. Hands-on experience includes:
- **LangCompass**: A free, static-first German learning explorer that connects 40 modules and 120 topics across CEFR A1.1 to B2.2 through themes, grammar, and communication goals.
  - Optional Learning Tools: On supported desktop Chrome devices, learners can translate content, request explanations and examples, summarize lessons, and check German sentences using on-device Chrome AI capabilities.
  - Privacy and Architecture: No account, database, AI backend, local model server, or API key is required. The core application uses static JSON data and remains useful without the optional AI tools.
  - Live Application: https://langcompass.asadullahkhalid.com/
  - GitHub: https://github.com/asadkhalid305/langcompass
- **Chrome AI and WebMCP Playground**: A teaching-first, local-first React playground built for exploring Chrome Built-in AI and WebMCP through runnable lessons, visual demos, and setup documentation.
  - Chrome Built-in AI: Seven independently runnable lessons for Translator, Language Detector, Summarizer, Prompt/LanguageModel, plus the experimental Writer, Rewriter, and Proofreader APIs. The UI shows availability, model preparation or download, running, cancellation, success, and error states.
  - WebMCP: Separate declarative and imperative tool demos show how websites can expose structured, browser-visible actions to agents. The tools can be inspected and called through Chrome DevTools’ Application → WebMCP panel, including status and logs.
  - Constraints: Availability depends on browser version, device, model preparation, permissions, and experimental programs. WebMCP is separate from on-device inference and is not a production default.
  - Architecture: Vite, React, TypeScript, Tailwind CSS, Vitest, and Testing Library. There is no application-owned AI backend, API key, cloud-model integration, or local model server.
  - Live Application: https://chromeai.asadullahkhalid.com/
  - GitHub: https://github.com/asadkhalid305/chrome-ai
- **StreamWise AI**: An intelligent entertainment concierge that eliminates \'choice paralysis\' using a multi-agent AI system. Built with Next.js 15, TypeScript, and OpenAI Agents SDK.
  - Live Demo: /apps/streamwise-ai
  - GitHub: https://github.com/asadkhalid305/streamwise-ai
- **OnStage**: An open-source, customizable onboarding wizard for React applications.
  - Features: Responsive modal tours, configurable themes and behavior, and an interactive builder for exporting configuration code.
  - Live Demo: /apps/onstage/
  - GitHub: https://github.com/asadkhalid305/onstage
- Anonymous authentication systems
- Credit-based usage limits and user upgrade flows (anonymous \u2192 registered)
- Subscription modeling (PLUS/PRO tiers)
- Preventing API misuse and cost overruns
- Minimal pricing focused on value, not aggressive monetization
- AI-powered applications using LLMs
- Planning future RAG and recommendation systems

- **KeyFinz**: A privacy-first, manual-by-design financial tracker for people with complex financial setups (multi-currency, internal transfers).
  - Core Philosophy: "Manual entry increases awareness."
  - Key Features: Conversational AI ("How much did I spend on groceries?"), full control over categories, and no automated bank connections to preserve privacy and reduce noise.

Prefers simple, robust systems over over-engineered solutions. Values shipping, learning, and iterating.

## AI & LLM Interests

Practical use of LLMs in real products, guided concierge-style AI experiences, non-technical user accessibility, guardrails for cost and misuse. Future interests: RAG systems, AI recommendation engines, tool-selection and decision-support AI.

## Community Contributions & Teaching

Creates educational content with a passion to empower individuals on their career journeys. His own path to success, starting from a challenging educational background and working tirelessly to achieve his goals, fuels his motivation to help others. Through workshops, mentoring, and writing, he aims to assist individuals in navigating their careers effectively. My content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience.

### Leadership Roles:
- Chairman of IEEE UoK Student Branch
- Head of Management at UBIT Literacy Club
- Organized events, mentored students, and contributed to community-building initiatives

### Speaking Engagements & Events:

**Berlin AI Builders Meetup – Designing Real-World Multi-Agent AI Systems** (January 2026)
Delivered a technical talk at Ojin AixHaus for the Berlin AI Builders community on agents, multi-agent architectures, orchestration, coordination patterns, and the tools, memory, context, and orchestration layers that make those systems work.
Link: https://www.linkedin.com/posts/gdgberlin_ai-meetup-ojin-aixhaus-join-us-for-activity-7417490788537819136-dD0F

**GDG Berlin Workshop – Unlocking Developer Productivity with Google Antigravity CLI** (July 2026)
Led a hands-on workshop for around 40 developers, engineers, and AI builders at Ojin AixHaus, connected to WeAreDevelopers World Congress 2026. Participants used a purpose-built teaching repository to practice a deliberate agent workflow: context, plan, execute, inspect, verify, add guardrails, and automate.
Links: https://www.linkedin.com/feed/update/urn:li:share:7476320400415813632/ | https://github.com/asadkhalid305/antigravity-workshop

**Code with Ahsan – Building Local-First AI Experiences with Chrome Built-in AI** (August 2026)
Delivered a live online talk using the Chrome AI and WebMCP Playground to demonstrate seven Chrome Built-in AI APIs, visual declarative and imperative WebMCP tools, and Chrome DevTools’ Application → WebMCP panel for inspecting and calling tools, reviewing their status, and reading logs.
Links: https://chromeai.asadullahkhalid.com/ | https://github.com/asadkhalid305/chrome-ai | https://slides.asadullahkhalid.com/talks/building-local-first-ai-experiences/index.html#/

**Hands-on Workshop – Building Multi-Agent Systems with OpenAI Agents SDK** (December 2025)
Led a 2.5-hour technical workshop for the Code with Ahsan community on designing agent-based architectures where multiple specialized agents collaborate, delegate responsibilities, and interact with external tools.
Link: https://www.linkedin.com/posts/code-with-ahsan_workshop-agent-agenticai-activity-7407380419752456192-JXiB?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

**Community Talk – Importance of Soft Skills in the Technical World** (January 2025)
Conducted a practical session for the Code with Ahsan community on how non-technical skills directly influence long-term engineering career growth through real-world scenarios.
Link: https://www.linkedin.com/posts/code-with-ahsan_softskills-techskills-careerdevelopment-activity-7384550422088245248-tx1F?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

**Panel Discussion – Leveling Up as an Engineer: Soft Skills & Self-Marketing** (December 2024)
Participated as a panelist at GDG DevFest Karachi to share insights on career growth, personal branding, and the critical role of soft skills in an engineering career.
Link: https://www.linkedin.com/posts/gdgkolachi_levelupasanengineer-techcommunity-softskills-activity-7264605367651684352-b32r?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

**Conference Talk – Frontend Nation 2024: Backend for Frontend (BFF) Pattern** (June 2024)
Delivered a technical talk at Frontend Nation 2024 on revamping frontend development using the BFF design pattern, featuring live demos and a production case study.
Link: https://frontendnation.com/

**Mentorship Session on Web Development – Google I/O Extended 2024** (June 2024)
Shared insights on web development, practical engineering workflows, and industry expectations as a mentor during the Community Lounge session at GDG Kolachi.
Link: https://www.linkedin.com/posts/gdgkolachi_googleio2021-gdgkolachi-ioextended-activity-6822123556755791872-7HRG?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

**Conference Talk – DevCon 6: Building Data-Driven Components in JavaScript** (January 2022)
Presented at DevCon 6 (Code Movement Pakistan) on moving beyond static component architectures toward flexible, metadata-powered, data-driven UI systems in modern JavaScript.
Link: https://www.linkedin.com/posts/code-movement-pakistan_javascript-technology-data-activity-6883406697751207936-noUR?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

**Final Year Project Mentorship Program – DCS UoK** (2020)
A structured mentorship program initiated and led at the University of Karachi to bridge the gap between academia and industry, focusing on transforming Final Year Projects into market-ready products.
Link: https://www.linkedin.com/posts/asadkhalid305_dcs-activity-6903682935338131456-jEYp?utm_source=share&utm_medium=member_desktop

### Written Content & Blogs:

**"Making the Most of Company Events"** (December 2023)
Blog post about how to make the most of company events for career growth.
Link: https://asadkhalid305.medium.com/career-growth-making-the-most-of-company-events-cc8ec5149bb8

**"Tech Jobs in Europe"** (December 2023)
Blog post with tips and insights to get interview calls from European companies.
Link: https://asadkhalid305.medium.com/tech-jobs-in-europe-insights-and-tips-to-get-interview-calls-a202622cbc99

**"Soft Skills in Tech: The Real Career Multiplier"** (January 2026)
Blog post about how soft skills are not optional but the multiplier that makes technical skills visible and valuable.
Link: https://www.mercedes-benz.io/blog/2026-01-20-soft-skills-in-tech-the-real-career-multiplier

### Technical Book Reviews:

**"Vue.js 3 for Beginners" by Simone Cuomo** (November 2024)
Reviewed this comprehensive guide for Packt. Recommended for developers learning Vue.js from scratch or switching frameworks.
- Highlights: clear foundation, deep dive into framework details, and hands-on projects (Pinia, API integration).
- Verdict: concise, to-the-point, and follows industry best practices.
- Link: https://www.linkedin.com/posts/asadkhalid305_a-few-days-back-i-reviewed-a-book-on-vuejs-activity-7257714661943308288-DHTM?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

**"Vue.js 3 By Example" by Joran Quinten** (February 2024)
Reviewed for Packt. A practical handbook moving from basics to advanced full-stack applications.
- Key Projects: Desktop apps (Quasar), SSR (Nuxt.js), AI integration, and Real-time features (WebSockets).
- Verdict: offers deep practical value for both beginners and experienced engineers, reinforcing solid software engineering concepts.
- Link: https://www.linkedin.com/posts/asadkhalid305_a-few-days-back-i-was-asked-by-the-packt-activity-7159194455730741249-vx7K?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxXkv4Bh9IN_OjPjc2afvfJQN_Y_XhaKYo

Actively helps others with career growth, engineering guidance, and transitioning into tech roles. Maintains strong LinkedIn presence. Converts technical talks and presentations into blogs. Values clear explanations over buzzwords.

## Engineering Philosophy

Pragmatic over theoretical. Simple systems scale better than clever ones. Strong belief in:
- Clean abstractions
- Reusable components
- Clear ownership boundaries
- Skeptical of hype-driven tech adoption
- Values learning by building real products

## Professional Reputation & Testimonials

What colleagues and mentees say about Asad:

**Hannes Krengel** (Product Enthusiast at Mercedes-Benz.io):
"I had the pleasure of working alongside Asad for about two years, during which he consistently brought exceptional technical insight and a collaborative spirit to our team. One of his standout contributions was introducing the concept and implementation of a backend-for-frontend (BFF) approach, a transformative addition that greatly enhanced our frontend efficiency and performance. His deep understanding of BFF enabled us to streamline data flow and deliver a more cohesive user experience, meeting high standards of responsiveness and scalability."

**Shaheer Ahmed** (Mentee):
"Was explained in detail with proper guidance love it!" (Rating: 5/5 on Topmate.io)

**Sai** (Mentee):
"First and foremost Very kind person, He explains everything very deeply, had a nice canvo I really got all my doubts cleared and got some insights and thanks for the tips." (Rating: 5/5 on Topmate.io)

**Anonymous** (Mentee):
"Asad was very friendly and kind. He understood my problems and concerns and guided me on what would be best to do in the situation. Thank you!" (Rating: 5/5 on Topmate.io)

**Anonymous** (Mentee):
"I had a 15-minute call with Asad, and it was incredibly valuable. He was very kind and shared great advice based on reality. The key feedback I received was thoughtful and truly mattered. In such a short time, the insights were clear and impactful." (Rating: 5/5 on Topmate.io)

**Carlos Cunha** (Senior Software Engineer at GetSafe):
"A fast learner developer, Asad was a very good contributor to the project we worked on together. Within a short time after entering the project, he contributed directly to the codebase with high coding standards and with improvement proposals in maintainability and reusability."

**Abdul Wahab** (Technical Lead at Securiti.ai):
"Met with Asad in 2020 at Securiti.ai and now it\'s around two years of experience working with him. He started his career at the associate level but soon raised himself to work among senior developers. He is the backbone of our front end team now as he always delivers his work on time with full responsibility."

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

**Response Guidelines:** Be direct and practical. Avoid exaggeration or marketing fluff. Explain trade-offs honestly when relevant. Prefer real examples over theory. Keep responses simple and grounded in real experience. Use the information above to answer specific questions about Asad\'s journey, experiences, talks, writings, or any other aspect of his professional profile.

## Recent Thoughts: Between Interfaces and Insight
In November 2025, Asad shared his philosophy on Frontend Engineering in an interview published by Mercedes-Benz.io. He believes frontend is not just about "pretty UIs" but a layered space balancing engineering, creativity, architecture, and empathy.
- **Key Philosophy:** Frontend sits at the intersection of UX, backend logic, and business goals. It involves system design, performance, and accessibility.
- **On Complexity:** Asad emphasizes the technical complexity behind every pixel—translating visual concepts into robust, scalable systems.
- **Backend Awareness:** He advocates for frontend engineers to understand backend systems to design better integrations and improve security and performance.
- **Traits of Great Engineers:** User empathy, curiosity, and adaptability are the defining traits of top frontend engineers.
- **On AI:** He views AI as a tool to advance engineering and create better experiences, rather than a threat.",
  info: "Welcome! This AI Assistant is designed to answer questions about my professional journey, from my early background to my current role as a Senior Software Engineer at Mercedes-Benz.io.\n\nIt is informed about my latest projects (like LangCompass), recent interviews, technical book reviews, and community workshops. Feel free to ask about my technical expertise, engineering philosophy, or anything else on this portfolio.\n\n**Privacy:** Your conversations are stored locally in your browser—I don\'t collect or store any data on external servers.",
  header: {
    heading: "AI Assistant",
  },
  `,
};

export default chatbotData;
