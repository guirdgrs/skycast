import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSnow, Zap, CloudFog, Wind } from "lucide-react";

export const weatherIconsMap = {
  Clear: Sun,
  Clouds: Cloud,
  Rain: CloudRain,
  Drizzle: CloudDrizzle,
  Snow: CloudSnow,
  Thunderstorm: Zap,
  Mist: CloudFog,
  Smoke: CloudFog,
  Haze: CloudFog,
  Dust: CloudFog,
  Fog: CloudFog,
  Sand: CloudFog,
  Ash: CloudFog,
  Squall: Wind,
  Tornado: Wind,
};

export const weatherIconStyles = {
  Clear: "text-yellow-400",
  Clouds: "text-gray-300",
  Rain: "text-blue-500",
  Drizzle: "text-cyan-400",
  Snow: "text-white",
  Thunderstorm: "text-purple-600",
  Mist: "text-gray-400",
  Smoke: "text-gray-500",
  Haze: "text-gray-400",
  Dust: "text-yellow-200",
  Fog: "text-gray-400",
  Sand: "text-yellow-300",
  Ash: "text-gray-500",
  Squall: "text-blue-300",
  Tornado: "text-red-500",
};
