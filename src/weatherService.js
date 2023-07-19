const API_KEY = "bb0fba3112e96c0bc7241b9cfe3ee7ca";
const makeIconURL = (iconID) => `https://openweathermap.org/img/wn/${iconID}.png`;

const getFormattedWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, visibility, wind: { speed }, sys: { country }, name } = data;
  const { description, icon } = weather[0];
  return {
    description, iconURL: makeIconURL(icon), weather, temp, feels_like, temp_min, temp_max, pressure, humidity, visibility, speed, country, name
  };
};

// const getFormattedforcastWeatherData = async (city) => {
//     const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no`;
//     const data = await fetch(URL)
//       .then((res) => res.json())
//       .then((data) => data);
//     const {
//       current: { feelslike_c, humidity, temp_c, wind_kph, condition:{text,icon}, vis_km,pressure_mb},
//       location: { name, country },
//     } = data;
//     return {
//       name,text,
//       feelslike_c,
//       iconURL : makeIconURL(icon),
//       humidity,
//       temp_c,
//       wind_kph,
//       country,vis_km,pressure_mb
//     };
//   };

export { getFormattedWeatherData };
