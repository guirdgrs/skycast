import { AnimatePresence, hover, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hoverAnimation, entryAnimation } from "../utils/motionConfig";

import  {
    Sun,
    Cloud,
    CloudRain,
    CloudSnow,
    Zap,
    Wind,
    Droplet,
    CloudDrizzle,
    CloudFog,
    CloudSun,
    CloudMoon
} from "lucide-react";

function ForecastList ({data}) {

    const daily = [];
    const dateSeen = new Set();

    // Looping through the data to get the daily forecast
    for (let item of data) {
        const date = new Date(item.dt * 1000).toDateString();
        if(!dateSeen.has(date)) {
            daily.push(item);
            dateSeen.add(date);
        }
    }

    // Mapping the weather icons
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
        Tornado: Wind
    }

    return (
        <AnimatePresence>
        <motion.div
        {...entryAnimation}
        className="space-y-2">

            <h3 className="text-lg font-semibold text-center">Upcoming Forecast</h3>

            <hr className="mt-4"/>

            <div className="w-full overflow-x-auto hide-scrollbar">
                <div className="flex justify-center gap-4 pb-2 mt-6 w-max mx-auto">
                    {daily.map((item, idx) => {
                        // Destructuring the data
                        const weatherMain = item.weather[0].main;
                        // Mapping the weather icons
                        const WeatherIcon = weatherIconsMap[weatherMain] || Sun;
                        // Formatting the date * 1000 is to convert from seconds to milliseconds
                        const date = new Date(item.dt * 1000);
                        // Receiving the weekday and storing it as long
                        const weekday = date.toLocaleDateString("en-US", {
                            weekday: "long",
                    });

                    // In case we need the day of the month
                    // const dayOfMonth = date.getDate();
                    
                {/* Adding a link to each day */}
                return (

                    <div 
                    key={idx}
                    className="flex flex-col items-center select-none">

                        {/* Weekday */}
                        <p className="mb-1 text-bold font-medium text-black">{weekday}</p>

                        <Link
                        to={`/forecast/${item.dt}`}
                        key={idx}
                        className="group min-w-[120px] dark:bg-blue-700 rounded-xl p-3 shadow-yellow-600 shadow-md cursor-pointer
                        hover:bg-yellow-500 hover:shadow-blue-600
                        hover:border-2 hover:border-blue-600 
                        transition-discrete transition-colors">

                            <motion.div
                            {...hoverAnimation}>

                                {/* Day of the month */}

                               {/* <p className="text-center text-white">
                                    Day {dayOfMonth}
                                </p>
                                
                                <hr className="mt-2 rounded-2xl"/> */}

                                <WeatherIcon className="w-10 h-10 mx-auto text-yellow-400 group-hover:text-blue-600" />

                                <p className="text-center text-white text-sm mt-2 group-hover:text-blue-600">
                                    {Math.round(item.main.temp)}°C
                                </p>
                            </motion.div>
                        </Link>
                </div>
                )
            })}
            </div>
        </div>
        </motion.div>
        </AnimatePresence>
    )

}

export default ForecastList;