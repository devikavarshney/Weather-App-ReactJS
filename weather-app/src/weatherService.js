const API_KEY = "2bd4968948c84508b5f162821231602";
const makeIconURL = (iconID) => `https:${iconID}`;

const getFormattedWeatherData = async (city) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  const {
    current: { feelslike_c, humidity, temp_c, temp_f, wind_kph, condition:{text,icon}, vis_km,pressure_mb},
    location: { name, country },
  } = data;
  return {
    name,text,
    feelslike_c,
    iconURL : makeIconURL(icon),
    humidity,
    temp_c, temp_f,
    wind_kph,
    country,vis_km,pressure_mb
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
