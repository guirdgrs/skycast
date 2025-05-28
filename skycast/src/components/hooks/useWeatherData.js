import { useState, useEffect } from "react";

const fallbackCities = {
    BR: "São Paulo",
    US: "New York",
    IN: "Delhi",
    KR: "Seoul",
    JP: "Tokyo",
    FR: "Paris",
    CN: "Beijing",
    CA: "Vancouver",
    GB: "London",
};

const apiKey = "fad766a91179faefd351fa6b913315e6";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeatherByCity = async(city) => {

        setLoading(true);
        setError(null);

        try {
            const res = await fetch (
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            if (!res.ok) throw new Error("City not found");

            const data = await res.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherByCoordinates = async(latitude, longitude) => {

        setLoading(true);
        setError(null);

        try {
            const res = await fetch (
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );

            if (!res.ok) throw new Error("Location not found");

            const data = await res.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchCountryByIP = async () => {
        try {
            const res = await fetch("http://ip-api.com/json/")
            const data = await res.json();

            return data.countryCode;
        } catch {
            return null;
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const {latitude, longitude} = pos.coords;
                fetchWeatherByCoordinates(latitude, longitude)

            },
            
            async () => {
                const countryCode = await fetchCountryByIP();
                const fallbackCity = fallbackCities[countryCode] || "New York";

                fetchWeatherByCity(fallbackCity)
            }
        );
    }, []);

    return {weatherData, setWeatherData, loading, error, fetchWeatherByCity, fetchWeatherByCoordinates};
};

export default useWeatherData;