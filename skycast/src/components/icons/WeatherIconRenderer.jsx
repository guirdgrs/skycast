import React from "react";
import weatherIconsMap from "../utils/weatherIcons.js";

// Function to render weather icons
// Receives the condition and optional size and className
function WeatherIconRenderer({ condition, size = 40, className = "" }) {
  const IconComponent = weatherIconsMap[condition];

  // Render the weather icon
  return IconComponent ? (
    // React.createElement is used to create an instance of the weather icon
    React.createElement(IconComponent, {
      size,
      className,
    })
  ) : (
    // If no icon is found, display a message
    <span className="text-xs text-gray-400">No icon</span>
  );
}

export default WeatherIconRenderer;
