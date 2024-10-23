// src/pages/Telemetry.js

import React, { useEffect, useState } from 'react';
import { getTelemetryData } from './services/airtable';

const Telemetry = () => {
  const [telemetry, setTelemetry] = useState([]);

  useEffect(() => {
    async function fetchTelemetry() {
      const data = await getTelemetryData();
      setTelemetry(data);
    }
    fetchTelemetry();
  }, []);

  return (
    <div>
      <h1>Telemetry Data</h1>
      <ul>
        {telemetry.map((data, index) => (
          <li key={index}>
            <p>Speed: {data.speed} km/h</p>
            <p>Battery: {data.battery}%</p>
            <p>Timestamp: {data.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Telemetry;
