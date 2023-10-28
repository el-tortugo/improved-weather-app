import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CityInput from './components/city-search/city-search';
import PrimaryWeatherNav from './components/primary-navigation/primary-weather-nav';
import { CityProvider, CityContext } from './common-items/ci-context';

function App() {
  const { city } = useContext(CityContext);

  return (
    <Router>
      <CityProvider> {/* Wrap your components with CityProvider */}
        <div>
          <CityInput />
          <PrimaryWeatherNav />
          {/* Render other components here */}
          {city && <h1>Weather for {city}</h1>}
          {/* Render other components here */}
        </div>
      </CityProvider>
    </Router>
  );
}

export default App;
