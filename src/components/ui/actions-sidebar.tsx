import { ReactNode } from "react";

interface Action {
  href: string;
  label: string;
  external?: boolean;
}

interface ActionsSidebarProps {
  title: string;
  actions: Action[];
  className?: string;
  children?: ReactNode;
}

export default function ActionsSidebar({
  title,
  actions,
  className = "",
  children,
}: Readonly<ActionsSidebarProps>) {
  if (actions.length === 0 && !children) return null;

  return (
    <div
      className={`bg-c-semidark rounded-2xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24 space-y-4 ${className}`}
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="block w-full py-3 px-4 bg-c-dark hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-center font-medium rounded-xl transition-colors shadow-lg hover:shadow-2xl"
        >
          {action.label}
        </a>
      ))}
      {children}
    </div>
  );
}
