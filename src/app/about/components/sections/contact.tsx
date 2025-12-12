import { contact } from "@/lib/constants";
import DisplayInfo from "@/app/about/components/general/display-info";
import ProfileCard from "@/app/about/components/general/profile-card";

const {
  heading,
  description,
  profile: { company, name, role, position },
} = contact;

export default function Contact() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] justify-center py-20 lg:flex-row lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingBottom
          paddingRight
          paddingTop
        />
      </div>
      <ProfileCard
        company={company}
        name={name}
        role={role}
        position={position}
      />
    </div>
  );
}
