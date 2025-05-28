import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeSlideAnimation, modalAnimation } from "../utils/motionConfig"
import axios from "axios";


function CityModal({isOpen, onClose, cityName, onCitySelect, onUseCurrentLocation}) {

    const modalRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        function handleClickOutside(event) {
            if(modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        function handleKeyDown(event) {
            if(event.key === "Escape") {
                onClose();
            }
        }

        if(isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return() => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if(searchTerm.length < 3) {
                setSuggestions([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);

            try {
                const apiKey = "fad766a91179faefd351fa6b913315e6";
                const res = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
                    params: {
                        q: searchTerm,
                        limit: 5,
                        appid: apiKey
                    }
                });

                setSuggestions(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 font-sans"
                {...fadeSlideAnimation}>

                    <motion.div 
                    ref={modalRef}
                    className="bg-blue-700 p-6 rounded-xl max-w-md w-full space-y-4 relative shadow-md text-yellow-400 border-2 border-yellow-400 shadow-yellow-400"
                    {...modalAnimation}>

                        <button
                            onClick={onClose}
                            className="absolute top-2 right-3 text-yellow-400 hover:text-blue-600 hover:bg-yellow-400 p-1 px-2 rounded cursor-pointer">
                            ✕
                        </button>

                    <h3 className="text-lg font-semibold">Current City</h3>

                    <hr />

                    <p className="text-2xl font-bold text-white">{cityName}</p>

                    <input
                        type="text"
                        placeholder="Search for another location..."
                        className="w-full mt-4 p-2 rounded bg-yellow-400 text-blue-600 text-sm placeholder-blue-600"
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}/>

                        <ul className="space-y-1">
                            {suggestions.map((city, index) => (
                                <li 
                                    key={index}
                                    onClick={() => {
                                        onCitySelect(city);
                                        setSearchTerm("");
                                        onClose();
                                    }}
                                    className="cursor-pointer text-white hover:bg-yellow-400 hover:text-blue-600 rounded px-2 py-1 transition-colors">
                                    {city.name}, {city.state ? `${city.state}, ` : ""} {city.country}
                                </li>
                            ))}
                        </ul>

                        {isLoading && <p className="text-white loading">Loading...</p>}
                         
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CityModal