// CityContext.js
import React, { createContext, useContext, useState } from 'react';

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [city, setCity] = useState(''); // Provide your initial value here

  const updateCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <CityContext.Provider value={{ city, updateCity }}>
      {children}
    </CityContext.Provider>
  );
};

export { CityProvider, CityContext };
