import DisplayInfo from "../general/display-info";
import Timeline from "../general/timeline";

const description =
  "As a highly skilled software engineer with over 5 years of full-stack web development experience, I specialize in creating exceptional front-end software products. Proficient in technologies like VueJs, ReactJs, ExpressJS, NodeJs, JavaScript, TypeScript, and databases such as MySQL and MongoDB, I prioritize design and testing to ensure seamless user experiences and high-quality applications. In addition to my technical skills, I possess expertise in software development methodologies including Agile, Scrum, and SAFe, complemented by strong collaboration, communication, leadership, ownership, and presentation abilities. Beyond my career, I've made substantial contributions to non-profit organizations, orchestrating their transformation from small teams to over 50 members and overseeing events with up to 500 attendees. I continue to pay it forward by offering mentorship and conducting technology workshops on various platforms. I am also highly passionate about creating content aimed at empowering individuals to make informed decisions and navigate successful careers. As I pursue my own ambitious goals, I'm dedicated to uplifting others on this journey.";
const heading = "My Journey 🚄";

export default function Journey() {
  return (
    <div className="flex flex-col py-20 lg:py-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          centerHeading
          description={description}
          heading={heading}
        />
      </div>
      <div className="flex-1 w-full">
        <Timeline />
      </div>
    </div>
  );
}
