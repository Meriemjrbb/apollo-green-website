import { Gauge, Radio, Cpu, BellRing, LineChart, PlugZap, type LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  category: "Hardware" | "Software" | "Service";
  icon: LucideIcon;
  summary: string;
  specs: { label: string; value: string }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "pulse-meter",
    name: "Pulse Meter 3P",
    category: "Hardware",
    icon: Gauge,
    summary: "Clamp-on three-phase meter. Installs in minutes without shutting the line down.",
    specs: [
      { label: "Accuracy", value: "Class 0.5S" },
      { label: "Sampling", value: "1 s interval" },
      { label: "Range", value: "5 A – 6 000 A" },
      { label: "Protocol", value: "Modbus, MQTT" },
    ],
  },
  {
    slug: "gateway-edge",
    name: "Edge Gateway",
    category: "Hardware",
    icon: Radio,
    summary: "Industrial gateway that collects up to 64 meters and keeps buffering when the network drops.",
    specs: [
      { label: "Devices", value: "Up to 64" },
      { label: "Uplink", value: "LTE, Ethernet, Wi-Fi" },
      { label: "Buffer", value: "30 days offline" },
      { label: "Rating", value: "IP65, -30 to 70 °C" },
    ],
  },
  {
    slug: "sensor-node",
    name: "Sensor Node",
    category: "Hardware",
    icon: Cpu,
    summary: "Battery sensors for temperature, vibration and compressed air, linked to energy data.",
    specs: [
      { label: "Battery", value: "5 years" },
      { label: "Radio", value: "LoRaWAN" },
      { label: "Range", value: "Up to 2 km" },
      { label: "Metrics", value: "Temp, vibration, flow" },
    ],
  },
  {
    slug: "insight-platform",
    name: "Insight Platform",
    category: "Software",
    icon: LineChart,
    summary: "Dashboards, cost allocation per machine or tenant, and monthly reports that finance can use.",
    specs: [
      { label: "Resolution", value: "1 s to 1 month" },
      { label: "Reports", value: "PDF, CSV, API" },
      { label: "Access", value: "Role-based, SSO" },
      { label: "Hosting", value: "EU cloud or on-prem" },
    ],
  },
  {
    slug: "peak-guard",
    name: "Peak Guard",
    category: "Software",
    icon: BellRing,
    summary: "Predicts demand peaks and alerts or sheds non-critical loads before a penalty tier is hit.",
    specs: [
      { label: "Forecast", value: "15 min ahead" },
      { label: "Alerts", value: "SMS, email, Teams" },
      { label: "Control", value: "Relay, BACnet, OPC UA" },
      { label: "Typical gain", value: "6 – 12 % on demand fees" },
    ],
  },
  {
    slug: "energy-audit",
    name: "Energy Audit & Rollout",
    category: "Service",
    icon: PlugZap,
    summary: "On-site survey, installation, commissioning and a 90-day optimisation plan.",
    specs: [
      { label: "Survey", value: "Within 2 weeks" },
      { label: "Install", value: "No production stop" },
      { label: "Support", value: "24/7 for critical sites" },
      { label: "Standards", value: "ISO 50001 aligned" },
    ],
  },
];

export const FEATURES = [
  { title: "Measure at the machine", text: "Sub-metering down to a single motor, press or chiller, so waste has an address." },
  { title: "Catch peaks before the bill does", text: "Forecasts warn you 15 minutes ahead and can shed load automatically." },
  { title: "Works with what you have", text: "Modbus, BACnet, OPC UA and MQTT. No rip-and-replace of existing PLCs." },
  { title: "Reports finance trusts", text: "Cost per product, per shift or per tenant, exported straight to your ERP." },
];

export const TEAM = [
  { name: "Alexandra Xanthopoulou", role: "Chief Operating Officer", bio: "Runs delivery and customer rollout across 12 countries." },
  { name: "Jonas Keller", role: "Head of Hardware", bio: "Ten years designing industrial metering electronics." },
  { name: "Mira Haddad", role: "Lead Software Engineer", bio: "Builds the data pipeline behind every dashboard." },
  { name: "Tomás Rivera", role: "Customer Success", bio: "Turns first-week data into the first savings." },
];

export const VALUES = [
  { title: "Measure first", text: "No savings claim without a baseline. We prove results with your own meter data." },
  { title: "Respect the plant floor", text: "Installations are planned around your shifts, never the other way round." },
  { title: "Open by default", text: "Standard protocols and a documented API. Your data stays yours." },
];

export const STATS = [
  { to: 12, suffix: "", label: "countries served" },
  { to: 64, suffix: "", label: "meters per gateway" },
  { to: 15, suffix: " min", label: "peak forecast horizon" },
  { to: 30, suffix: " days", label: "offline data buffer" },
] as const;

export const PROTOCOLS = ["Modbus", "MQTT", "BACnet", "OPC UA", "LoRaWAN", "ISO 50001", "REST API", "SSO"] as const;
