// src/pages/Gallery.js

import React, { useEffect, useState } from 'react';
import { getGalleryImages } from '../services/airtable';
import './Gallery.css';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

  useEffect(() => {
    async function fetchGallery() {
      const data = await getGalleryImages(selectedYear);
      setGalleryImages(data);
    }
    fetchGallery();
  }, [selectedYear]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="container gallery-page">
      <h1 className="text-center">Gallery</h1>
      <div className="text-center my-3">
        <label>Select Year: </label>
        <select onChange={handleYearChange} value={selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          {/* Add more years as needed */}
        </select>
      </div>
      <div className="row">
        {galleryImages.map((image, index) => (
          <div key={index} className="col-md-4 my-3">
            <img src={image.imageUrl} alt="Gallery" className="img-fluid gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
