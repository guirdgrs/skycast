import Navbar from "../navbar/Navbar";
import WeatherCard from "../weather/WeatherCard";
import ForecastList from "../forecast/ForecastList";
import Loading from "../utils/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import useWeatherData from "../hooks/useWeatherData";
import Error from "../utils/Error";
import useForecastData from "../hooks/useForecastData";

function App (){

    const [selectedCoords, setSelectedCoords] = useState(null);
    const { weatherData, loading, error, loading: weatherLoading, error:weatherError, fetchWeatherByCoordinates } = useWeatherData();
    const { forecast, loading: forecastLoading, error:forecastError } = useForecastData(selectedCoords || weatherData?.coord);

if (weatherLoading || forecastLoading) {
      return <div className="flex items-center justify-center"><Loading /></div>
    }

    if (weatherError) {
      return <Error title="Unable to fetch weather" message="An error occurred while fetching the weather. Please try again later."/>
    }

    if (forecastError) {
      return <Error title="Unable to fetch forecast" message="An error occurred while fetching the forecast. Please try again later."/>
    }

    const handleCitySelect = async (city) => {
      setSelectedCoords({ lat: city.lat, lon: city.lon });
      await fetchWeatherByCoordinates(city.lat, city.lon);
    };

    return (
      <div className="max-w-4xl mx-auto p-4 space-y-8 font-sans text-lg">

        {weatherData && <WeatherCard 
        weatherData={weatherData} 
        loading={loading}
        error={error}
        onCitySelect={handleCitySelect}/>}

        {forecast.length > 0 && <ForecastList data={forecast} />}

      </div>
    )

}
export default App;