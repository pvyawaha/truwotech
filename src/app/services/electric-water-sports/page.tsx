import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { WaterSportsIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Electric Water Sports",
  description: "Innovative electric watercraft and water sport equipment pushing the boundaries of marine electrification.",
};

export default function WaterSportsPage() {
  return (
    <ServicePageTemplate
      title="Electric Water Sports"
      subtitle="Marine Electrification"
      description="We're bringing the electric revolution to the water. From eFoils and electric surfboards to electric jet skis and marine propulsion systems, we engineer watercraft that deliver thrilling performance with zero emissions."
      icon={<WaterSportsIcon className="w-16 h-16" />}
      capabilities={[
        "Electric hydrofoil (eFoil) design and development",
        "Marine-grade electric propulsion systems",
        "Waterproof battery pack engineering (IP68)",
        "Hydrodynamic hull and foil design",
        "Marine motor controller development",
        "Wireless remote control systems",
        "Salt-water corrosion-resistant engineering",
        "Performance telemetry and rider analytics",
      ]}
      applications={[
        { title: "eFoil Boards", description: "Electric hydrofoil surfboards with silent propulsion for an unmatched riding experience above the water." },
        { title: "Electric Jet Boards", description: "High-performance electric surfboards for speed enthusiasts and water sport professionals." },
        { title: "Electric Jet Skis", description: "Zero-emission personal watercraft delivering the performance of traditional jet skis without the noise." },
        { title: "Marine Propulsion", description: "Electric outboard and inboard propulsion systems for boats, kayaks, and small vessels." },
        { title: "Underwater Scooters", description: "Personal underwater propulsion devices for diving and snorkeling adventures." },
        { title: "Rental Fleet Systems", description: "Connected fleet management for water sport rental operations with usage tracking and remote diagnostics." },
      ]}
      techStack={[
        "Brushless DC Motors",
        "IP68 Enclosures",
        "CFD Simulation",
        "Marine-grade Li-ion",
        "Bluetooth LE",
        "Corrosion-resistant Alloys",
        "Carbon Fiber Layup",
        "ESC Design",
        "Hydrofoil CAD/CAE",
        "Waterproof Connectors",
      ]}
    />
  );
}
