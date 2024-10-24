// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import { getPageContent } from '../services/Airtable'; // You'd define this function to fetch Airtable data

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const data = await getPageContent('home'); // Fetch data for the 'home' page
      setContent(data);
    }
    fetchContent();
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="home-page">
      <h1>{content.InfoTitle}</h1>
      <p>{content.Info}</p>
      <img src={content.Image[0].url} alt={content.ImageTitle} />
      <div className="logos">
        {content.Logo.map((logo, index) => (
          <img key={index} src={logo.url} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
