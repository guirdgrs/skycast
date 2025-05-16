import { AnimatePresence, hover, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hoverAnimation } from "../utils/motionConfig";

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

    return (
        <AnimatePresence>
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="space-y-2">

            <h3 className="text-lg font-semibold">Upcoming Forecast</h3>

            <motion.div
            className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
                {daily.map((item, idx) => {
                    // Formatting the date * 1000 is to convert from seconds to milliseconds
                    console.log("Forecast item: ", item)
                    const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                });
                
                {/* Adding a link to each day */}
                return (
                    <Link
                    to={`/forecast/${item.dt}`}
                    key={idx}
                    className="min-w-[120px] bg-white dark:bg-blue-700 rounded-xl p-3 shadow-yellow-400 shadow-md transition-colors cursor-pointer">

                        <motion.div
                        {...hoverAnimation}>
                            <img 
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                            alt="weather icon" 
                            className="w-10 h-10 mx-auto"/>

                            <p className="text-center text-white text-bold">
                                {Math.round(item.main.temp)}°C
                            </p>
                        </motion.div>
                    </Link>
                )
            })}

            </motion.div>

        </motion.div>
        </AnimatePresence>
    )

}

export default ForecastList;