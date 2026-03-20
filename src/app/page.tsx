import Link from "next/link";
import HeroIllustration from "@/components/HeroIllustration";
import ServiceCard from "@/components/ServiceCard";
import { DroneIcon, EVIcon, WaterSportsIcon, EmbeddedIcon, IoTIcon, AIEdgeIcon, CheckIcon, ArrowRightIcon } from "@/components/Icons";

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

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6", label: "Industry Verticals" },
  { value: "99.9%", label: "System Uptime" },
  { value: "24/7", label: "Engineering Support" },
];

const features = [
  "End-to-end product development from concept to production",
  "Rapid prototyping and iterative design methodology",
  "Safety-critical system certification expertise",
  "Vertically integrated hardware and software teams",
  "Scalable manufacturing partnerships",
  "Post-launch support and continuous improvement",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                Engineering Tomorrow&apos;s Technology
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Innovating at the{" "}
                <span className="gradient-text">Intersection</span> of Hardware & Intelligence
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                From autonomous drones to edge AI, we engineer the connected products
                that define the next era of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-brand text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5"
                >
                  Explore Our Solutions
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <HeroIllustration />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-dark-950 relative z-10">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Six Domains, One Vision
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We bring deep expertise across the full spectrum of connected hardware,
              delivering integrated solutions that work seamlessly together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why TruwoTech */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Why TruwoTech</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Full-Stack Product Engineering,{" "}
                <span className="gradient-text">From Concept to Scale</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We don&apos;t just build components — we engineer complete products. Our vertically integrated
                team handles everything from initial concept and industrial design through firmware development,
                cloud integration, and volume manufacturing.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3 text-accent-400" />
                    </span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl glass p-8 flex items-center justify-center">
                <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="whyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b8cff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#17b363" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect x="50" y="50" width="300" height="300" rx="20" fill="url(#whyGrad)" />
                  {[100, 150, 200, 250, 300].map((y) => (
                    <line key={`h${y}`} x1="80" y1={y} x2="320" y2={y} stroke="#3b8cff" strokeWidth="0.5" opacity="0.15" />
                  ))}
                  {[100, 150, 200, 250, 300].map((x) => (
                    <line key={`v${x}`} x1={x} y1="80" x2={x} y2="320" stroke="#3b8cff" strokeWidth="0.5" opacity="0.15" />
                  ))}
                  <circle cx="150" cy="150" r="12" fill="#3b8cff" opacity="0.3" />
                  <circle cx="150" cy="150" r="5" fill="#3b8cff" />
                  <circle cx="250" cy="150" r="12" fill="#17b363" opacity="0.3" />
                  <circle cx="250" cy="150" r="5" fill="#17b363" />
                  <circle cx="200" cy="200" r="20" fill="#3b8cff" opacity="0.2" />
                  <circle cx="200" cy="200" r="10" fill="#3b8cff" opacity="0.6" />
                  <circle cx="150" cy="250" r="12" fill="#17b363" opacity="0.3" />
                  <circle cx="150" cy="250" r="5" fill="#17b363" />
                  <circle cx="250" cy="250" r="12" fill="#3b8cff" opacity="0.3" />
                  <circle cx="250" cy="250" r="5" fill="#3b8cff" />
                  <line x1="150" y1="150" x2="200" y2="200" stroke="#3b8cff" strokeWidth="1.5" opacity="0.4" />
                  <line x1="250" y1="150" x2="200" y2="200" stroke="#17b363" strokeWidth="1.5" opacity="0.4" />
                  <line x1="150" y1="250" x2="200" y2="200" stroke="#17b363" strokeWidth="1.5" opacity="0.4" />
                  <line x1="250" y1="250" x2="200" y2="200" stroke="#3b8cff" strokeWidth="1.5" opacity="0.4" />
                  <text x="200" y="120" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="system-ui">CONCEPT</text>
                  <text x="310" y="205" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="system-ui">DESIGN</text>
                  <text x="200" y="295" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="system-ui">BUILD</text>
                  <text x="90" y="205" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="system-ui">SCALE</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-brand opacity-90" />
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Whether you&apos;re launching a new product or looking for a technology partner,
                we&apos;d love to hear about your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start a Conversation
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  View Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
