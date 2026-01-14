import DisplayInfo from "@/components/about/display-info";
import Card from "@/components/ui/card";
import LinkButton from "@/components/ui/link-button";

const label = "SOLO VENTURE";
const heading = "Projects";
const description =
  "Beyond my work in industry, I'm building products that solve real problems. Here's what I'm currently working on.";

interface ProjectsProps {
  project: {
    slug: string;
    frontmatter: {
      title: string;
      description: string;
      image: { src: string; alt: string };
      badges?: string[];
      date: string;
    };
  };
}


export default function Projects({
  project,
}: Readonly<ProjectsProps>) {
  const { slug, frontmatter } = project;

  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          label={label}
          paddingBottom
        />
      </div>
      <div className="flex-1">
        <div className="mb-8 md:mb-12">
          <Card
            id={slug}
            title={frontmatter.title}
            description={frontmatter.description}
            image={frontmatter.image}
            link={`/projects/${slug}`}
            date={frontmatter.date}
            horizontal={true}
            badges={frontmatter.badges || []}
            linkText="View Project"
          />

        </div>
        <div className="flex justify-center lg:justify-start">
          <LinkButton
            href="/projects"
            showIcon={false}
            text="See all projects"
            variant="minimal"
          />
        </div>
      </div>
    </div>
  );
}
