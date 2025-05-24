import React from "react";
import weatherIconsMap from "../utils/weatherIcons.js";
import { weatherIconStyles } from "../utils/weatherIconsStyle.js";

// Function to render weather icons
// Receives the condition and optional size and className
function WeatherIconRenderer({ condition, size = 40, className = "" }) {
  const IconComponent = weatherIconsMap[condition];
  // Get the style class based on the condition
  const styleClass = weatherIconStyles[condition] || "text-gray-500";

  // If no icon is found, display a message
  if(!IconComponent) {
    return <span className="text-xs text-gray-400">No icon</span>
  }

  // Render the weather icon
  return (
    // The classname is a combination of the style class and the optional className
    <IconComponent 
    size={size} 
    className={`${styleClass} ${className}`}/>
  );
}

export default WeatherIconRenderer;
