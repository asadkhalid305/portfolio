import Image from "next/image";
import LinkButton from "@/components/ui/link-button";
import socialsData from "@/constants/socials.json";
import { ProfileCardProps } from "@/utils/types";
import { getShimmerDataUrl } from "@/utils/shimmer";

export default function ProfileCard({
  company,
  name,
  role,
  position,
}: Readonly<ProfileCardProps>) {
  return (
    <div className="flex-1 flex justify-center lg:justify-end">
      <div className="w-full max-w-sm bg-white/60 backdrop-blur-xl dark:bg-black/40 border border-white/20 dark:border-white/10 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
        {/* Cover Photo / Header */}
        <div className="w-full h-24 bg-gradient-to-r from-slate-700 to-slate-900 relative">
           <div className="absolute top-3 right-4 flex items-center gap-1">
             <span className="text-white text-lg font-bold tracking-tight">
               Linked
             </span>
             <span className="text-[#0a66c2] text-lg font-bold bg-white px-1 rounded-sm tracking-tight leading-none h-5 flex items-center">
               in
             </span>
           </div>
        </div>
        
        <div className="flex flex-col px-6 pb-6 -mt-12 relative z-10">
          <div className="relative w-24 h-24 mb-3 p-1 bg-white dark:bg-black rounded-full shadow-md">
            <Image
              alt={"Personal photo of " + name}
              className="rounded-full object-cover"
              fill
              sizes="96px"
              src="/images/linkedin-profile.webp"
              placeholder="blur"
              blurDataURL={getShimmerDataUrl(96, 96)}
              loading="lazy"
            />
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{name}</h3>
          <p className="text-sm text-slate-500 dark:text-gray-400 mb-4">{position}</p>
          
          <div className="space-y-1 mb-6 text-sm">
            <p className="font-medium text-slate-700 dark:text-gray-300">
              {role} at <span className="font-bold">{company}</span>
            </p>
          </div>
          
          <LinkButton
            className="w-full justify-center bg-[#0a66c2] text-white rounded-full px-4 py-2 hover:bg-[#004182] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 font-semibold"
            href={socialsData.linkedIn.href}
            showIcon={false}
            text="Connect on LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}
