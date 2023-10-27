import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {CityConsumer} from 'ci-context';
import './common-items.css';

const weatherApiUrl = 'https://api.weatherbit.io/v2.0/current';

// Create a custom hook to fetch the weather data
function useWeatherData(city) {
    const { city } = React.useContext(CityContext);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(weatherApiUrl, {
        params: {
          city,
          temp: 'F',
          key: 'YOUR_API_KEY',
        },
      })
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [city]);

  return { weatherData, error };
}

// Create a Sunrise component
function Sunrise({ weatherData }) {
  if (error) {
    return <div className="sun-rise-container" >Error fetching weather data</div>;
  }

  if (!weatherData) {
    return <div className="sun-rise-container">Loading...</div>;
  }

  return (
    <div className="sun-rise-container">
      <h2>Sunrise Time: {weatherData.data[0].sunrise}</h2>
    </div>
  );
}

// Temperature component
function Temperature({ weatherData }) {
  if (error) {
    return <div className="temp-container" >Error fetching weather data</div>;
  }

  if (!weatherData) {
    return <div className="temp-container" >Loading...</div>;
  }

  return (
    <div className="temp-container">
      <h2>Temperature: {weatherData.data[0].temp}</h2>
    </div>
  );
}

// Sunset component
function Sunset({ weatherData }) {
  if (error) {
    return <div className="sunset-time-container" >Error fetching weather data</div>;
  }

  if (!weatherData) {
    return <div className="sunset-time-container">Loading...</div>;
  }

  return (
    <div className="sunset-time-container">
      <h2>Sunset Time: {weatherData.data[0].sunset}</h2>
    </div>
  );
}

// Export the components as named exports
export { Sunrise, Temperature, Sunset };
