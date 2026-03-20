import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { EVIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Electric Vehicle Solutions",
  description: "End-to-end EV product development from powertrain design and battery management to complete vehicle integration.",
};

export default function EVPage() {
  return (
    <ServicePageTemplate
      title="Electric Vehicle Solutions"
      subtitle="Electric Mobility"
      description="From two-wheelers to specialty vehicles, we deliver complete EV product engineering — powertrain architecture, battery management systems, motor controllers, and vehicle integration, all designed for performance, safety, and manufacturability."
      icon={<EVIcon className="w-16 h-16" />}
      capabilities={[
        "Powertrain architecture and motor controller design",
        "Battery Management Systems (BMS) with cell balancing",
        "High-voltage system design and safety engineering",
        "Regenerative braking and energy recovery systems",
        "Vehicle Control Unit (VCU) development",
        "Charging system design (AC/DC, fast charging)",
        "Thermal management systems",
        "Vehicle-to-cloud connectivity and fleet telemetry",
      ]}
      applications={[
        { title: "Electric Two-Wheelers", description: "Scooters, motorcycles, and micro-mobility solutions with optimized range and charging infrastructure." },
        { title: "Electric Three-Wheelers", description: "Last-mile delivery vehicles and passenger carriers designed for urban and semi-urban environments." },
        { title: "Specialty EVs", description: "Golf carts, warehouse vehicles, campus shuttles, and other purpose-built electric platforms." },
        { title: "EV Conversions", description: "Converting existing ICE vehicles to electric power with minimal chassis modification." },
        { title: "Charging Infrastructure", description: "Smart charging stations with load balancing, payment integration, and fleet management." },
        { title: "Fleet Management", description: "Connected vehicle platforms with real-time diagnostics, predictive maintenance, and route optimization." },
      ]}
      techStack={[
        "CAN Bus",
        "ISO 26262",
        "AUTOSAR",
        "Arm Cortex-M/R",
        "SiC/GaN Inverters",
        "Li-ion / LFP",
        "MATLAB/Simulink",
        "CCS / CHAdeMO",
        "OCPP",
        "V2X Communication",
      ]}
    />
  );
}
