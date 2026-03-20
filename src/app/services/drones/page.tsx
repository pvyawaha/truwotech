import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { DroneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Drones & UAV Solutions",
  description: "Custom drone and UAV platforms for commercial, industrial, and defence applications with advanced autonomous flight capabilities.",
};

export default function DronesPage() {
  return (
    <ServicePageTemplate
      title="Drones & UAV Solutions"
      subtitle="Aerial Innovation"
      description="We design, develop, and manufacture custom drone platforms for applications ranging from precision agriculture to industrial inspection and beyond. Our UAV systems combine robust airframes with intelligent flight controllers and advanced sensor payloads."
      icon={<DroneIcon className="w-16 h-16" />}
      capabilities={[
        "Custom airframe design and manufacturing (fixed-wing, multirotor, VTOL)",
        "Flight controller development with autonomous navigation",
        "Sensor integration — LiDAR, thermal, multispectral, and RGB",
        "Real-time telemetry and ground control systems",
        "Swarm coordination and multi-vehicle operations",
        "Regulatory compliance and certification support",
        "Battery management and power optimization",
        "Payload design and integration",
      ]}
      applications={[
        { title: "Precision Agriculture", description: "Crop monitoring, spraying, and field mapping with multispectral sensors for data-driven farming." },
        { title: "Industrial Inspection", description: "Automated inspection of infrastructure, pipelines, power lines, and wind turbines with AI-powered defect detection." },
        { title: "Mapping & Surveying", description: "High-resolution aerial mapping and 3D reconstruction for construction, mining, and land management." },
        { title: "Logistics & Delivery", description: "Last-mile delivery solutions and intra-facility transport for warehousing and distribution." },
        { title: "Search & Rescue", description: "Thermal-equipped UAVs for emergency response, disaster assessment, and missing person searches." },
        { title: "Security & Surveillance", description: "Persistent aerial monitoring for perimeter security, event coverage, and situational awareness." },
      ]}
      techStack={[
        "PX4 / ArduPilot",
        "ROS 2",
        "STM32",
        "NVIDIA Jetson",
        "Computer Vision",
        "SLAM",
        "MAVLink",
        "Carbon Fiber Composites",
        "LiDAR Processing",
        "GNSS/RTK",
      ]}
    />
  );
}
