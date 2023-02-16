import hotBackg from './assets/hot.jpg';
import coldBackg from './assets/cold.jpg';

function App() {
  return (
  <div className="app" style={{backgroundImage:`url(${coldBackg})`}}>
    <div className="overlay">
      <div className="container">
        <div className="section section__inputs">
          <input type="text" name="city" placeholder="Enter the city"/>
          <button>°F</button>
        </div>
        <div className="section section__temperature">
          <div className="icon">
            <h3>
              Moradabad
            </h3>
            <img src="" alt="weatherIcon" />
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>45 °C</h1>
          </div>
        </div>
        {/*bottom description*/}
      </div>
    </div>
  </div>
  );
}

export default App;
