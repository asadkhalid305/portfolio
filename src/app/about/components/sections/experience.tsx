import DisplayInfo from "../general/display-info";
import Timeline from "../general/timeline";

const description = `I initiated my software engineering journey during my university days, dedicating myself to hands-on practice across various technologies. In 2018, my journey took a significant step with an internship at Interns Pakistan, refining skills in HTML, CSS, and PHP. Subsequently, at Sudofy, I deepened my expertise in front-end development, mastering Sass, JavaScript, and ReactJS. Transitioning into full-stack development at Edgeon, I crafted the backend for a mobile app using NodeJs. As an undergraduate, I secured a remote role at Estytic, gaining proficiency in Angular. Joining Injaz Systems, I contributed to ERP systems with ReactJs and NodeJs. After graduation in 2019, I embraced a full-time role at Salsoft Technologies, integrating HTML/CSS and back-end APIs into ReactJs and VueJs. All these experiences led me to Securiti.ai, where I played a pivotal role in building the world's first PrivacyOps platform with VueJs. In 2022, my journey led me to Germany at Labforward, working on ReactJS, and subsequently joining Mercedes-Benz as a Senior Software Engineer. 

The past few years have been a thrilling journey, marked by the invaluable experience of collaborating with diverse companies across different countries and ecosystems. This exposure to a variety of tools has significantly contributed to shaping me into a formidable candidate in the competitive IT landscape today.`;
const heading = `My Experience`;

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
        <Timeline />
      </div>
    </div>
  );
}
