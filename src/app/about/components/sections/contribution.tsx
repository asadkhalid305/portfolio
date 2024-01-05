import { Fragment } from "react";
import DisplayInfo from "../general/display-info";
import Card from "../general/card";

const description = `I create educational content with a passion to empower individuals on their career journeys. My own path to success, starting from a challenging educational background and working tirelessly to achieve my goals, fuels my motivation to help others. Through workshops, mentoring, and writing, I aim to assist individuals in navigating their careers effectively. My content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience. I believe that with the right knowledge and support, anyone can achieve their professional aspirations, and I'm dedicated to providing the tools and insights to make that happen.`;
const heading = `Contribution`;
const contributions = [
  {
    title: "XYZ",
    description: "ABCDEFG 1234567890",
    image: {
      src: "",
      alt: "",
    },
    link: "",
  },
  {
    title: "XYZ",
    description: "ABCDEFG 1234567890",
    image: {
      src: "",
      alt: "",
    },
    link: "",
  },
  {
    title: "XYZ",
    description: "ABCDEFG 1234567890",
    image: {
      src: "",
      alt: "",
    },
    link: "",
  },
];

export default function Contribution() {
  return (
    <Fragment>
      <div className="pt-20 lg:pt-36 lg:items-center">
        <DisplayInfo
          whitespacePreWrap
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>
      <div className="grid gap-4 grid-cols-3">
        {contributions.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </Fragment>
  );
}
