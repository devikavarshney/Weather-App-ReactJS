import React from "react";
import "./description.css";
// import { FaArrowDown } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { WiHumidity, WiWindy } from "react-icons/wi";

const Description = ({ current }) => {
  const cards = [
    {
      id: 1,
      icon: <MdVisibility />,
      data: current.vis_km,
      title: "Visibility",
      unit: "Km",
    },
    {
      id: 2,
      icon: <IoIosAirplane />,
      data: current.pressure_mb,
      title: "Pressure",
      unit: "Mb",
    },
    {
      id: 3,
      icon: <WiHumidity />,
      data: current.humidity,
      title: "Humidity",
      unit:"%",
    },
    {
      id: 4,
      icon: <WiWindy />,
      data: current.wind_kph,
      title: "Wind",
      unit: "Kph",
    },
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
