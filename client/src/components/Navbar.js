// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { getHeaders } from '../services/Airtable';

const Navbar = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    async function fetchHeaders() {
      const data = await getHeaders();
      setHeaders(data);
    }
    fetchHeaders();
  }, []);

  return (
    <nav>
      <ul>
        {headers.map((header, index) => (
          <li key={index}>
            <a href={header.link}>{header.page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
