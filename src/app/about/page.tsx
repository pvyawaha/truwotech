import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TruwoTech — our mission, values, and the team behind cutting-edge drone, EV, IoT, and edge AI solutions.",
};

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and challenge conventions to deliver breakthrough technology solutions that redefine what's possible.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" fill="currentColor" opacity="0.3" />
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Engineering Excellence",
    description: "Every product we build meets the highest standards of reliability, performance, and safety — no compromises.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Collaborative Partnership",
    description: "We work alongside our clients as true partners, aligning our expertise with their vision to create lasting impact.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 26c0-4 3-7 7-7h10c4 0 7 3 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sustainable Impact",
    description: "Our focus on electric and intelligent systems directly contributes to a cleaner, more efficient, and connected future.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8v4M16 20v4M8 16h4M20 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "Founded", description: "TruwoTech established with a vision to bridge hardware innovation and intelligent software." },
  { year: "First Product", description: "Delivered our first integrated drone platform with edge AI capabilities." },
  { year: "Expansion", description: "Expanded into EV, marine electrification, and industrial IoT verticals." },
  { year: "Today", description: "Delivering end-to-end product engineering across six core technology domains." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-32 sm:py-40">
          <div className="max-w-3xl">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">About TruwoTech</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Engineering the Future of{" "}
              <span className="gradient-text">Connected Technology</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We are a product engineering company specializing in the convergence of
              hardware innovation, embedded intelligence, and connected systems.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Mission */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Bridging the Gap Between Hardware and Intelligence
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At TruwoTech, we believe the most transformative technologies emerge at the intersection of
                physical engineering and intelligent software. Our mission is to make this convergence
                accessible to companies of all sizes — from startups with bold ideas to enterprises
                ready to innovate.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We bring together world-class expertise in drone systems, electric mobility, marine technology,
                embedded design, IoT architecture, and edge AI to deliver products that don&apos;t just work
                — they set new standards.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl glass p-8 flex items-center justify-center">
                <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b8cff" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#17b363" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="360" height="260" rx="16" fill="url(#missionGrad)" />
                  {/* Mission illustration - connected world */}
                  <circle cx="200" cy="150" r="60" stroke="#3b8cff" strokeWidth="1" opacity="0.3" />
                  <circle cx="200" cy="150" r="90" stroke="#3b8cff" strokeWidth="0.5" opacity="0.15" strokeDasharray="6 4" />
                  <circle cx="200" cy="150" r="30" fill="#3b8cff" opacity="0.15" />
                  <circle cx="200" cy="150" r="12" fill="#3b8cff" opacity="0.4" />
                  {/* Satellite nodes */}
                  <circle cx="120" cy="90" r="8" fill="#17b363" opacity="0.5" />
                  <circle cx="280" cy="90" r="8" fill="#3b8cff" opacity="0.5" />
                  <circle cx="120" cy="210" r="8" fill="#3b8cff" opacity="0.5" />
                  <circle cx="280" cy="210" r="8" fill="#17b363" opacity="0.5" />
                  <line x1="128" y1="95" x2="188" y2="140" stroke="#17b363" strokeWidth="1" opacity="0.3" />
                  <line x1="272" y1="95" x2="212" y2="140" stroke="#3b8cff" strokeWidth="1" opacity="0.3" />
                  <line x1="128" y1="205" x2="188" y2="160" stroke="#3b8cff" strokeWidth="1" opacity="0.3" />
                  <line x1="272" y1="205" x2="212" y2="160" stroke="#17b363" strokeWidth="1" opacity="0.3" />
                  <text x="200" y="155" textAnchor="middle" fill="white" fontSize="10" fontFamily="system-ui" opacity="0.7">TRUWOTECH</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 transition-all"
              >
                <div className="text-brand-400 mb-5">{value.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Building Momentum
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-500/20 mt-4" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.year}</h3>
                  <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The People Behind the Technology
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our multidisciplinary team brings together expertise in mechanical engineering,
              electrical design, firmware, cloud systems, and machine learning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "Hardware Engineering", desc: "PCB design, power electronics, and mechanical systems" },
              { role: "Firmware & Embedded", desc: "Real-time systems, RTOS, and low-level drivers" },
              { role: "Software & Cloud", desc: "Full-stack development, IoT platforms, and data pipelines" },
              { role: "AI & Machine Learning", desc: "Computer vision, edge inference, and model optimization" },
            ].map((team) => (
              <div
                key={team.role}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-500/10 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-brand-400" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{team.role}</h3>
                <p className="text-gray-400 text-sm">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            We&apos;re always looking for talented engineers who want to work on the cutting edge of technology.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
