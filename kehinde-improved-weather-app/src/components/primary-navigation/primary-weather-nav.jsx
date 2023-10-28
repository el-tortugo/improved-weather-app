import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CommonItemsContainer from "./common-items-container";
import SevenDayWeather from "./seven-day-weather";

const PrimaryWeatherNav = () => {
  return (
    <nav>
      <Link to="/common-items-container">Common Items</Link>
      <Link to="/seven-day-weather">7 Day Weather</Link>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <PrimaryWeatherNav />
      <Routes>
        <Route path="/common-items-container" element={<CommonItemsContainer />} />
        <Route path="/seven-day-weather" element={<SevenDayWeather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
