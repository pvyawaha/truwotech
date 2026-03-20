import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { AIEdgeIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "AI at the Edge",
  description: "On-device machine learning and neural inference for real-time decision making without cloud dependency.",
};

export default function AIEdgePage() {
  return (
    <ServicePageTemplate
      title="AI at the Edge"
      subtitle="Intelligent Devices"
      description="We bring machine learning out of the data center and into the device. Our edge AI solutions run sophisticated neural networks on resource-constrained hardware, enabling real-time perception, decision-making, and automation — with zero latency and full data privacy."
      icon={<AIEdgeIcon className="w-16 h-16" />}
      capabilities={[
        "Neural network model design, training, and optimization",
        "Model quantization and pruning for edge deployment",
        "On-device inference on MCUs, GPUs, and NPUs",
        "Computer vision — object detection, segmentation, tracking",
        "Audio processing — keyword spotting, anomaly detection",
        "Sensor fusion and predictive analytics at the edge",
        "MLOps pipeline for continuous model improvement",
        "Hardware selection and benchmarking for AI workloads",
      ]}
      applications={[
        { title: "Visual Inspection", description: "Automated quality control and defect detection on production lines using on-device computer vision." },
        { title: "Autonomous Navigation", description: "Real-time perception and path planning for drones, robots, and autonomous vehicles." },
        { title: "Predictive Maintenance", description: "Vibration and acoustic analysis on-device to predict equipment failures before they happen." },
        { title: "Smart Cameras", description: "Intelligent video analytics for people counting, behavior analysis, and security applications." },
        { title: "Voice Interfaces", description: "On-device speech recognition and natural language processing for offline-capable voice control." },
        { title: "Anomaly Detection", description: "Real-time anomaly detection in sensor data for industrial safety and quality assurance." },
      ]}
      techStack={[
        "TensorFlow Lite",
        "ONNX Runtime",
        "NVIDIA Jetson",
        "Coral Edge TPU",
        "STM32 AI",
        "PyTorch Mobile",
        "OpenCV",
        "TensorRT",
        "Arm NN",
        "CMSIS-NN",
      ]}
    />
  );
}
