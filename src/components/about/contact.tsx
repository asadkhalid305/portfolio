import contactData from "@/constants/contact.json";
import DisplayInfo from "@/components/about/display-info";
import ProfileCard from "@/components/about/profile-card";

const {
  heading,
  description,
  profile: { company, name, role, position },
} = contactData;

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          label="GET IN TOUCH"
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
