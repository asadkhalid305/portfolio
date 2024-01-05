import DisplayInfo from "../general/display-info";
import Timeline from "../general/timeline";
const description = `I have always been fascinated by web technologies and how they can transform the way we communicate, learn, and work. My journey as a web developer began in 2016, when I started building pet projects with HTML and CSS as an undergraduate student. This sparked my interest and passion for web development, and helped me land my first internship.

Since then, I have gained valuable experience working with many different companies in various roles such as frontend, backend, and fullstack developer. I have learned how to use different tools and frameworks, such as Vue.js, React.js, Node.js, and more, to create engaging and responsive web applications. I have also learned how to collaborate and communicate effectively with cross-functional teams, follow best practices, and deliver high-quality code.

In 2020, I graduated from university and joined a well-known product company as a software engineer, where I learned about the product development cycle, code reviews, testing, and deployment. I worked on several features and enhancements for the company's flagship product, which has hundreds of enterprise users worldwide.

After few years, I decided to pursue new challenges and opportunities abroad. I moved to Germany and worked for another company, where I was responsible for implementing complex web solutions, and ensuring code quality and performance. One year fast forward, currently I am working at one of the world's largest automobile companies as a Senior Developer.

Throughout my career, I have worked on diverse and exciting projects. I am always eager to learn new skills and technologies, and to share my knowledge and experience with others. I enjoy solving problems, creating value, and making a positive impact with web development.`;
const heading = `Experience`;

const experience = [
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
];

export default function Experience() {
  return (
    <div className="flex flex-col pt-20 lg:pt-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          whitespacePreWrap
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>
      <div className="flex-1 w-full">
        <Timeline record={experience} />
      </div>
    </div>
  );
}
