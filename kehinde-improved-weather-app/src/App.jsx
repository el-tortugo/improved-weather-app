import { useState } from 'react'
import CityInput from './components/city-search/city-search'
import './App.css'

function App() {
  const [city, setCity] = useState('');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <CityInput onCityChange={handleCityChange} />
      {/* Render other components here */}
      {city && <h1>Weather for {city}</h1>}
      {/* Render other components here */}
    </div>
  );
}

export default App;