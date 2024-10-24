// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { getHeaders } from '../services/Airtable';

const Navbar = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHeaders();
        setHeaders(data);
      } catch (error) {
        console.error('Error fetching headers:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <nav>
      {headers.map(header => (
        <div key={header.id}>
          <h2>{header.page}</h2>
          
          {/* Image Title */}
          <h3>{header.imageTitle}</h3>
          
          {/* Logo */}
          {header.logo && (
            <div>
              <img 
                src={header.logo[0].url} 
                alt={header.logo[0].filename} 
                width={header.logo[0].width} 
                height={header.logo[0].height} 
              />
              <p>{header.logo[0].filename}</p>
              
              {/* Thumbnails if available */}
              {header.logo[0].thumbnails.small && (
                <img src={header.logo[0].thumbnails.small} alt="Small thumbnail" />
              )}
              {header.logo[0].thumbnails.large && (
                <img src={header.logo[0].thumbnails.large} alt="Large thumbnail" />
              )}
            </div>
          )}
          
          {/* Info Title and Info */}
          <h4>{header.infoTitle}</h4>
          <p>{header.info}</p>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

