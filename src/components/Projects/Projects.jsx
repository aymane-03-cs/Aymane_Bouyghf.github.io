import React, { useState } from 'react';
import './Projects.css';
import Security from './Security/Security';
import MachineLearning from './ArtificialIntelligence/MachineLearning';
import Header from '../Header/Header';

function Projects() {
  const GitHubLink = "https://github.com/aymane-03-cs";

  // Developing projects  
  const projectList = [
    { title: 'Construction Site Lights Control', description: "Developed a web application for supervising connected equipment of AXIMUM, a company operating in the construction field. Worked on the backend, implementing a microservices architecture.", tools: ["TypeScript", "Express.js", "Node.js", "Angular"], link: GitHubLink },
    { title: 'Logistic Delivery System', description: "Designed a structured PostgreSQL database to manage delivery logistics efficiently.", tools: ["SQL", "PostgreSQL", "PHP", "HTML", "CSS"], link: GitHubLink },
    { title: 'Weather Platform', description: "An object-oriented Java project to process and analyze weather data from three different APIs.", tools: ["Java", "Gradle", "JUnit", "UML"], link: GitHubLink },
    { title: 'Megalopolis Game', description: "Developed the card game Megalopolis using TypeScript with a functional programming approach.", tools: ["TypeScript", "JavaScript", "Linter", "Immutable.js", "Functional Programming"], link: GitHubLink },
    { title: "Carcassonne Game", description: "Built a C-based client-server architecture to develop an AI-driven player for Carcassonne.", tools: ["C", "Valgrind", "gdb", "Dynamic Shared Libraries", "dlopen"], link: GitHubLink },
  ];

  // Numerical and Mathematical Modeling Projects
  const algoNumProjectList = [
    { title: 'Information Theory', description: 'Implemented Huffman encoding and decoding algorithms for data compression (texts, images, etc.).', tools: ["Python3", "NumPy", "Matplotlib"], link: GitHubLink },
    { title: 'Linear Systems', description: 'Developed a solver for linear systems of various sizes.', tools: ["Python3", "NumPy", "Matplotlib", "Linear Algebra", "Cholesky Method"], link: GitHubLink },
    { title: 'SVD Image Compression', description: "Implemented image compression using Singular Value Decomposition (SVD), a lossy compression technique.", tools: ["Python3", "SciPy", "SVD Compression", "Householder Matrix"], link: GitHubLink },
    { title: "Non-Linear Systems", description: "Implemented algorithms for solving non-linear equations, focusing on the Newton-Raphson method.", tools: ["Python3", "SciPy", "Linear Algebra", "Householder Matrix"], link: GitHubLink },
    { title: "Bin Packing", description: "Designed and implemented a Python-based solution for the bin-packing problem, integrating constraints for fragile objects using linear programming.", tools: ["Python3", "Matplotlib", "Linear Programming", "Simplex Algorithm"], link: GitHubLink },
  ];

  // State pour gérer l'affichage des projets
  const [showMoreDev, setShowMoreDev] = useState(false);
  const [showMoreAlgo, setShowMoreAlgo] = useState(false);

  return (
    <>
      <Header />
      <div className="projects">
        <h2 className="projects-title">Projects</h2>

        {/* Developing Projects */}
        <h3 className="project-category">Software Development Projects</h3>
        <div className="projects-container">
          {(showMoreDev ? projectList : projectList.slice(0, 3)).map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tools">
                {project.tools.map((tool, i) => (
                  <li key={i} className="project-tool">{tool}</li>
                ))}
              </ul>
              <a href={project.link} className="project-link code" target="_blank" rel="noopener noreferrer">
                View More
              </a>
            </div>
          ))}
        </div>
        {projectList.length > 3 && (
          <button className="see-more-button" onClick={() => setShowMoreDev(!showMoreDev)}>
            {showMoreDev ? "See Less" : "See More"}
          </button>
        )}

        {/* Numerical and Mathematical Modeling Projects */}
        <h3 className="project-category">Numerical and Mathematical Modeling Projects</h3>
        <div className="projects-container">
          {(showMoreAlgo ? algoNumProjectList : algoNumProjectList.slice(0, 3)).map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tools">
                {project.tools.map((tool, i) => (
                  <li key={i} className="project-tool">{tool}</li>
                ))}
              </ul>
              <a href={project.link} className="project-link code" target="_blank" rel="noopener noreferrer">
                View More
              </a>
            </div>
          ))}
        </div>
        {algoNumProjectList.length > 3 && (
          <button className="see-more-button" onClick={() => setShowMoreAlgo(!showMoreAlgo)}>
            {showMoreAlgo ? "See Less" : "See More"}
          </button>
        )}

        {/* Machine Learning & Deep Learning Projects */}
        <MachineLearning />

        {/* Cyber Security Rooms */}
        <Security />
      </div>
    </>
  );
}

export default Projects;
