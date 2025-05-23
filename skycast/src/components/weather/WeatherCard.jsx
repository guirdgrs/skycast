import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import WeatherIconRenderer from "../icons/WeatherIconRenderer";
import { fadeSlideAnimation, hoverSmallAnimation, modalAnimation } from "../utils/motionConfig";

// WeatherCard starts by receiving the data from the parent component
function WeatherCard ({data}) {

    // Destructuring the data into variables
    const {name, weather, main} = data;

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if(modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        }

        function handleKeyDown(event) {
            if(event.key === "Escape") {
                setShowModal(false);
            }
        }

        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        }
    })

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="bg-blue-100 dark:bg-blue-700 dark:text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 shadow-md shadow-yellow-400">
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
            className="text-yellow-400 fill-yellow-400"/>

            <AnimatePresence>
            {showModal && (
                <motion.div 
                className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50"
                {...fadeSlideAnimation}>
                    <motion.div 
                    ref={modalRef}
                    className="bg-blue-700 p-6 rounded-xl max-w-md w-full space-y-4 relative shadow-md text-yellow-400 border-2 border-yellow-400 shadow-yellow-400"
                    {...modalAnimation}>

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-3 text-yellow-400 hover:text-blue-600 hover:bg-yellow-400 p-1 px-2 rounded cursor-pointer">
                            ✕
                        </button>

                    <h3 className="text-lg font-semibold">Current City</h3>

                    <p className="text-xl font-bold">{name}</p>

                    <hr />

                    <input
                        type="text"
                        placeholder="Search for another location..."
                        className="w-full mt-4 p-2 rounded bg-yellow-400 text-blue-600 placeholder-blue-600"/>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    )
}



export default WeatherCard;