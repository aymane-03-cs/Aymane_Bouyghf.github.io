import React from 'react';
import '../Projects.css';

function Projects() {
  //Cyber Security  
  const tryhackmeLink = "https://github.com/aymane-03-cs";
  const RoomsList = [
    {
        title: 'Nmap',
        description: "A powerful network scanning tool, to gather informations about services runing on a given machine",
        tools: ["Linux", "Nmap"],
        link: "https://tryhackme.com/r/room/furthernmap",
      },  
    {
        title: 'Metasploit',
        description: "Introduction to the main components of the Metasploit Framework, and using it to exploit Network services Vulnirabilities",
        tools: ["KaliLinux", "Metasploit"],
        link: "https://tryhackme.com/r/room/metasploitintro",
      },
    {
      title: 'Network Services',
      description: "Learning and enumerating a variety of network services and misconfigurations.",
      tools: ["SMB", "Telnet", "FTP", "SMTP", "MySQL"],
      link: "https://tryhackme.com/r/room/networkservices2",
    }, 
    {
      title: 'Active Directory Basics',
      description: "Introduction to Active Directory Basics, Managing users and AD and Group Policies",
      tools: ["Windows", "Forests And Trusts"],
      link: "https://tryhackme.com/r/room/winadbasics",
    },
  ];

  return (
    <>
    <h3 className="project-category">Cyber security Rooms</h3>
    <div className='category-context'>I completed theses rooms during my cyber security personnal Learning</div>
    <div className="projects-container">
      {RoomsList.map((project, index) => (
        <div className="project-card" key={index}>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-tools">
            {project.tools.map((tool, i) => (
              <li key={i} className="project-tool">{tool}</li>
            ))}
          </ul>
          {/*<a className='project-link '>More</a>*/}
          <a href={project.link} className="project-link code" target="_blank" rel="noopener noreferrer">
            View room
          </a>
        </div>
      ))}
    </div>
    </>
  );
}


export default Projects;
