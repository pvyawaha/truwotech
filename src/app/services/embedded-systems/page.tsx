import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { EmbeddedIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Embedded Systems",
  description: "High-reliability embedded hardware and firmware for safety-critical and performance-intensive applications.",
};

export default function EmbeddedPage() {
  return (
    <ServicePageTemplate
      title="Embedded Systems"
      subtitle="Hardware Intelligence"
      description="We design and develop custom embedded platforms — from high-performance SoC-based systems to ultra-low-power microcontroller solutions. Our embedded engineering covers the full stack: PCB design, firmware development, RTOS integration, and production-ready manufacturing."
      icon={<EmbeddedIcon className="w-16 h-16" />}
      capabilities={[
        "Custom PCB design — schematic capture, layout, and DFM",
        "Microcontroller and SoC-based system design",
        "Real-time firmware development (bare metal and RTOS)",
        "Power supply design and ultra-low-power optimization",
        "Signal integrity and EMC compliance engineering",
        "Hardware-software co-design and co-verification",
        "Production test fixture and jig development",
        "Lifecycle management and component obsolescence planning",
      ]}
      applications={[
        { title: "Motor Controllers", description: "High-performance motor drive electronics for drones, EVs, and industrial automation with FOC and sensorless control." },
        { title: "Sensor Modules", description: "Custom sensor interface boards for environmental monitoring, industrial measurement, and wearable devices." },
        { title: "Safety-Critical Systems", description: "SIL/ASIL compliant designs for automotive, aerospace, and medical device applications." },
        { title: "Power Electronics", description: "DC-DC converters, inverters, chargers, and power management ICs for high-efficiency energy systems." },
        { title: "Communication Gateways", description: "Protocol bridges and gateway devices for industrial connectivity — Modbus, CAN, Ethernet, and wireless." },
        { title: "Wearable Technology", description: "Ultra-compact, low-power designs for health monitoring, activity tracking, and AR/VR peripherals." },
      ]}
      techStack={[
        "STM32 / ESP32 / nRF",
        "Altium Designer",
        "FreeRTOS / Zephyr",
        "JTAG / SWD",
        "C / C++ / Rust",
        "SPI / I2C / UART",
        "CAN / LIN",
        "EMC Testing",
        "FPGA (Xilinx/Intel)",
        "Arm Cortex-M/A",
      ]}
    />
  );
}
