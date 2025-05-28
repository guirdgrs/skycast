import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import WeatherIconRenderer from "../icons/WeatherIconRenderer";
import { hoverSmallAnimation } from "../utils/motionConfig";
import CityModal from "../modal/CityModal";
import useWeatherData from "../hooks/useWeatherData";
import Loading from "../utils/Loading";
import Error from "../utils/Error";

// WeatherCard starts by receiving the data from the parent component
function WeatherCard ({weatherData, loading, error, onCitySelect}) {

    // State for the modal
    const [showModal, setShowModal] = useState(false);

    if (!weatherData) return null;

    const {name, main, weather} = weatherData; 

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-blue-700 dark:via-blue-600 dark:to-blue-500 text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 shadow-md shadow-yellow-400 font-sans">
            <div>
                <motion.button
                onClick={() => setShowModal(true)}
                className="flex items-center bg-blue-500 gap-2 text-3xl font-semibold hover:bg-yellow-400 hover:text-blue-600 p-2 px-4 rounded-full transition-discrete transition-colors cursor-pointer"
                {...hoverSmallAnimation}>
                        <MapPin size={20} /> {name}
                </motion.button>

                <p className="text-xl capitalize">{weather[0].description}</p>
                <p className="text-4xl font-bold mt-3">{Math.round(main.temp)}°C</p>
            </div>

            <WeatherIconRenderer
            condition={weather[0].main}
            size={64}
            className="hover:text-yellow-500 hover:fill-yellow-400 transition-colors"/>

            <CityModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            cityName={name}
            onCitySelect={async (city) => {
                await onCitySelect(city);
                    setShowModal(false);
                }}
            />

        </motion.div>
    )
}

export default WeatherCard;