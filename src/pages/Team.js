// src/pages/Team.js

import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

// Airtable setup
const base = new Airtable({ apiKey: 'YOUR_AIRTABLE_API_KEY' }).base('YOUR_BASE_ID');

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch the "Members" table from Airtable
    base('Members').select({
      view: "Grid view", // Replace with your view name if necessary
    }).eachPage((records, fetchNextPage) => {
      // Store the records into state
      setTeamMembers(records);
      fetchNextPage();
    });
  }, []);

  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.fields.Picture[0].url} alt={member.fields.Name} className="member-picture" />
            <h2>{member.fields.Name}</h2>
            <p>{member.fields.Position}</p>
            {member.fields.Current && <p className="current-member">Current Member</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
