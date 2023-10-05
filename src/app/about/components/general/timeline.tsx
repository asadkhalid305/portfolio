import LinkButton from "./link-button";
import TimelineItem from "./timeline-item";

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

export default function Timeline() {
  return (
    <ol className="relative border-c-dark max-md:border-l md:flex md:flex-row md:justify-between md:border-t">
      {experience.map((item, index) => (
        <TimelineItem
          key={index}
          company={item.company}
          date={item.date}
          location={item.location}
          position={item.position}
        />
      ))}
      <li className="max-md:mb-10 max-md:ml-4 md:self-center">
        <LinkButton>Learn more</LinkButton>;
      </li>
    </ol>
  );
}
