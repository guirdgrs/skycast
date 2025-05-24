
import { AlertTriangle } from "lucide-react";
import { hoverAnimation } from "./motionConfig";
import { motion } from "framer-motion";

function Error ({title = "Error", message, onRetry}) {


    return (
        <div className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-lg p-6 max-w-md mx-auto shadow-md text-center space-y-4 mt-20">
            <div className="flex flex-col items-center space-y-2">
                
                <AlertTriangle className="w-15 h-15 text-red-500 dark:text-yellow-300 animate-bounce"/>
                <h2 className="text-3xl font-bold animate-bounce">{title}</h2>
                <hr className="w-full" />
                <p className="text-sm mt-3">{message}</p>

        {onRetry && (

          <motion.button
            onClick={onRetry}
            className="mt-4 bg-gray-200 hover:bg-yellow-300 text-red-500 font-bold py-2 px-4 rounded transition-colors cursor-pointer"
            {...hoverAnimation}>
                Try again...
          </motion.button>

        )}
      </div>
    </div>
    )
}

export default Error;