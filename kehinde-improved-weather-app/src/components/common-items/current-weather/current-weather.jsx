import React, { useState, useEffect } from 'react';
import './current-temp.css';

function CurrentTemp() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    const API_KEY = '8db976b8bb5c459e8b3f53f4ecae2c1c';
    const url = `https://api.weatherbit.io/v2.0/current?city=New%20York,NY&key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTemp(data.data[0].temp);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='current-temp-container'>
      <h1>Current Temperature</h1>
      {temp ? <h2> {temp}°C</h2> : <h2>Loading...</h2>}
    </div>
  );
}

export default CurrentTemp;