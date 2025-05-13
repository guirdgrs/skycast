import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App (){

    // Creating the state to store the weather data
    const [weatherData, setWeatherData] = useState(null);

    // Same but for forecast
    const [forecast, setForecast] = useState([]);

    // In case of location error
    const [locationError, setLocationError] = useState(false);

    useEffect(() => {
        // Getting the current location using the JS
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                // Getting the latitude and longitude (coordinates) of the user
                const { latitude, longitude } = position.coords;

                // The key was generated from OpenWeatherMap
                const apiKey = "fad766a91179faefd351fa6b913315e6";

                // Mounting the URL withe the coordinates
                const wheatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                
                const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

                try {
                    // Getting the weather data
                    const [weatherRes, forecastRes] = await Promise.all([
                        // Actual weather
                        axios.get(wheatherURL),
                        // Forecast weather
                        axios.get(forecastURL),
                    ]);

                    // Setting the state with the data
                    setWeatherData(weatherRes.data);
                    setForecast(forecastRes.data.list);

                // In case of error shows an alert (WILL HAVE TO CHANGE)
                } catch (error) {
                    console.error("An error occurred:", error);
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                setLocationError(true);
            }
        );
    }, []);

    return (
        <div>
            <Navbar></Navbar>
        </div>
    )

}
export default App;