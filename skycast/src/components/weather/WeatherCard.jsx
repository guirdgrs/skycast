import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// WeatherCard starts by receiving the data from the parent component
function WeatherCard ({data}) {

    // Destructuring the data into variables
    const {name, weather, main} = data;
    const icon = weather[0].icon;

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        classname="bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-white p-6 rounded-2xl shadow-md flex items-center justify between">
            <div>
                
                <h2
                className="text-2xl font-bold flex items-center gap-2">
                    <MapPin size={20} /> {name}
                </h2>

                <p className="text-xl">{weather[0].description}</p>
                <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
            </div>

            <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={weather[0].description} 
            className="w-20 h-40"/>
        </motion.div>
    )
}



export default WeatherCard;