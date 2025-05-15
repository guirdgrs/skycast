import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ForecastList ({data}) {

    // Filter the data to get the daily forecast
    const daily = [];
    const dateSeen = new Set();

    for (let item of data) {
        const date = new Date(item.dt * 1000).toDateString();
        if(!dateSeen.has(date)) {
            daily.push(item);
            dateSeen.add(date);
        }
    }

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="space-y-2">

            <h3 className="text-lg font-semibold">Upcoming Forecast</h3>

            <div
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
                    className="min-w-[120px] bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md hover:scale-105 transition">

                        <img 
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                        alt="" 
                        className="w-10 h-10 mx-auto"/>

                        <p className="text-center text-sm">
                            {Math.round(item.main.temp)}°C
                        </p>
                    </Link>
                )
            })}

            </div>

        </motion.div>
    )

}

export default ForecastList;