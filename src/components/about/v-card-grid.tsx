import { CardSystemProps } from "@/utils/types";
import Card from "@/components/ui/card";
import LinkButton from "@/components/ui/link-button";

export default function VCardSystem({
  heading,
  records,
  isOverview,
  hideLink,
}: Readonly<CardSystemProps>) {
  const displayRecords = isOverview ? records.slice(0, 3) : records;

  return (
    <div className="pt-12 lg:pt-16">
      <h2 className="pb-6 text-left text-2xl font-semibold capitalize tracking-[-0.03em] sm:text-3xl">
        {heading}
      </h2>
      <div className="grid gap-6 justify-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayRecords.map((item, index) => (
          <div
            key={item.id}
            className={`h-full ${
              isOverview
                ? `${
                    index === 1
                      ? "hidden md:block"
                      : index === 2
                      ? "hidden lg:block"
                      : "block"
                  }`
                : "block"
            }`}
          >
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              date={item.date}
              badges={item.badges}
            />
          </div>
        ))}
      </div>
      {isOverview && !hideLink && (
        <div className="mt-8 flex justify-center lg:justify-start">
          <LinkButton
            href="/contribution"
            showIcon={false}
            text={`See all ${heading}`}
            variant="minimal"
          />
        </div>
      )}
    </div>
  );
}
