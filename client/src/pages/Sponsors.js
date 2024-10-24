// src/components/Sponsors.js

import React, { useEffect, useState } from 'react';
import { getSponsors } from '../services/Airtable';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSponsors();
        setSponsors(data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Sponsors</h1>
      {sponsors.map(sponsor => (
        <div key={sponsor.id}>
          <h2>{sponsor.company}</h2>
          <p><strong>Tier:</strong> {sponsor.tier}</p>
          <p><strong>Location:</strong> {sponsor.location}</p>

          {/* Display logo if available */}
          {sponsor.logo && (
            <div>
              <img 
                src={sponsor.logo[0].url} 
                alt={sponsor.logo[0].filename} 
                width={sponsor.logo[0].width} 
                height={sponsor.logo[0].height} 
              />
              <p>{sponsor.logo[0].filename}</p>
            </div>
          )}

          {/* Sponsor Link */}
          {sponsor.link && (
            <p><strong>Website:</strong> <a href={sponsor.link} target="_blank" rel="noopener noreferrer">{sponsor.link}</a></p>
          )}

          <p><strong>Description:</strong> {sponsor.description}</p>

          {/* Is sponsor current */}
          <p><strong>Current Sponsor:</strong> {sponsor.current ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
