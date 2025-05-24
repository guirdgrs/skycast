
import { AlertTriangle } from "lucide-react";

function Error ({title = "Error", message, onRetry}) {


    return (
        <div className="bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 border border-red-300 dark:border-red-600 rounded-lg p-6 max-w-md mx-auto shadow-md text-center space-y-4">
            <div className="flex flex-col items-center space-y-2">
                
                <AlertTriangle className="w-10 h-10 text-red-500 dark:text-yellow-300"/>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm">{message}</p>

        {onRetry && (

          <button
            onClick={onRetry}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors">
                Try Again
          </button>

        )}
      </div>
    </div>
    )
}

export default Error;