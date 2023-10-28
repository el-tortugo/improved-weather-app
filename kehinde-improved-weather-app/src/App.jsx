import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CityInput from './components/city-search/city-search';
import './App.css';
import { CityProvider } from './context/ci-context';
import PrimaryWeatherNav from "./primary-weather-nav";

function App() {
  const [city, setCity] = useState('');

  return (
    <Router>
      <CityProvider value={{ city, setCity }}>
        <div>
          <CityInput onCityChange={handleCityChange} />
          <PrimaryWeatherNav />
          {/* Render other components here */}
          {city && <h1>Weather for {city}</h1>}
          {/* Render other components here */}
        </div>
      </CityProvider>
    </Router>
  );
}
