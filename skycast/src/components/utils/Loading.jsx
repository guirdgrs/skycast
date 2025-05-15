import { motion } from "framer-motion";
import { CloudLightning, CloudRain, Cloud, Sun } from "lucide-react";

function Loading () {

    const icons = [
        {
            id: "thuderstorm",
            icon: <CloudLightning size={48} color="#ffcc00"/>
        },
        {
            id: "cloudy-sun",
            icon: <Sun size={48} color="#f1c40f"/>
        },
        {
            id: "rainy",
            icon: <CloudRain size={48} color="#3498db"/>
        },
        {
            id: "cloudy",
            icon: <Cloud size={48} color="#95a5a6"/>
        }
    ]

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="flex justify-center items-center h-40 w-40 relative">

            {icons.map((icon, idx) => (
            
                <motion.div
                key={icon.id}
                initial={{opacity: 0}}
                animate={{opacity: [0, 1,0]}}

                transition= {{
                duration: 4, 
                repeat: Infinity,
                repeatDelay: icons.length, 
                ease: "easeInOut", 
                delay: idx
                }}

                className="absolute">

                    {icon.icon}

                </motion.div>

            ))}

            {/* Spinner */}
            <motion.div 
            animate={{rotate: 360}}
            transition={{duration: 1, repeat: Infinity, ease: "linear"}}
            className="absolute rounded-full border-4 border-dashed border-gray-300 h-20 w-20"/>
               
        </motion.div>
    )

}

export default Loading;