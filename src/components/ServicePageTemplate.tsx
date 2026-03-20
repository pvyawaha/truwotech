import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  applications: { title: string; description: string }[];
  techStack: string[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon,
  capabilities,
  applications,
  techStack,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-32 sm:py-40">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <div className="text-brand-400 mb-6">{icon}</div>
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">{subtitle}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Capabilities */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Core Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                What We Deliver
              </h2>
              <ul className="space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-accent-400" />
                    </span>
                    <span className="text-gray-300">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Technology Stack</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Applications</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div
                key={app.title}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Tell us about your requirements and let&apos;s explore how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            Start a Conversation <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
