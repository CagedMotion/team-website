// src/components/AboutUs.js

import React, { useEffect, useState } from 'react';
import { getAboutUs } from '../services/Airtable';

const AboutUs = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAboutUs();
        setSections(data);
      } catch (error) {
        console.error('Error fetching About Us sections:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {sections.map(section => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          <p>{section.info}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
