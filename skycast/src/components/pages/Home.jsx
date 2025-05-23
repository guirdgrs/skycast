import Navbar from "../navbar/Navbar";
import WeatherCard from "../weather/WeatherCard";
import ForecastList from "../forecast/ForecastList";
import Loading from "../utils/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

function App (){

    // Creating the state to store the weather data
    const [weatherData, setWeatherData] = useState(null);

    // Same but for forecast
    const [forecast, setForecast] = useState([]);

    // In case of location error
    const [locationError, setLocationError] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Setting the loading to true
        setLoading(true);
        
        // Getting the current location using the JS
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                // Getting the latitude and longitude (coordinates) of the user
                const { latitude, longitude } = position.coords;

                // The key was generated from OpenWeatherMap
                const apiKey = "fad766a91179faefd351fa6b913315e6";

                // Mounting the URL withe the coordinates
                const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
                
                const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

                try {
                    // Getting the weather data
                    const [weatherRes] = await Promise.all([
                        // Actual weather
                        axios.get(weatherURL),
                        // Forecast weather
                        // axios.get(forecastURL),
                    ]);

                    // Trying another method to get the forecast
                    const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
                    params: {
                        lat: latitude,
                        lon: longitude,
                        appid: apiKey,
                        units: "metric"
                        }
                    });

                    console.log("API forecast raw:", forecastRes.data);
                    setForecast(forecastRes.data.list || []);

                    // Setting the state with the data
                    setWeatherData(weatherRes.data);
                    // setForecast(forecastRes.data.list);

                // In case of error shows an alert (WILL HAVE TO CHANGE)
                } catch (error) {
                    console.error("An error occurred:", error);
                } finally {
                    // Setting the loading to false
                    setLoading(false);
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                setLocationError(true);
            }
        );
    }, []);


    return (
        <div className="max-w-4xl mx-auto p-4 space-y-8 font-sans text-lg">

            {loading ? (
                
                <div className="flex items-center justify-center z-50">
                    <Loading />
                </div>
                
            ) : locationError ? (
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