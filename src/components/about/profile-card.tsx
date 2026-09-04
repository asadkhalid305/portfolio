import Image from "next/image";
import LinkButton from "@/components/ui/link-button";
import CardShell from "@/components/ui/card-shell";
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
    <div className="flex flex-1 justify-center lg:justify-end">
      <CardShell className="w-full max-w-sm">
        <div className="w-full bg-c-dark px-4 py-3 flex items-center gap-2">
          <span className="text-c-light text-xl font-semibold tracking-tight">
            Linked
          </span>
          <span className="text-c-dark text-xl font-semibold bg-c-light px-1.5 rounded tracking-tight">
            in
          </span>
        </div>
        <div className="flex flex-col p-4">
          <div className="relative w-16 h-16 mb-2">
            <Image
              alt={"Personal photo of " + name}
              className="rounded-full"
              fill
              sizes="64px"
              src="/images/linkedin-profile.webp"
              placeholder="blur"
              blurDataURL={getShimmerDataUrl(64, 64)}
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="space-y-0.5 mt-1 mb-4 text-sm">
            <p className="font-normal">
              {role}@{company}
            </p>
            <p className="font-light">{position}</p>
          </div>
          <LinkButton
            arrowDirection="up-right"
            href={socialsData.linkedIn.href}
            rounded="full"
            showIcon
            size="sm"
            text="Connect on LinkedIn"
          />
        </div>
      </CardShell>
    </div>
  );
}
