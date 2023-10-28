const CityInput = () => {
  const { city, setCity } = useContext(CityContext);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (city.trim() !== '') {
        // Update the city context value.
        setCity(city.trim());
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
        <input type="text" value={city} onChange={handleCityChange} onKeyDown={handleKeyPress} />
      </label>
      <div className="prompt-details">
        <p>Press Enter to submit. You must enter a valid location (eg. New York, NY) to continue.</p>
      </div>
    </div>
  );
};

export default CityInput;
