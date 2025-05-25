import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../utils/Error";

function useForecastData(weatherData){
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    async function fetchForecast() {
      if (!weatherData) return;

      const { coord } = weatherData;
      const apiKey = "fad766a91179faefd351fa6b913315e6";

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            lat: coord.lat,
            lon: coord.lon,
            appid: apiKey,
            units: "metric"
          }
        });

        console.log("API forecast raw:", res.data);
        setForecast(res.data.list || []);
      } catch(error) {
        console.log("Error fetching forecast:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchForecast();
  }, [weatherData]);

  return {forecast, loading, error};

}

export default useForecastData;