import { AnimatePresence, motion } from "framer-motion";
import { CloudLightning, CloudRain, Cloud, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function Loading () {

    const icons = [
        {
            id: "thuderstorm",
            icon: <CloudLightning size={38} color="#ffcc00"/>
        },
        {
            id: "cloudy-sun",
            icon: <Sun size={38} color="#f1c40f"/>
        },
        {
            id: "rainy",
            icon: <CloudRain size={38} color="#3498db"/>
        },
        {
            id: "cloudy",
            icon: <Cloud size={38} color="#95a5a6"/>
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [dotCount, setDotCount] = useState(1);
    const [isBlue, setIsBlue] = useState(false);

    // Changing the icon in every 1.2 seconds
    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 1200);
        
            return () => clearInterval(interval);
        }, []);

    // Changing the color of and thethe text and the dots in every 0.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prevDotCount) => (prevDotCount % 3) + 1);
            setIsBlue((prevIsBlue) => !prevIsBlue);
        }, 500);
        
            return () => clearInterval(interval);
        }, []);

        const dots = '.'.repeat(dotCount);
        const textColor = isBlue ? "text-blue-500" : "text-yellow-500";


    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="flex justify-center items-center h-40 w-40 relative">

            {/* Spinner */}
            <motion.div
            animate={{rotate: 360}}
            transition={{duration: 2, repeat: Infinity, ease: "linear"}}
            className="absolute rounded-full border-4 border-dashed border-blue-500 h-20 w-20"/>

            {/* Animated icon */}

            <AnimatePresence mode="wait">

                <motion.div
                key={icons[currentIndex].id}
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity: 1, scale:1.2}}
                exit={{opacity: 0, scale:0.5}}
                transition={{duration: 0.4, ease: "easeOut"}}
                className="absolute">

                    {icons[currentIndex].icon}

                </motion.div>
            </AnimatePresence>

            <div className={`mt-40 text-lg font-bold transition-colors duration-300 ${textColor}`}>
                Loading{dots}
            </div>

        </motion.div>
    )

}

export default Loading;