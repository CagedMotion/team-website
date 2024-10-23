// src/pages/Team.js

import React, { useEffect, useState } from 'react';
import { getTeamMembers } from '../services/airtable';
import './Team.css';  // Custom styles for the team page

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      const data = await getTeamMembers();
      setTeamMembers(data);
    }
    fetchTeam();
  }, []);

  return (
    <div className="container-fluid team-page">
      <h1 className="text-center">Meet Our Team</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 text-center my-3">
            <img src={member.imageUrl} alt={member.name} className="img-fluid team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
