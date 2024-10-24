// src/pages/AboutUs.js

import React, { useEffect, useState } from 'react';
import { getAboutUs } from '../services/Airtable';

const AboutUs = () => {
  const [aboutUsTabs, setAboutUsTabs] = useState([]);

  useEffect(() => {
    async function fetchAboutUs() {
      const data = await getAboutUs();
      setAboutUsTabs(data);
    }
    fetchAboutUs();
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <div className="tabs">
        {aboutUsTabs.map((tab, index) => (
          <div key={index}>
            <h3>{tab.tabName}</h3>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
