import hotBackg from "./assets/hot.jpg";
import coldBackg from "./assets/cold.jpg";
import cloud from "./assets/cloud.webp";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  const [city, setCity] = useState("Vellore");
  const [current, setWeather] = useState(null);
  const [backg, setBackg] = useState(hotBackg);
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city);
      setWeather(data);

      const tempHigh =
        data.temp_c < 18 ? setBackg(coldBackg) : setBackg(hotBackg);
    };
    fetchWeatherData();
  }, [city]);

  var currentTempUnit = "°C";

  // var currentTempData =current.temp_c;

  const handlefahUnitClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentTempUnit === "°C";
    button.innerText = isCelcius ? "°F" : "°C";
    currentTempUnit = isCelcius ? "°F" : "°C";
    // currentTempData = isCelcius ? current.temp_f : current.temp_c;
    console.log(currentUnit);
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${backg})` }}>
      <div className="overlay">
        {current && (
          <div className="container">
            <div className="section section__inputs">
              <input
                type="text"
                onKeyDown={enterKeyPressed}
                name="city"
                placeholder="Enter the city"
              />
              <button onClick={(e) => handlefahUnitClick(e)}>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${current.name}, ${current.country}`}</h3>
                <img src={current.iconURL} alt="weatherIcon" />
                <h3>{`${current.text}`}</h3>
              </div>
              <div className="temperature">
                <h1>
                  {`${current.temp_c}`} {currentTempUnit}
                </h1>
              </div>
            </div>
            {/*bottom description*/}
            <Description current={current} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
