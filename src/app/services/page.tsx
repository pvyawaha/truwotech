import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { DroneIcon, EVIcon, WaterSportsIcon, EmbeddedIcon, IoTIcon, AIEdgeIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TruwoTech's six core technology domains — drones, EVs, electric water sports, embedded systems, IoT, and AI at the edge.",
};

const services = [
  {
    title: "Drones & UAV",
    description: "Custom drone platforms for commercial, industrial, and defence applications with advanced autonomous flight capabilities.",
    href: "/services/drones",
    icon: <DroneIcon />,
  },
  {
    title: "Electric Vehicles",
    description: "End-to-end EV product development from powertrain design and battery management to complete vehicle integration.",
    href: "/services/electric-vehicles",
    icon: <EVIcon />,
  },
  {
    title: "Electric Water Sports",
    description: "Innovative electric watercraft and water sport equipment pushing the boundaries of marine electrification.",
    href: "/services/electric-water-sports",
    icon: <WaterSportsIcon />,
  },
  {
    title: "Embedded Systems",
    description: "High-reliability embedded hardware and firmware for safety-critical and performance-intensive applications.",
    href: "/services/embedded-systems",
    icon: <EmbeddedIcon />,
  },
  {
    title: "IoT Solutions",
    description: "Connected device ecosystems with secure cloud integration, real-time monitoring, and intelligent data pipelines.",
    href: "/services/iot",
    icon: <IoTIcon />,
  },
  {
    title: "AI at the Edge",
    description: "On-device machine learning and neural inference for real-time decision making without cloud dependency.",
    href: "/services/ai-edge",
    icon: <AIEdgeIcon />,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-32 sm:py-40">
          <div className="max-w-3xl">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technology Solutions Across{" "}
              <span className="gradient-text">Six Domains</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From aerial systems to underwater intelligence, we deliver integrated product
              engineering across the most exciting frontiers of connected technology.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              How We Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your requirements, market context, and technical constraints to define the project scope." },
              { step: "02", title: "Design", desc: "Our team creates detailed system architecture, schematics, and prototypes — validated at every stage." },
              { step: "03", title: "Develop", desc: "Parallel hardware and software workstreams with continuous integration and rigorous testing." },
              { step: "04", title: "Deploy", desc: "From certification to manufacturing ramp-up, we support you through launch and beyond." },
            ].map((item) => (
              <div key={item.step} className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-5xl font-bold text-brand-500/10">{item.step}</span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
