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
  {
    company: "Jr. WebApp Develop",
    date: "Sep 2019 - Feb 2020",
    location: "Karachi, Pakistan",
    position: "Salsoft Technologies",
  },
  // ! to be decide whether to show this or not
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
    <ol className="relative border-black max-md:border-l md:flex md:flex-row md:justify-between md:border-t">
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
        <a
          href="https://www.linkedin.com/in/asadkhalid305/details/experience/"
          className="inline-flex rounded-lg bg-black text-white px-5 py-3 font-medium shadow-lg items-center text-sm"
        >
          <span className="md:hidden 2xl:block">Learn more </span>
          <svg
            className="w-3 h-3 ml-2 md:m-0 2xl:m-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </li>
    </ol>
  );
}
