// src/services/airtable.js

import Airtable from 'airtable';

// Replace these with your actual Personal Access Token and Base ID
const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

export const getHeaders = async () => {
  const records = await base('Headers').select({}).firstPage();
  return records.map(record => ({
    page: record.get('Page'),   // Assuming there's a "Page" field in Headers
    link: record.get('Link'),   // Assuming there's a "Link" field in Headers
  }));
};

export const getMeetings = async () => {
  const records = await base('Meetings').select({}).firstPage();
  return records.map(record => ({
    date: record.get('Date'),   // Assuming there's a "Date" field in Meetings
    time: record.get('Time'),   // Assuming there's a "Time" field in Meetings
    agenda: record.get('Agenda'),   // Assuming there's an "Agenda" field
  }));
};

export const getMembers = async () => {
  const records = await base('Members').select({}).firstPage();
  return records.map(record => ({
    name: record.get('Name'),
    position: record.get('Position'),
    profilePicture: record.get('Profile Picture')?.[0]?.url,  // Access the profile picture
  }));
};

export const getAboutUs = async () => {
  const records = await base('AboutUs').select({}).firstPage();
  return records.map(record => ({
    tabName: record.get('TabName'),   // Assuming there's a "TabName" field
    content: record.get('Content'),   // Assuming there's a "Content" field
  }));
};

export const getPastCars = async () => {
  const records = await base('PastCars').select({}).firstPage();
  return records.map(record => ({
    carName: record.get('CarName'),   // Assuming there's a "CarName" field
    year: record.get('Year'),
    description: record.get('Description'),
    imageUrl: record.get('Image')?.[0]?.url,  // Access the image of the car
  }));
};

export const getSponsors = async () => {
  const records = await base('Sponsors').select({}).firstPage();
  return records.map(record => ({
    name: record.get('Name'),
    logoUrl: record.get('Logo')?.[0]?.url,    // Access sponsor logo
    website: record.get('Website'),
  }));
};

// Function to fetch content for a specific page
export async function getPageContent(pageName) {
  try {
    const records = await base('Headers').select({
      filterByFormula: `{Page} = '${pageName}'`,
    }).firstPage();

    if (records.length > 0) {
      const record = records[0].fields;
      return {
        Image: record.Image,
        Logo: record.Logo,
        ImageTitle: record.ImageTitle,
        InfoTitle: record.InfoTitle,
        Info: record.Info,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching Airtable data:', error);
    return null;
  }
}
