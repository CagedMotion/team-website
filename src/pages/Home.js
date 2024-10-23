// src/pages/Home.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported for styling
import './Home.css';  // Custom CSS for additional styles

const contentData = [
  {
    imageUrl: 'https://example.com/car1.jpg',
    text: 'Our latest solar car, built with cutting-edge technology, is faster, lighter, and more energy efficient than ever before.',
  },
  {
    imageUrl: 'https://example.com/car2.jpg',
    text: 'Engineered for performance and endurance, our solar car’s aerodynamic design reduces drag, maximizing speed on the track.',
  },
  {
    imageUrl: 'https://example.com/car3.jpg',
    text: 'Our solar car has achieved numerous awards in international competitions, showing our team’s dedication to innovation and excellence.',
  },
];

const Home = () => {
  return (
    <div className="container-fluid home-page">
      {contentData.map((section, index) => (
        <div key={index} className="row align-items-center my-5 content-section">
          <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <img src={section.imageUrl} alt="Car" className="img-fluid content-image" />
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
