// src/pages/PastCars.js

import React, { useEffect, useState } from 'react';
import { getPastCars } from '../services/airtable';
import './PastCars.css';

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
    <div className="container past-cars-page">
      <h1 className="text-center">Past Solar Cars</h1>
      <div className="row">
        {pastCars.map((car, index) => (
          <div key={index} className="col-md-4 my-3">
            <img src={car.imageUrl} alt={car.model} className="img-fluid car-image" />
            <h3>{car.model} ({car.year})</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastCars;
