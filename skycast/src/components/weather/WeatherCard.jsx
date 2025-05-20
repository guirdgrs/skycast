import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import WeatherIconRenderer from "../icons/WeatherIconRenderer";
import { hoverSmallAnimation } from "../utils/motionConfig";

// WeatherCard starts by receiving the data from the parent component
function WeatherCard ({data}) {

    // Destructuring the data into variables
    const {name, weather, main} = data;
    const icon = weather[0].icon;

    const [showModal, setShowModal] = useState(false);

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="bg-blue-100 dark:bg-blue-700 dark:text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center space-y-4">
            <div>
                
                <motion.button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 text-3xl font-semibold hover:bg-yellow-400 hover:text-blue-600 p-2 px-4 rounded-full transition-discrete transition-colors cursor-pointer"
                {...hoverSmallAnimation}>
                    <MapPin size={20} /> {name}
                </motion.button>

                <p className="text-xl capitalize">{weather[0].description}</p>
                <p className="text-4xl font-bold mt-3">{Math.round(main.temp)}°C</p>
            </div>

            <WeatherIconRenderer
            condition={weather[0].main}
            size={64}
            className="text-yellow-400 fill-yellow-400"/>


            {showModal && (
                <div className="fixed inset-0 backdrop-blur-lg bg-blue-700/30 flex items-center justify-center z-50">
                    <div className="bg-yellow-500 p-6 rounded-xl max-w-md w-full space-y-4 relative shadow-lg text-blue-700">

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-3 text-blue-700 hover:text-red-500">
                            ✕
                        </button>

                    <h3 className="text-lg font-semibold">Nearby Cities</h3>

                    {/* Simulating a list of nearby cities */}
                    <ul className="text-sm space-y-1">
                        <li>City A</li>
                        <li>City B</li>
                        <li>City C</li>
                    </ul>

                    <input
                        type="text"
                        placeholder="Search for another location..."
                        className="w-full mt-4 p-2 rounded bg-blue-700 text-white placeholder-gray-300"/>
                    </div>
                </div>
)}

        </motion.div>
    )
}



export default WeatherCard;