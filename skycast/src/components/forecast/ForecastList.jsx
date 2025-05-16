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

            <h3 className="text-lg font-semibold text-center">Upcoming Forecast</h3>

            <hr className="mt-4"/>

            <div
            className="flex overflow-x-auto gap-4 pb-2 mt-6">
                {daily.map((item, idx) => {
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
                    className="flex flex-col items-center min-w-[120px] select-none">

                        {/* Weekday */}
                        <p className="mb-1 text-bold font-medium text-black">{weekday}</p>

                        <Link
                        to={`/forecast/${item.dt}`}
                        key={idx}
                        className="min-w-[120px] dark:bg-blue-700 rounded-xl p-3 shadow-yellow-600 shadow-md cursor-pointer
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
                                
                                <img 
                                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                                alt="weather icon" 
                                className="w-10 h-10 mx-auto"/>

                                <p className="text-center text-white text-sm">
                                    {Math.round(item.main.temp)}°C
                                </p>
                            </motion.div>
                        </Link>
                </div>
                )
            })}
            </div>
        </motion.div>
        </AnimatePresence>
    )

}

export default ForecastList;