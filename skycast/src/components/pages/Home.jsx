import Navbar from "../navbar/Navbar";
import WeatherCard from "../weather/WeatherCard";
import ForecastList from "../forecast/ForecastList";
import Loading from "../utils/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import useWeatherData from "../hooks/useWeatherData";

function App (){

    // Receiving the data from the hook
    const {weatherData, loading, error} = useWeatherData();

    // Same but for forecast
    const [forecast, setForecast] = useState([]);

    //Forecast is fetched only when weatherData is available
    useEffect(() => {
    async function fetchForecast() {
      if (!weatherData) return;

      const { coord } = weatherData;
      const apiKey = "fad766a91179faefd351fa6b913315e6";

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
      } catch (error) {
        console.error("An error occurred while fetching forecast:", error);
      }
    }

    fetchForecast();
  }, [weatherData]);

    if (loading) return <div className="flex items-center justify-center"><Loading /></div>
    if (error) return <p>An error has occurred</p>


    return (
        <div className="max-w-4xl mx-auto p-4 space-y-8 font-sans text-lg">

            {loading ? (
                
                <div className="flex items-center justify-center z-50">
                    <Loading />
                </div>
                
            ) : error ? (
                <p className="text-red-500 text-center">
                    Unable to access your location. Please allow location access.
                </p>
            ) : (
                <>
                    {weatherData && <WeatherCard data={weatherData} />}
                    {forecast.length > 0 && <ForecastList data={forecast} />}
                </>
            )}

        </div>
    )

}
export default App;