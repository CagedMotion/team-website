// src/services/airtable.js

import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('YOUR_BASE_ID');

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
    position: record.get('Position'),
    photoUrl: record.get('PhotoUrl')
  }));
};

export const getSponsors = async () => {
  const records = await base('Sponsors').select({}).firstPage();
  return records.map(record => ({
    name: record.get('Name'),
    homepage: record.get('Homepage'),
  }));
};

export const getPastCars = async () => {
  const records = await base('PastCars').select({}).firstPage();
  return records.map(record => ({
    model: record.get('Model'),
    year: record.get('Year'),
    description: record.get('Description'),
  }));
};

export const getGalleryByYear = async (year) => {
  const records = await base('Gallery').select({
    filterByFormula: `RaceYear = '${year}'`
  }).firstPage();
  return records.map(record => ({
    photoUrl: record.get('PhotoUrl'),
    raceYear: record.get('RaceYear')
  }));
};
