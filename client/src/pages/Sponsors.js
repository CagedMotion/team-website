// src/pages/Sponsors.js

import React, { useEffect, useState } from 'react';
import { getSponsors } from '../services/Airtable';

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
    <div>
      <h1>Sponsors</h1>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.logoUrl} alt={sponsor.name} />
            <h3>{sponsor.name}</h3>
            <a href={sponsor.website}>Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
