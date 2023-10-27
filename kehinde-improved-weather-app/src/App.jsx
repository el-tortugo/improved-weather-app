import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityInput from './components/city-search/city-search'
import './App.css'
import { CityProvider } from './context/ci-context';

function App() {
  const [city, setCity] = React.useState('');

  return (
    <CityProvider value={{ city, setCity }}>
    <div>
      <CityInput onCityChange={handleCityChange} />
      {/* Render other components here */}
      {city && <h1>Weather for {city}</h1>}
      {/* Render other components here */}
    </div>
    </CityProvider>
  );
}
