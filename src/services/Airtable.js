// src/services/airtable.js

import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('YOUR_BASE_ID');

export const getHomePageContent = async () => {
  const records = await base('HomePage').select({}).firstPage();
  return records.map(record => ({
    imageUrl: record.get('ImageField')[0].url,  // Access the image URL from the Attachment field
    text: record.get('TextField'),  // Assuming you have a field for text
  }));
};

export const getTelemetryData = async () => {
  const records = await base('Telemetry').select({}).firstPage();
  return records.map(record => ({
    speed: record.get('Speed'),
    battery: record.get('Battery'),
    timestamp: record.get('Timestamp')
  }));
};

export const getTeamMembers = async () => {
    const records = await base('TeamMembers').select({}).firstPage();
    return records.map(record => ({
      name: record.get('Name'),
      role: record.get('Role'),
      imageUrl: record.get('Profile Picture')[0].url,
    }));
  };

// src/services/airtable.js

export const getSponsors = async () => {
    const records = await base('Sponsors').select({}).firstPage();
    return records.map(record => ({
      name: record.get('Name'),
      description: record.get('Description'),
      logoUrl: record.get('Logo')[0].url,
      homepage: record.get('Homepage'),
    }));
  };
  

export const getPastCars = async () => {
    const records = await base('PastCars').select({}).firstPage();
    return records.map(record => ({
      model: record.get('Model'),
      year: record.get('Year'),
      description: record.get('Description'),
      imageUrl: record.get('Image')[0].url,
    }));
  };
  

// src/services/airtable.js

export const getGalleryImages = async (year) => {
    const records = await base('Gallery').select({
      filterByFormula: `Year = '${year}'`
    }).firstPage();
    return records.map(record => ({
      imageUrl: record.get('Image')[0].url,
      year: record.get('Year'),
    }));
  };
  
