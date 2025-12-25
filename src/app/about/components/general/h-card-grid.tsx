import { Post } from "@/lib/utils/types";
import Card from "@/components/ui/card";
import projectsData from "@/content/projects.json";

interface HCardGridProps {
  projects: Post[];
}

export default function HCardGrid({ projects }: Readonly<HCardGridProps>) {
  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <Card
          key={project.slug}
          id={project.slug}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          image={project.frontmatter.image}
          link={`/projects/${project.slug}`}
          date={project.frontmatter.date}
          horizontal={true}
          badges={project.frontmatter.badges || []}
          linkText={projectsData.card.viewProject}
        />
      ))}
    </div>
  );
}
