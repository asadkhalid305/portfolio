import DisplayInfo from "../general/display-info";
import Timeline from "../general/timeline";

const description = `I embarked on my journey in the world of web development with an internship at Interns Pakistan, where I honed my skills in HTML, CSS, and PHP. This initial experience ignited my passion for web development. Subsequently, during my tenure at Sudofy, I delved deeper into front-end development, creating numerous web pages using technologies like Sass, JavaScript, and ReactJS. I also expanded my expertise in CSS, SASS, jQuery, ECMAScript6, and Git. My journey continued at Edgeon, where I transitioned into full-stack development, building the back-end of a large-scale Android and iOS application using Node.js and MongoDB. This transformative experience allowed me to explore socket programming, MongoDB deep referencing, dynamic image hosting, and Heroku deployment. My dedication led me to secure a role at Estytic in Germany, where I enhanced the performance of an AngularJS application and gained remote work experience. Upon returning to Pakistan, I joined InjazSystems, contributing to ERP system development with NodeJS APIs and ReactJS applications. I then advanced to Salsoft Technologies, where I integrated HTML/CSS and Back-end APIs into ReactJs and VueJs. My journey led me to Securiti.ai, where I played a pivotal role in building the world's first PrivacyOps platform. Here, I honed my skills in JavaScript, React.js, Vue.js, and Git. Most recently, I joined Labforward as a Frontend Engineer, where I took ownership of multiple modules, contributing to system design, components architecture, and team building. I strengthened my skills in ReactJs, TypeScript, Jest, and Cypress, delivering reliable code and collaborating effectively within the team. Currently, as a Senior Frontend Developer at Mercedes-Benz.io, I continue to excel in front-end engineering with a focus on JavaScript, bringing innovation to the automotive industry.`;
const heading = "My Experience";

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
