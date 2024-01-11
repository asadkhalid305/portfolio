import Script from "next/script";

export default function LinkedInBadge() {
  return (
    <div>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />

      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="asadkhalid305"
        data-version="v1"
      />
    </div>
  );
}
