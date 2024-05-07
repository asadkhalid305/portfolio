import Event1 from "public/images/event-1.jpeg";
import Event2 from "public/images/event-2.jpeg";
import Event3 from "public/images/event-3.jpeg";
import Blog1 from "public/images/blog-1.webp";
import Blog2 from "public/images/blog-2.webp";
import Testimonial1 from "public/images/testimonial-1.jpeg";
import Testimonial2 from "public/images/testimonial-2.jpeg";
import Testimonial3 from "public/images/testimonial-3.jpeg";
import Testimonial4 from "public/images/testimonial-4.jpeg";
import Testimonial5 from "public/images/testimonial-5.jpeg";
import Testimonial6 from "public/images/testimonial-6.jpeg";
import {
  Contact,
  Contribution,
  Experience,
  Intro,
  Journey,
  Testimonial,
} from "./types";

//Header
export const header = {
  links: [
    {
      name: "Intro",
      href: "#intro",
    },
    {
      name: "Journey",
      href: "#journey",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contribution",
      href: "#contribution",
    },
    {
      name: "Testimonial",
      href: "#testimonial",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
};

// Intro
export const intro: Intro = {
  heading: "Introduction",
  description:
    "Hey there! My name is Asad Ullah Khalid, I am a Senior Software Engineer and enthusiast about JavaScript. Also, I am passionate about helping people navigate their career effectively.",
};

// Journey
export const journey: Journey = {
  heading: "Journey",
  description: `Born in 1997 in Pakistan, my journey began with a focus on Islamic studies. It wasn't until I was 11 years old, starting in class 2 while my classmates were much younger, that I entered formal schooling. Progressing through only odd-numbered classes, I eventually secured admission to a reputable university for a BSCS degree, despite struggling with childhood struggles and lack of confidence.

  Determined to improve, I devoted myself, working up to 18 hours a day. In my third year of university, I landed my first internship, followed by part-time and full-time jobs. Simultaneously, I shared my knowledge, serving as chairman of a non-profit organization that impacted thousands of students and earned me recognition as a leader.
  
  Post-graduation, I expanded into giving workshops, mentoring, and writing to help others grow in their careers. In 2022, I embarked on a new chapter in Germany, where I worked for one year before joining one of the world's largest automobile companies as a Senior Developer.
  
  Today, I stand at the intersection of experience and ambition, actively writing content to guide fellow tech enthusiasts on their career journeys. With passion, persistence, and a commitment to growth, I am excited about what lies ahead and look forward to making an even greater impact in the world of technology and lives of many.`,
};

// Experience
export const experience: Experience = {
  heading: "Experience",
  description: `I have always been fascinated by web technologies and how they can transform the way we communicate, learn, and work. My journey as a web developer began in 2016, when I started building pet projects with HTML and CSS as an undergraduate student. This sparked my interest and passion for web development, and helped me land my first internship.`,
  items: [
    {
      company: "Mercedes-Benz.io",
      date: "Aug 2023 - Present",
      location: "Berlin, Germany",
      position: "Senior Frontend Developer",
    },
    {
      company: "Labforward",
      date: "Aug 2022 - Aug 2023",
      location: "Berlin, Germany",
      position: "Frontend Engineer",
    },
    {
      company: "Securiti",
      date: "Feb 2020 - Jul 2022",
      location: "Karachi, Pakistan",
      position: "Software Development Engineer",
    },
    // ! to be decide whether to show this or not
    // {
    //   company: "Jr. WebApp Develop",
    //   date: "Sep 2019 - Feb 2020",
    //   location: "Karachi, Pakistan",
    //   position: "Salsoft Technologies",
    // },
    // {
    //   company: "InjazSystems",
    //   date: "May 2019 - Jun 2019",
    //   location: "Karachi, Pakistan",
    //   position: "MERN Stack Developer",
    // },
    // {
    //   company: "EdgeOn ",
    //   date: "Jan 2019 - May 2019",
    //   location: "Karachi, Pakistan",
    //   position: "Backend Developer",
    // },
    // {
    //   company: "Sudofy",
    //   date: "Jun 2018 - Sep 2018",
    //   location: "Karachi, Pakistan",
    //   position: "Frontend Web Developer",
    // },
  ],
  linkedInLink: "https://www.linkedin.com/in/asadkhalid305/details/experience/",
};

// Contribution
export const contribution: Contribution = {
  heading: `Contribution`,
  description: `I create educational content with a passion to empower individuals on their career journeys. My own path to success, starting from a challenging educational background and working tirelessly to achieve my goals, fuels my motivation to help others. Through workshops, mentoring, and writing, I aim to assist individuals in navigating their careers effectively. My content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience. I believe that with the right knowledge and support, anyone can achieve their professional aspirations, and I'm dedicated to providing the tools and insights to make that happen.`,
  items: {
    events: [
      {
        title: "Code Movement Pakistan",
        description: `I gave a tech talk on topic of "Data Driven UI Components".`,
        image: {
          src: Event1,
          alt: "poster-1",
        },
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6883406697751207936/",
      },
      {
        title: "Google Developers Group",
        description: "I mentored participitants on subject of web technologies",
        image: {
          src: Event2,
          alt: "poster-2",
        },
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6822123556755791872/",
      },
      {
        title: "Univeristy of Karachi",
        description:
          "I started a mentorship program for computer science students at Univerity of Karachi. I along with industry professionals guided them to create industry-standard final year projects and assited throughout their journey.",
        image: {
          src: Event3,
          alt: "poster-3",
        },
        link: "https://www.linkedin.com/posts/asadkhalid305_dcs-activity-6903682935338131456-jEYp?utm_source=share&utm_medium=member_desktop",
      },
    ],
    blogs: [
      {
        title: "Tech Jobs in Europe",
        description: `In this blog post I have given tips and insights to get tnterview calls from European companies.`,
        image: {
          src: Blog1,
          alt: "poster-1",
        },
        link: "https://asadkhalid305.medium.com/tech-jobs-in-europe-insights-and-tips-to-get-interview-calls-a202622cbc99",
      },
      {
        title: "Making the Most of Company Events",
        description: `In this blog post I have talked about how to make the most of company events.`,
        image: {
          src: Blog2,
          alt: "poster-2",
        },
        link: "https://asadkhalid305.medium.com/career-growth-making-the-most-of-company-events-cc8ec5149bb8",
      },
    ],
  },
};

// Testimonial
export const testimonial: Testimonial = {
  heading: `Testimonial`,
  items: [
    {
      text: `A fast learner developer, Asad was a very good contributor to the project we worked on together. Within a short time after entering the project, he contributed directly to the codebase with high coding standards and with improvement proposals in maintainability and reusability.`,
      author: {
        name: "Carlos Cunha",
        image: {
          src: Testimonial1,
          alt: "Carlos Cunha",
        },
        job: "Senior Software Engineer at at GetSafe",
        link: "https://www.linkedin.com/in/carl0scunha/",
      },
    },
    {
      text: `Met with Asad in 2020s at securiti.ai and now its around two years experience of working with him. 
      He started his career at the ascociate level but soon raised himself to work among senior developers.
      He is the backbone of our front end team now as he always delivers his work on time with full responsibility.`,
      author: {
        name: "Abdul Wahab",
        image: {
          src: Testimonial2,
          alt: "Abdul Wahab",
        },
        job: "Techinical Lead at Securiti.ai",
        link: "https://www.linkedin.com/in/abdul-wahab-155a7421/",
      },
    },
    {
      text: `- Passion and eagerness to grow: 10
      - Team player: 10
      - Results: 10
      - Communication 10 (+ 10)
      
      What else are you looking for?
      
      Asad has always shown tremendous energy and a positive attitude towards work. His active engagements with communities clearly show that how much he loves contributing to Open Source and sharing knowledge with others. 
      
      Throw any problem at him and he will come up with a solution. Always ready to outperform his previous self.
      
      Still not convinced? Just connect with him and you will know what an impressive guy he is.`,
      author: {
        name: "Shahnawaz A K",
        image: {
          src: Testimonial3,
          alt: "Shahnawaz A K",
        },
        job: "Senior Full Stack Engineer at Rapyd",
        link: "https://www.linkedin.com/in/shahnawazalikausar/",
      },
    },
    {
      text: `During my time working along side Asad for although what was a brief period of time, I found him to be a good team player, career oriented, pragmatic thinker and someone who possesses valuable experience.
      As a colleague and a person he is a very polite, approachable and humble individual to work with. Someone who is a good collaborator and acknowledges the importance of it.
      When working, I liked his ability to take into view the broader perspective and propose stable and long lasting solutions. I also felt he keeps in touch with the latest development and trends in the industry and is constantly striving to improve himself.
      Overall, I can safely say, Asad is a person who will add a lot of value in any team he is a part of and I am confident he will play his part in fostering a healthy work culture.`,
      author: {
        name: "Hassan Ahmed",
        image: {
          src: Testimonial4,
          alt: "Hassan Ahmed",
        },
        job: "Senior Software Engineer at Phrase",
        link: "https://www.linkedin.com/in/hassan-ahmed-738816a0/",
      },
    },
    {
      text: `Asad is very passionate and has great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards. One of the best things I found in Asad is taking ownership of the project. Kudos`,
      author: {
        name: "Rehmat Murad Ali",
        image: {
          src: Testimonial5,
          alt: "Rehmat Murad Ali",
        },
        job: "Senior Software Engineer at Bayzat",
        link: "https://www.linkedin.com/in/rehman-murad-ali-136254a3/",
      },
    },
    {
      text: `I rarely come across real talents who stand out like Asad Ullah. He was dedicated and sincere towards his responsibilities and his ability to handle pressure was exceptional. No matter how much complex tasks was but he accomplished them and his eagerness towards learning and adopting new technologies was there to be appreciated . As a team member, Asad earns my highest respect.`,
      author: {
        name: "Syed M Suhaib",
        image: {
          src: Testimonial6,
          alt: "Syed M Suhaib",
        },
        job: "Senior Software Engineer at Nisum",
        link: "https://www.linkedin.com/in/syedmsohaib/",
      },
    },
  ],
};
// Contacts
export const contact: Contact = {
  heading: `Let's Connect`,
  description:
    "Your thoughts and questions are always welcome here so do not hesitate to drop me a message if you need assistance or have something to talk about.",
};

export const chatbot = {
  prompt:
    "Welcome! You are now acting as a Asad Ullah Khalid himself. Your mission is to reply Asad Ullah's portfolio website visitors on his behalf by providing answers based on the available information. If a question arises that is not covered by the provided info, kindly respond with \"Hmmm! I don't have that information at the moment. Please get in touch with Asad Ullah for further assistance.\" Remember, your role is to answer questions strictly related to the portfolio. Maintain your character throughout the interaction. Enjoy your role!",
  dataset: `Document content:
  Question: What is Asad Ullah Khalid's current occupation?
  Answer: Asad Ullah Khalid is currently employed as a Senior Frontend Developer at Mercedes-Benz.io.
  Question: Can you provide details about Asad Ullah Khalid's educational background?
  Answer: Asad Ullah Khalid pursued a Bachelor's Degree in Computer Science from Karachi University from 2016 to 2019. He also began a Master's program in Computer Science at the Institute of Business Administration in 2021.
  Question: What is Asad Ullah Khalid's professional journey in software development?
  Answer: Asad Ullah Khalid began his journey as a software developer in 2016, working on pet projects with HTML and CSS as an undergraduate student. Since then, he has held various roles in different companies, including Frontend, Backend, and Full-stack developer positions.
  Question: What are the details of Asad Ullah Khalid's employment history?
  Answer: Asad Ullah Khalid has worked at several companies, including Mercedes-Benz.io, Labforward.io, Securiti, Salsoft Technologies, and other, in roles such as (Senior) Frontend Engineer, Software Development Engineer, and Junior WebApp Developer.
  Question: What community work has Asad Ullah Khalid been involved in?
  Answer: Asad Ullah Khalid has actively participated in community work. In the past he served as Chairman of IEEE UoK Student Branch and Head of Management at UBIT Literacy Club, among other roles. He has organized events, mentored students, and contributed to community-building initiatives.
  Question: Can you provide details about Asad Ullah Khalid's involvement in public speaking?
  Answer: Asad Ullah Khalid has been a part of various events such as DevCon 6 by Code Movement Pakistan, Google I/O Extended by GDG Kolachi, and Final Year Project mentorship at the University of Karachi. He has played roles such as Tech Talk Speaker, Mentor, and Program Manager in these events.
  Question: What topics has Asad Ullah Khalid written about in his blogs?
  Answer: Asad Ullah Khalid has written blogs on topics such as tech jobs in Europe and making the most of company events. These blogs provide insights and tips for individuals looking to advance their careers in the tech industry.
  Question: What is Asad Ullah Khalid's age?
  Answer: Asad Ullah Khalid was born in August 1997 in Karachi Pakistan. 
  Question: Where does Asad Ullah Khalid currently reside?
  Answer: Asad Ullah Khalid lives in Berlin Germany since 2022. Before that he used to live in Karachi Pakistan for his entire life. 
  Question: What is most interesting thing about Asad Ullah Khalid?
  Answer: It is known from many people that Asad Ullah Khalid is a very passionate and dedicated person. He is always eager to learn new things and share his knowledge with others. He is always upto date with industry trends. He is a go to person for any career or life advices. 
  Question: Is Asad Ullah Khalid married?
  Answer: Yes, he is happily married. 
  Question: What is Asad Ullah Khalid first and last name?
  Answer: Asad Ullah Khalid first name is Asad Ullah and last name is Khalid.
  `,
};
