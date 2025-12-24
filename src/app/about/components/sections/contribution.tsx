import DisplayInfo from "@/app/about/components/general/display-info";
import LinkButton from "@/app/about/components/general/link-button";
import VCardGrid from "@/app/about/components/general/v-card-grid";
import { Post } from "@/lib/mdx";

const label = "ACTIVITIES & IMPACT";
const heading = "Contribution";
const description =
  "I create educational content with a passion to empower individuals on their career journeys. My own path to success, starting from a challenging educational background and working tirelessly to achieve my goals, fuels my motivation to help others. Through workshops, mentoring, and writing, I aim to assist individuals in navigating their careers effectively. My content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience. I believe that with the right knowledge and support, anyone can achieve their professional aspirations, and I'm dedicated to providing the tools and insights to make that happen.";

interface ContributionProps {
  isOverview?: boolean;
  events: Post[];
  blogs: Post[];
}

export default function Contribution({
  isOverview,
  events,
  blogs,
}: ContributionProps) {
  // Map MDX posts to VCard format
  const mapPostToCard = (posts: Post[], type: "events" | "blogs") => {
    return posts.map((post) => ({
      id: post.slug,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      image: post.frontmatter.image,
      date: post.frontmatter.date,
      link: `/contribution/${type}/${post.slug}`,
    }));
  };

  const eventItems = mapPostToCard(events, "events");
  const blogItems = mapPostToCard(blogs, "blogs");

  return (
    <>
      <div className="">
        <DisplayInfo
          description={description}
          heading={heading}
          label={label}
        />
      </div>

      {/* Events */}
      <VCardGrid
        heading="events"
        records={eventItems}
        isOverview={isOverview}
        hideLink={true}
      />

      {/* Blogs */}
      <VCardGrid
        heading="blogs"
        records={blogItems}
        isOverview={isOverview}
        hideLink={true}
      />

      {isOverview && (
        <div className="mt-12 flex justify-center lg:justify-start">
          <LinkButton
            href="/contribution"
            showIcon={false}
            text="See all contributions"
            variant="minimal"
          />
        </div>
      )}
    </>
  );
}
