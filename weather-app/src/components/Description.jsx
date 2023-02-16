import React from 'react'
import "./description.css"; 
import { FaArrowDown } from 'react-icons/fa';

const Description = () => {
  return (
    <div className="section section__descriptions">
        <div className="card">
            <div className="description__card-item">
            <FaArrowDown />
            <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="description__card-item">
            <FaArrowDown />
            <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="description__card-item">
            <FaArrowDown />
            <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="description__card-item">
            <FaArrowDown />
            <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="description__card-item">
            <FaArrowDown />
            <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
    </div>
  )
}

export default Description