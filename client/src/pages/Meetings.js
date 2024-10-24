// src/components/Meetings.js

import React, { useEffect, useState } from 'react';
import { getMeetings } from '../services/Airtable';

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMeetings();
        setMeetings(data);
      } catch (error) {
        console.error('Error fetching meetings:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Team Meetings</h1>
      {meetings.map(meeting => (
        <div key={meeting.id}>
          <h2>{meeting.team}</h2>
          <p><strong>Building:</strong> {meeting.building}</p>
          <p><strong>Room:</strong> {meeting.room}</p>
          <p><strong>Day:</strong> {meeting.day}</p>
          <p><strong>Time:</strong> {meeting.time}</p>
          <p><strong>Priority:</strong> {meeting.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default Meetings;

