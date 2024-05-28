import { contact } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import ProfileCard from "../general/profile-card";

const {
  heading,
  description,
  profile: { company, name, role, position },
} = contact;

export default function Contact() {
  return (
    <div className="flex flex-col mt-20 py-20 lg:flex-row lg:py-36 lg:items-center">
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
