import commonData from "@/constants/common.json";
import socialsData from "@/constants/socials.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-c-dark text-c-light py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-light text-gray-400">
            © {currentYear} {commonData.name}. {commonData.footer.rights}
          </p>
          <div className="flex gap-6">
            {Object.entries(socialsData).map(([key, social]: [string, any]) => (
              <a
                key={key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
