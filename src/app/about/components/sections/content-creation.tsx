import DisplayInfo from "../general/display-info";

const description = `I create educational content with a passion to empower individuals on their career journeys. My own path to success, starting from a challenging educational background and working tirelessly to achieve my goals, fuels my motivation to help others. Through workshops, mentoring, and writing, I aim to assist individuals in navigating their careers effectively. My content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience. I believe that with the right knowledge and support, anyone can achieve their professional aspirations, and I'm dedicated to providing the tools and insights to make that happen.`;
const heading = "Content Creation";

export default function ContentCreation() {
  return (
    <div className="pt-20 lg:pt-36 lg:items-center">
      <DisplayInfo
        whitespacePreWrap
        description={description}
        heading={heading}
        paddingBottom
      />
    </div>
  );
}
