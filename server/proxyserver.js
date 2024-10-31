// proxyServer.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

const airtableBaseUrl = 'https://api.airtable.com/appi09iP9sn2pprfV';  // Replace YOUR_BASE_ID with your actual Airtable Base ID
const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;  // Make sure this is set in your .env file

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

// Endpoint to fetch data from a specified table
app.get('/api/:table', async (req, res) => {
  const table = req.params.table;
  try {
    const response = await axios.get(`${airtableBaseUrl}/${table}`, {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching data from table ${table}:`, error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Internal Server Error' });
  }
});

// Endpoint for fetching Pages content with a filter
app.get('/api/Pages', async (req, res) => {
  const filter = req.query.filterByFormula;
  try {
    const response = await axios.get(`${airtableBaseUrl}/Pages`, {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json'
      },
      params: { filterByFormula: filter }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching page content:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
