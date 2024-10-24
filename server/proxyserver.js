// proxyServer.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

const airtableBaseUrl = 'https://airtable.com/v0/appi09iP9sn2pprfV/tblJrzVEFMFuVvTpE';
const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY; // Or fetch it from environment variables

app.use(express.json());

app.get('/api/:table', async (req, res) => {
  const table = req.params.table;
  try {
    const response = await axios.get(`${airtableBaseUrl}/${table}`, {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,  // Forward Bearer token to Airtable
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);  // Forward Airtable's response to the client
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/Pages', async (req, res) => {
  const filter = req.query.filterByFormula;
  try {
    const response = await axios.get(`${airtableBaseUrl}/Pages`, {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,  // Forward Bearer token to Airtable
        'Content-Type': 'application/json'
      },
      params: { filterByFormula: filter }  // Use the filterByFormula query param
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
