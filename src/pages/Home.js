// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { getHomePageContent } from '../services/airtable';
import './Home.css';  // Assuming you have custom styles

const Home = () => {
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      const data = await getHomePageContent();
      setContentData(data);
    }
    fetchContent();
  }, []);

  return (
    <div className="container-fluid home-page">
      {contentData.map((section, index) => (
        <div key={index} className="row align-items-center my-5 content-section">
          <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <img src={section.imageUrl} alt="Airtable Image" className="img-fluid content-image" />
          </div>
          <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
            <div className="content-text">
              <p>{section.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
