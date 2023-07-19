import React from "react";
import "./description.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { WiHumidity, WiWindy } from "react-icons/wi";

const Description = ({ current }) => {
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      data: current.min,
      title: "Min",
      unit: "°C",
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      data: current.max,
      title: "Max",
      unit: "°C",
    },
    {
      id: 3,
      icon: <MdVisibility />,
      data: current.vis_km,
      title: "Visibility",
      unit: "Km",
    },
    {
      id: 4,
      icon: <IoIosAirplane />,
      data: current.pressure_mb,
      title: "Pressure",
      unit: "Mb",
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
      data: current.wind_kph,
      title: "Wind",
      unit: "Kph",
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
