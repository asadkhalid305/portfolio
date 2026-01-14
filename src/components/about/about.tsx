
/**
 * TODO:
 * 1. move static content to constants folder - resuse old content with latest modifications
 * 2. Use existing DisplayInfo content by adapting it for this section 
 * 3. Add modern effects on content
 * 4. Get image ideal dimention so that we can use object-contain
 *    which is stopping currnet image to take full height
 * 5. Enhance content if possible
 * 6. Enhance background line-blocks effect
 */
import Image from "next/image";
import aboutData from "@/constants/about.json";
import { getShimmerDataUrl } from "@/utils/shimmer";

const { heading, description, personalPhoto } = aboutData;

export default function About() {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] bg-grid-pattern overflow-hidden">
      {/* Content - vertically centered on left (desktop) / top section (mobile) */}
      <div className="relative z-10 flex flex-col justify-center pt-12 lg:pt-0 h-[55%] lg:h-full w-full lg:w-1/2 pl-6 lg:pl-16 pr-6">
        {/* Small intro label */}
        <span className="inline-block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
          Introduction
        </span>

        {/* Main heading with name highlighted */}
        <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8">
          <span className="block text-gray-900">Hey, I&apos;m</span>
          <span className="text-gray-900">Asad Ullah</span>
        </h2>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
          A Senior Software Engineer at{" "}
          <a
            href="https://mercedes-benz.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-900 hover:text-gray-600 transition-colors underline decoration-gray-300 hover:decoration-gray-600"
          >
            Mercedes-Benz.io
          </a>{" "}
          in Germany. With 6+ years in the field, I&apos;ve been learning,
          networking, and giving back to the community as a{" "}
          <span className="font-semibold text-gray-900">
            mentor and public speaker
          </span>
          .
        </p>

        {/* CTA text */}
        <p className="mt-6 text-lg text-gray-600">
          Seeking guidance or want to collaborate?{" "}
          <span className="font-semibold text-gray-900">
            Reach out to me!
          </span>
        </p>
      </div>

      {/* Desktop Photo - Absolutely positioned to cover full height on right side */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[55%] h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            alt="Asad Ullah Khalid"
            className="object-contain object-bottom"
            draggable="false"
            fill
            priority
            sizes="55vw"
            src="/images/myself.webp"
            placeholder="blur"
            blurDataURL={getShimmerDataUrl(600, 800)}
          />
        </div>
      </div>

      {/* Mobile Photo - Fully visible at bottom */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-[45%] z-0 pointer-events-none">
         <div className="relative w-full h-full">
            <Image
                alt="Asad Ullah Khalid"
                className="object-contain object-bottom"
                draggable="false"
                fill
                priority
                sizes="100vw"
                src="/images/myself.webp"
                placeholder="blur"
                blurDataURL={getShimmerDataUrl(300, 380)}
            />
         </div>
      </div>
    </div>
  );
}
