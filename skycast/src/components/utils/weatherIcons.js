import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSnow, Zap, CloudFog, Wind } from "lucide-react";

const weatherIconsMap = {
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

export default weatherIconsMap;
