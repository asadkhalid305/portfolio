import commonData from "@/constants/common.json";
import socialsData from "@/constants/socials.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-black/5 dark:border-white/5 bg-white/30 backdrop-blur-xl dark:bg-black/30 py-12">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-bold tracking-widest text-slate-900 dark:text-white uppercase">
              {commonData.name}
            </p>
            <p className="text-xs font-medium text-slate-500 dark:text-gray-400">
              © {currentYear} • {commonData.footer.rights}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {Object.entries(socialsData).map(([key, social]: [string, any]) => (
              <a
                key={key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
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
