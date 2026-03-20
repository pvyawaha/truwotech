import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}

export default function ServiceCard({ title, description, href, icon, index }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-brand-400 group-hover:text-brand-300 transition-colors mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center gap-2 text-brand-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
