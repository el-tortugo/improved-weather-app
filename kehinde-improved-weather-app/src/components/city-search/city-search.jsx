import React from 'react';
import 'city-search.css';


function CityInput(props) {
  const handleCityChange = (event) => {
    props.onCityChange(event.target.value);
  };

  return (
    <div>
      <label>
        City:
        <input type="text" value={props.city} onChange={handleCityChange} />
      </label>
    </div>
  );
}

export default CityInput;