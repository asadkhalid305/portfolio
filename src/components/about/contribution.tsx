import DisplayInfo from "@/components/about/display-info";
import LinkButton from "@/components/ui/link-button";
import VCardGrid from "@/components/about/v-card-grid";
import { Post } from "@/lib/mdx";

const label = "ACTIVITIES & IMPACT";
const heading = "Contribution";
const description =
  "I create educational content with a passion to empower individuals on their career journeys. My own path to success, starting from a challenging educational background and working tirelessly to achieve my goals, fuels my motivation to help others. Through workshops, mentoring, and writing, I aim to assist individuals in navigating their careers effectively. My content is designed for anyone seeking guidance and mentorship, regardless of their educational background or prior experience. I believe that with the right knowledge and support, anyone can achieve their professional aspirations, and I'm dedicated to providing the tools and insights to make that happen.";

interface ContributionProps {
  isOverview?: boolean;
  events: Post[];
  blogs: Post[];
  bookReviews?: Post[];
}

export default function Contribution({
  isOverview = false,
  events,
  blogs,
  bookReviews = [],
}: ContributionProps) {
  // Map MDX posts to VCard format
  const mapPostToCard = (
    posts: Post[],
    type: "events" | "blogs" | "book-reviews"
  ) => {
    return posts.map((post) => {
      const badges = [...(post.frontmatter.badges || [])];
      if (type === "events") {
        if (post.frontmatter.type) badges.push(post.frontmatter.type);
        if (post.frontmatter.event) badges.push(post.frontmatter.event);
      }

      return {
        id: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        image: post.frontmatter.image,
        date: post.frontmatter.date,
        link: `/contribution/${type}/${post.slug}`,
        badges: badges,
      };
    });
  };

  const eventItems = mapPostToCard(events, "events");
  const blogItems = mapPostToCard(blogs, "blogs");
  const bookReviewItems = mapPostToCard(bookReviews, "book-reviews");

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

      {/* Book Reviews - Only shown on main page */}
      {!isOverview && bookReviewItems.length > 0 && (
        <VCardGrid
          heading="Book Reviews"
          records={bookReviewItems}
          isOverview={isOverview}
          hideLink={true}
        />
      )}

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
