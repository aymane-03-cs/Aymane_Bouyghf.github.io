import React, { useState } from 'react';
import '../Projects.css';

function Security() {
  // Cyber Security  
  const RoomsList = [
    { title: 'Nmap', description: "A powerful network scanning tool to gather information about services running on a given machine.", tools: ["Linux", "Nmap"], link: "https://tryhackme.com/r/room/furthernmap" },
    { title: 'Metasploit', description: "Introduction to the main components of the Metasploit Framework and using it to exploit network service vulnerabilities.", tools: ["Kali Linux", "Metasploit"], link: "https://tryhackme.com/r/room/metasploitintro" },
    { title: 'Network Services', description: "Learning and enumerating a variety of network services and misconfigurations.", tools: ["SMB", "Telnet", "FTP", "SMTP", "MySQL"], link: "https://tryhackme.com/r/room/networkservices2" },
    { title: 'Active Directory Basics', description: "Introduction to Active Directory basics, managing users in AD, and group policies.", tools: ["Windows", "Forests and Trusts"], link: "https://tryhackme.com/r/room/winadbasics" },
  ];

  // State pour gérer l'affichage des rooms
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h3 className="project-category">Cyber Security Rooms</h3>
      <div className="category-context">
        I completed these rooms as part of my personal cybersecurity learning journey.
      </div>
      <div className="projects-container">
        {(showMore ? RoomsList : RoomsList.slice(0, 3)).map((room, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{room.title}</h3>
            <p className="project-description">{room.description}</p>
            <ul className="project-tools">
              {room.tools.map((tool, i) => (
                <li key={i} className="project-tool">{tool}</li>
              ))}
            </ul>
            <a href={room.link} className="project-link code" target="_blank" rel="noopener noreferrer">
              View Room
            </a>
          </div>
        ))}
      </div>
      <button className="see-more-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? "See Less" : "See More"}
      </button>
    </>
  );
}

export default Security;
