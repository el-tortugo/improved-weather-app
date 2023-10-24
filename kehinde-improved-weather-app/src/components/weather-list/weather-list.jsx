import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather-list.css';

const WeatherList = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios.get('https://api.weatherbit.io/v2.0/forecast/daily', {
      params: {
        key: '8db976b8bb5c459e8b3f53f4ecae2c1c',
        units: 'F',
        days: 7,
        city: 'New York,NY'
      }
    })
      .then(response => setForecast(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredForecast = forecast.filter(day => day.valid_date === searchTerm);
    setForecast(filteredForecast);
  }

  return (
    <div>
      <h1>7-Day Weather Forecast</h1>
      <Search onSearch={handleSearch} />
      <ul className="weather-list">
        {forecast.map((day, index) => (
          <li key={index}>
            <p>{new Date(day.valid_date).toLocaleDateString()}</p>
            <p>High: {day.high_temp}°F</p>
            <p>Low: {day.low_temp}°F</p>
            <p>Description: {day.weather.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;