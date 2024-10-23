// src/pages/Meetings.js

import React, { useEffect, useState } from 'react';
import { getMeetings } from '../services/Airtable';

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    async function fetchMeetings() {
      const data = await getMeetings();
      setMeetings(data);
    }
    fetchMeetings();
  }, []);

  return (
    <div>
      <h1>Meetings</h1>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            <p>Date: {meeting.date}</p>
            <p>Time: {meeting.time}</p>
            <p>Agenda: {meeting.agenda}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meetings;
