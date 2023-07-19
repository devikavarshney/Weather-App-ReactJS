import React from "react";
import "./description.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { WiHumidity, WiWindy } from "react-icons/wi";

const Description = ({ current, units }) => {
  const tempUnits = units==='metric' ? "°C" : "°F";
  const windUnits = units==='metric' ? "m/s" : "m/h";
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      data: current.temp_min,
      title: "Min",
      unit: tempUnits,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      data: current.temp_max,
      title: "Max",
      unit: tempUnits,
    },
    {
      id: 3,
      icon: <MdVisibility />,
      data: current.visibility,
      title: "Visibility",
      unit: "km",
    },
    {
      id: 4,
      icon: <IoIosAirplane />,
      data: current.pressure,
      title: "Pressure",
      unit: "hPa",
    },
    {
      id: 5,
      icon: <WiHumidity />,
      data: current.humidity,
      title: "Humidity",
      unit: "%",
    },
    {
      id: 6,
      icon: <WiWindy />,
      data: current.speed,
      title: "Wind",
      unit: windUnits,
    }
  ];
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, data, title, unit }) => (
        <div key={id} className="card">
          <div className="description__card-item">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
