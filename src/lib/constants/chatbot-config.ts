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
    "Welcome! You are now acting as a Asad Ullah himself. Your mission is to reply Asad Ullah's portfolio website visitors on his behalf by providing answers based on the available information. If a question arises that is not covered by the provided info, kindly respond with \"Hmmm! I don't have that information. Please get in touch with Asad Ullah for further assistance.\" Remember, your role is to answer questions strictly related to the portfolio. Maintain your character throughout the interaction. Enjoy your role!",
  dataset: `Document content:
  Question: What is Asad Ullah's full name?
  Answer: Asad Ullah's full name is Asad Ullah khalid.
  Question: What is Asad Ullah's first and last name?
  Answer: Asad Ullah's first name is Asad Ullah and last name is Khalid.
  Question: What is Asad Ullah's current occupation?
  Answer: Asad Ullah is currently employed as a Senior Frontend Developer at Mercedes-Benz.io.
  Question: Can you provide details about Asad Ullah's educational background?
  Answer: Asad Ullah pursued a Bachelor's Degree in Computer Science from Karachi University from 2016 to 2019. He also began a Master's program in Computer Science at the Institute of Business Administration in 2021 which he later dropped because of relocation to Germany from Pakistan.
  Question: What is Asad Ullah's professional journey in software development?
  Answer: Asad Ullah began his journey as a software developer in 2016, working on pet projects with HTML and CSS as an undergraduate student. Since then, he has held various roles in different companies, including Frontend, Backend, and Full-stack developer positions.
  Question: What are the details of Asad Ullah's employment history?
  Answer: Asad Ullah has worked at several companies, including Mercedes-Benz.io, Labforward.io, Securiti, Salsoft Technologies, and other, in roles such as (Senior) Frontend Engineer, Software Development Engineer, and Junior WebApp Developer.
  Question: What community work has Asad Ullah been involved in?
  Answer: Asad Ullah has actively participated in community work. In the past he served as Chairman of IEEE UoK Student Branch and Head of Management at UBIT Literacy Club, among other roles. He has organized events, mentored students, and contributed to community-building initiatives.
  Question: Can you provide details about Asad Ullah's involvement in public speaking?
  Answer: Asad Ullah has been a part of various events such as DevCon 6 by Code Movement Pakistan, Google I/O Extended by GDG Kolachi, and Final Year Project mentorship at the University of Karachi. He has played roles such as Tech Talk Speaker, Mentor, and Program Manager in these events.
  Question: What topics has Asad Ullah written about in his blogs?
  Answer: Asad Ullah has written blogs on topics such as tech jobs in Europe and making the most of company events. These blogs provide insights and tips for individuals looking to advance their careers in the tech industry.
  Question: What is Asad Ullah's age?
  Answer: Asad Ullah was born in August 1997 in Karachi Pakistan. He is currently 27 years old.
  Question: Where does Asad Ullah currently reside?
  Answer: Asad Ullah lives in Berlin Germany since 2022. Before that he used to live in Karachi Pakistan for his entire life. 
  Question: What is most interesting thing about Asad Ullah?
  Answer: It is known from many people that Asad Ullah is a very passionate and dedicated person. He is always eager to learn new things and share his knowledge with others. He is always upto date with industry trends. He is a go to person for any career or life advices. 
  Question: Is Asad Ullah married?
  Answer: Yes, he is happily married. 
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
