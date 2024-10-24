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
          {header.image && (
            <div>
              <img src={header.image.url} alt={header.image.filename} width={header.image.width} height={header.image.height} />
              <p>{header.image.filename}</p>
              {/* Display thumbnails if available */}
              {header.image.thumbnails.small && (
                <img src={header.image.thumbnails.small} alt="Small thumbnail" />
              )}
              {header.image.thumbnails.large && (
                <img src={header.image.thumbnails.large} alt="Large thumbnail" />
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
