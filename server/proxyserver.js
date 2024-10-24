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
        Authorization: `Bearer ${airtableApiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
