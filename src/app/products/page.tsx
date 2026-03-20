import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore TruwoTech's product portfolio — cutting-edge solutions across drones, EVs, water sports, embedded systems, IoT, and edge AI.",
};

const products = [
  {
    category: "Drones & UAV",
    items: [
      {
        name: "TruwoX1 Industrial Drone",
        tagline: "Multi-rotor platform for commercial inspections",
        status: "Coming Soon",
        features: ["45-min flight time", "Dual payload bay", "RTK positioning", "AI-powered inspection"],
      },
      {
        name: "TruwoSurveyor",
        tagline: "Fixed-wing mapping and survey platform",
        status: "Coming Soon",
        features: ["2-hour endurance", "Multispectral imaging", "Autonomous mission planning", "Cloud processing"],
      },
    ],
  },
  {
    category: "Electric Vehicles",
    items: [
      {
        name: "TruwoEV Controller",
        tagline: "Universal EV motor controller platform",
        status: "In Development",
        features: ["Dual motor support", "Regenerative braking", "CAN bus integration", "Configurable profiles"],
      },
      {
        name: "TruwoBMS",
        tagline: "Modular battery management system",
        status: "In Development",
        features: ["4-16S configuration", "Active balancing", "Cloud monitoring", "Safety certified"],
      },
    ],
  },
  {
    category: "Electric Water Sports",
    items: [
      {
        name: "TruwoFoil",
        tagline: "Electric hydrofoil surfboard",
        status: "Coming Soon",
        features: ["35 km/h top speed", "90-min ride time", "Wireless remote", "Carbon fiber construction"],
      },
    ],
  },
  {
    category: "IoT & Edge AI",
    items: [
      {
        name: "TruwoEdge Gateway",
        tagline: "Industrial IoT gateway with edge AI",
        status: "In Development",
        features: ["Multi-protocol support", "On-device inference", "OTA updates", "Industrial-grade enclosure"],
      },
      {
        name: "TruwoSense",
        tagline: "Modular IoT sensor platform",
        status: "Coming Soon",
        features: ["10+ sensor types", "5-year battery life", "LoRaWAN / BLE", "Cloud dashboard"],
      },
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors = status === "Coming Soon"
    ? "bg-brand-500/10 text-brand-400 border-brand-500/20"
    : "bg-accent-500/10 text-accent-400 border-accent-500/20";

  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${colors}`}>
      {status}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-32 sm:py-40">
          <div className="max-w-3xl">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Products Built for the{" "}
              <span className="gradient-text">Next Generation</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From concept to production, we&apos;re developing a portfolio of innovative products
              across our core technology domains. Stay tuned for launches.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Products */}
      <section className="bg-dark-950 section-padding">
        <div className="container-max">
          {products.map((category) => (
            <div key={category.category} className="mb-20 last:mb-0">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full gradient-brand" />
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((product) => (
                  <div
                    key={product.name}
                    className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 transition-all"
                  >
                    {/* Product visual placeholder */}
                    <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/5 border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 200 120" fill="none" className="w-32 h-20 text-brand-400/30">
                        <rect x="40" y="20" width="120" height="80" rx="8" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="100" cy="60" r="20" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M92 60l6 6 10-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{product.tagline}</p>
                      </div>
                      <StatusBadge status={product.status} />
                    </div>

                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notify CTA */}
      <section className="gradient-dark section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Be the First to Know
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Our products are in active development. Get notified when they launch
              or reach out to discuss early access and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-brand text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5"
              >
                Request Early Access <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
