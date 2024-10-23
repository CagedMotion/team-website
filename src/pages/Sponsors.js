// src/pages/Sponsors.js

import React, { useEffect, useState } from 'react';
import { getSponsors } from '../services/airtable';
import './Sponsors.css';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    async function fetchSponsors() {
      const data = await getSponsors();
      setSponsors(data);
    }
    fetchSponsors();
  }, []);

  return (
    <div className="container sponsors-page">
      <h1 className="text-center">Our Sponsors</h1>
      <div className="row">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="col-md-4 text-center my-3">
            <a href={sponsor.homepage} target="_blank" rel="noreferrer">
              <img src={sponsor.logoUrl} alt={sponsor.name} className="img-fluid sponsor-logo" />
            </a>
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
