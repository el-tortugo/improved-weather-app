import React, { useState } from 'react';
import './city-search.css';
import { CityContext } from '../common-items/ci-context';

function CityInput({onCityChange}) {
  const [city, setCity] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (city.trim() !== '') {
        props.onCityChange(city.trim());
        setShowInput(false);
      }
    }
  };
  

  return (
    <div className={`city-search ${showInput ? 'show' : 'hide'}`}>
      <div className="prompt">
        <p>Please enter a city:</p>
      </div>
      <label>
        City:
        <input type="text" value={city} onChange={handleCityChange} onKeyPress={handleKeyPress} />
      </label>
      <div className="prompt-details">
        <p>Press Enter to submit. You must enter a valid location (eg. New York, NY) to continue.</p>
      </div>
    </div>
  );
}

export default CityInput;