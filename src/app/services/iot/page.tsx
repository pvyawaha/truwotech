import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { IoTIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "IoT Solutions",
  description: "Connected device ecosystems with secure cloud integration, real-time monitoring, and intelligent data pipelines.",
};

export default function IoTPage() {
  return (
    <ServicePageTemplate
      title="IoT Solutions"
      subtitle="Connected Intelligence"
      description="We build complete IoT ecosystems — from edge devices and gateways to cloud platforms and dashboards. Our solutions connect the physical world to actionable data, enabling real-time monitoring, predictive analytics, and remote control across industries."
      icon={<IoTIcon className="w-16 h-16" />}
      capabilities={[
        "IoT device hardware and firmware development",
        "Gateway design with edge preprocessing",
        "Cloud platform integration (AWS IoT, Azure IoT Hub)",
        "Real-time data ingestion and processing pipelines",
        "Custom dashboard and visualization development",
        "Device provisioning, OTA updates, and lifecycle management",
        "End-to-end security — device attestation, TLS, and encryption",
        "Low-power wide-area networking (LoRa, NB-IoT, LTE-M)",
      ]}
      applications={[
        { title: "Smart Agriculture", description: "Soil moisture, weather, and crop health monitoring with automated irrigation and precision farming alerts." },
        { title: "Industrial Monitoring", description: "Machine health, vibration, and environmental monitoring for predictive maintenance in factories and plants." },
        { title: "Smart Buildings", description: "Occupancy, HVAC, lighting, and energy management systems for commercial and residential buildings." },
        { title: "Asset Tracking", description: "GPS and indoor positioning for fleet management, supply chain visibility, and high-value asset monitoring." },
        { title: "Environmental Monitoring", description: "Air quality, water quality, and noise level sensing for cities, campuses, and industrial sites." },
        { title: "Energy Management", description: "Smart metering, grid monitoring, and demand-response systems for utilities and microgrids." },
      ]}
      techStack={[
        "AWS IoT / Azure IoT",
        "MQTT / CoAP",
        "LoRaWAN",
        "NB-IoT / LTE-M",
        "Bluetooth 5 / BLE Mesh",
        "Node-RED",
        "InfluxDB / TimescaleDB",
        "Grafana",
        "TLS 1.3 / X.509",
        "Terraform / Pulumi",
      ]}
    />
  );
}
