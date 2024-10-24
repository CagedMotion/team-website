// src/components/Team.js

import React, { useEffect, useState } from 'react';
import { getMembers } from '../services/Airtable';

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMembers();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Team Members</h1>
      {members.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p><strong>Position:</strong> {member.position}</p>
          <p><strong>Current Member:</strong> {member.current ? 'Yes' : 'No'}</p>

          {/* Display profile picture if available */}
          {member.picture && (
            <div>
              <img 
                src={member.picture[0].url} 
                alt={member.picture[0].filename} 
                width={member.picture[0].width} 
                height={member.picture[0].height} 
              />
              <p>{member.picture[0].filename}</p>
            </div>
          )}

          {/* Display social media links */}
          <p><strong>LinkedIn:</strong> <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">{member.linkedIn}</a></p>
          <p><strong>Instagram:</strong> <a href={member.instagram} target="_blank" rel="noopener noreferrer">{member.instagram}</a></p>
          <p><strong>GitHub:</strong> <a href={member.github} target="_blank" rel="noopener noreferrer">{member.github}</a></p>
          <p><strong>Twitter:</strong> <a href={member.twitter} target="_blank" rel="noopener noreferrer">{member.twitter}</a></p>
          <p><strong>Facebook:</strong> <a href={member.facebook} target="_blank" rel="noopener noreferrer">{member.facebook}</a></p>

          {/* Display funny picture if available */}
          {member.funnyPic && (
            <div>
              <h4>Funny Pic</h4>
              <img 
                src={member.funnyPic[0].url} 
                alt={member.funnyPic[0].filename} 
                width={member.funnyPic[0].width} 
                height={member.funnyPic[0].height} 
              />
              <p>{member.funnyPic[0].filename}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Team;
