// src/components/PastCars.js

import React, { useEffect, useState } from 'react';
import { getPastCars } from '../services/Airtable';

const PastCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPastCars();
        setCars(data);
      } catch (error) {
        console.error('Error fetching past cars:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Past Solar Cars</h1>
      {cars.map(car => (
        <div key={car.id}>
          <h2>{car.car}</h2>
          <p>{car.description}</p>

          {/* Icon */}
          {car.icon && (
            <div>
              <img src={car.icon[0].url} alt={car.icon[0].filename} width={car.icon[0].width} height={car.icon[0].height} />
              <p>{car.icon[0].filename}</p>
            </div>
          )}

          {/* Picture */}
          {car.picture && (
            <div>
              <h3>Car Picture</h3>
              <img src={car.picture[0].url} alt={car.picture[0].filename} width={car.picture[0].width} height={car.picture[0].height} />
              <p>{car.picture[0].filename}</p>
            </div>
          )}

          {/* Technical Specifications */}
          <p><strong>Battery:</strong> {car.battery}</p>
          <p><strong>Motors:</strong> {car.motors}</p>
          <p><strong>Array Area:</strong> {car.arrayArea}</p>
          <p><strong>Array Output:</strong> {car.arrayOutput}</p>
          <p><strong>Solar Cells:</strong> {car.solarCells}</p>
          <p><strong>Battery Weight:</strong> {car.batteryWeight}</p>
          <p><strong>Top Speed:</strong> {car.topSpeed}</p>
          <p><strong>Motor Peak Power:</strong> {car.motorPeak}</p>
          <p><strong>Body Frame:</strong> {car.bodyFrame}</p>
          <p><strong>Suspension:</strong> {car.suspension}</p>
          <p><strong>Layout:</strong> {car.layout}</p>
          <p><strong>Rims:</strong> {car.rims}</p>
          <p><strong>Tires:</strong> {car.tires}</p>
          <p><strong>Weight:</strong> {car.weight}</p>
        </div>
      ))}
    </div>
  );
};

export default PastCars;

