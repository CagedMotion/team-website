// src/pages/PastCars.js

import React, { useEffect, useState } from 'react';
import { getPastCars } from '../services/Airtable';

const PastCars = () => {
  const [pastCars, setPastCars] = useState([]);

  useEffect(() => {
    async function fetchPastCars() {
      const data = await getPastCars();
      setPastCars(data);
    }
    fetchPastCars();
  }, []);

  return (
    <div>
      <h1>Past Cars</h1>
      <div className="cars-grid">
        {pastCars.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.imageUrl} alt={car.carName} />
            <h3>{car.carName} ({car.year})</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastCars;
