import { motion } from "framer-motion";

function Loading () {

    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="flex flex-col items-center justify-center min-h-[400px] text-blue-500">

            <motion.div 
            animate={{rotate: 360}}
            transition={{duration: 1, repeat: Infinity, ease: "linear"}}
            className="-16 h-16 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mb-4">

                <motion.p
                animate={{scale: [1, 1.05, 1]}}
                transition={{duration: 1, repeat: Infinity, ease: "linear"}}>
                    Loading...
                </motion.p>

            </motion.div>
            
            
        </motion.div>
    )

}

export default Loading;