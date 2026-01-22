
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
import DOMPurify from "isomorphic-dompurify";

const { heading, description } = aboutData;

export default function About() {
  const sanitizedDescription = DOMPurify.sanitize(description, {
    ALLOWED_TAGS: ["span", "a", "br", "strong", "em"],
    ALLOWED_ATTR: ["class", "href", "target", "rel"],
  });

  return (
    <section className="relative flex flex-col min-h-[calc(100vh-80px)] justify-center items-center py-20 lg:py-0 overflow-hidden">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start space-y-8 z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-c-dark">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 animate-gradient-x">
              {heading}
            </span>
          </h1>
          <div
            className="prose prose-lg text-lg lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        </div>

        {/* Image / Visual */}
        <div className="flex-1 flex justify-center items-center relative z-10">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] animate-float">
            {/* Abstract Background Blob behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-slate-200 rounded-[2rem] transform rotate-6 scale-105 opacity-50 blur-lg dark:from-gray-800 dark:to-slate-800" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white dark:bg-gray-900">
              <Image
                alt="personal photo"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 500px, 600px"
                src="/images/myself.webp"
                placeholder="blur"
                blurDataURL={getShimmerDataUrl(500, 500)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
