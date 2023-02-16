import hotBackg from "./assets/hot.jpg";
import coldBackg from "./assets/cold.jpg";
import cloud from "./assets/cloud.webp";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  const [current, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData("moradabad");
      setWeather(data);
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBackg})` }}>
      <div className="overlay">
        {current && (
          <div className="container">
            <div className="section section__inputs">
              <input type="text" name="city" placeholder="Enter the city" />
              <button>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${current.name}, ${current.country}`}</h3>
                <img src={current.iconURL} alt="weatherIcon" />
                <h3>{`${current.text}`}</h3>
              </div>
              <div className="temperature">
                <h1>{`${current.temp_c}`}°C</h1>
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
