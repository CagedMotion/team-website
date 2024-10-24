// src/components/PageContent.js

import React, { useState, useEffect } from 'react';
import { getPageContent } from '../services/Airtable';

const PageContent = ({ page }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const data = await getPageContent(page);
      setContent(data);
    }
    fetchContent();
  }, [page]);

  if (!content) return <div>Loading...</div>;

  return (
    <div className={`page-content ${page}-page`}>
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

export default PageContent;
