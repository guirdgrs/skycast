import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeSlideAnimation, modalAnimation } from "../utils/motionConfig"


function CityModal({isOpen, onClose, cityName}) {

    const modalRef = useRef();

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
                        className="w-full mt-4 p-2 rounded bg-yellow-400 text-blue-600 text-sm placeholder-blue-600"/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CityModal