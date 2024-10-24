// Generic function to fetch records from a specific table
// src/services/Airtable.js

// Point to your proxy server running on localhost:5000
const baseUrl = 'http://localhost:5000/api';  // Proxy server URL

// Function to fetch data via proxy server (no headers needed)
const fetchRecords = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.records;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return [];
  }
};

export const getHeaders = async () => {
  return fetchRecords('Headers');  // Make request to proxy
};

export const getMeetings = async () => {
  return fetchRecords('Meetings');  // Request to proxy
};

export const getMembers = async () => {
  return fetchRecords('Members');  // Request to proxy
};

export const getPastCars = async () => {
  return fetchRecords('PastCars');  // Request to proxy
};

export const getSponsors = async () => {
  return fetchRecords('Sponsors');  // Request to proxy
};

export const getPageContent = async (page) => {
  try {
    const response = await fetch(`${baseUrl}/Pages?filterByFormula={Page}="${page}"`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.records.length ? data.records[0].fields : null;
  } catch (error) {
    console.error(`Error fetching page content:`, error);
    return null;
  }
};
