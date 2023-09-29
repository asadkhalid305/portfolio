import DisplayInfo from "../general/display-info";

const description = `Born in 1997 in Pakistan, my journey began with a focus on Islamic studies. It wasn't until I was 11 years old, starting in class 2 while my classmates were much younger, that I entered formal schooling. Progressing through only odd-numbered classes, I eventually secured admission to a reputable university for a BSCS degree, despite struggling with English and confidence.

Determined to improve, I devoted myself, working up to 18 hours a day. In my third year of university, I landed my first internship, followed by part-time and full-time jobs. Simultaneously, I shared my knowledge, serving as chairman of a non-profit organization that impacted thousands of students and earned me recognition as a leader.

Post-graduation, I expanded into giving workshops, mentoring, and writing to help others grow in their careers. In 2022, I embarked on a new chapter in Germany, where I worked for one year before joining one of the world's largest automobile companies as a Senior Developer.

Today, I stand at the intersection of experience and ambition, actively writing content to guide fellow tech enthusiasts on their career journeys. With passion, persistence, and a commitment to growth, I am excited about what lies ahead and look forward to making an even greater impact in the world of technology and lives of many.`;
const heading = "My Journey";

export default function Journey() {
  return (
    <div className="pt-20 lg:pt-36 lg:items-center">
      <DisplayInfo
        whitespacePreWrap
        description={description}
        heading={heading}
      />
    </div>
  );
}
