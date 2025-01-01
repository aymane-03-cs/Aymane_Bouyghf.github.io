import React from 'react';
import './Projects.css';
import Security from './Security/Security';
import Header from '../Header/Header';

function Projects() {
  //Developing projects  
  const GitHubLink = "https://github.com/aymane-03-cs";
  const projectList = [
    {
      title: 'Logistic Delivery System',
      description: "The project implements a structured database using PostgreSQL to manage the company's delivery logistics.",
      tools: ["SQL", "PostgreSQL", "PHP", "HTML", "CSS"],
      link: GitHubLink,
    },
    {
      title: 'Weather Platform',
      description: "An object-oriented project in Java to exploit weather data provided by three online APIs.",
      tools: ["Java", "Gradle", "JUnit", "UML"],
      link: GitHubLink,
    },
    {
      title: 'Megalopolis Game',
      description: "The project aims to implement the card game Megalopolis using TypeScript as a functional programming language.",
      tools: ["TypeScript", "JavaScript", "Linter", "Immutable.js", "Functional Programming"],
      link: GitHubLink,
    },
    {
      title: "Carcassonne Game",
      description: "A game development project in C, following a client-server architecture to develop a player and compete against other teams.",
      tools: ["C", "Valgrind", "gdb", "Dynamic Shared Libraries", "dlopen"],
      link: GitHubLink,
    },
    {
      title: 'P-Code Compiler',
      description: "Building a P-code compiler, tackling different steps: Lexical Analysis, Syntax Analysis, Semantic Analysis.",
      tools: ["Yacc", "Bison", "GCC"],
      link: GitHubLink,
    },
    {
      title: 'Portfolio',
      description: "Creating my personnal portfolio shocasing my projects, the portfolio is a web page availble on-line.",
      tools: ["Html", "Css", "Javascript", "React.js", "Vite"],
      link: GitHubLink,
    },

  ];
  //Numerical And Mathematic Modeling Projects
  const AlgoNumProjectList = [
    {
        title: 'Information Theory',
        description: 'Inplementing The Huffman encoding and decoding Algorithms in order to compress the variant Data (Texts, images...   ).',
        tools: ["Python3", "numpy", "Matplotlib"],
        link:GitHubLink,
      },  
    {
        title: 'Linear Systems',
        description: 'Implementing linear solver, for systems with different size.',
        tools: ["Python3", "numpy", "Matplotlib","Linear Algebra" ,"Choelesky Method"],
        link:GitHubLink,
    },
    {
        title: 'SVD Image compress ',
        description: "This project aims to implement an image compression algorithm using Singular Value Decomposition (SVD) techniques. It is part of lossy compression methods,",
        tools: ["Python3", "scipy", "SVD compression", "HouseHolder Matrix"],
        link:GitHubLink,
    },
    {
        title: "Non linear Systems",
        description:"The goal of this project is to program algorithms dedicated to the research of roots of systems of non-linear equations. The method promoted here is the Newton-Raphson algorithm",
        tools: ["Python3", "scipy", "Linear Algebra", "HouseHolder Matrix"],
        link:GitHubLink,
    },
    {
        title: "Bin Packing",
        description:"Designed a mathematical model and implemented a Python-based solution for the bin-packing problem, incorporating constraints for handling fragile objects through linear programming techniques.",
        tools:["Python3", "matplotlib", "Linear Programing", "Simplex Algorithm"], 
        link:GitHubLink,
    }
  
  ]

  return (
    <>
    <Header></Header>
    <div className="projects">
      <br />
      <br />
      <h2 className="projects-title">Projects</h2>
      
      {/* Developing Projects */}
      <h3 className="project-category">Developing Projects</h3>
      <div className="projects-container">
        {projectList.map((project, index) => (
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
              View code
            </a>
          </div>
        ))}
      </div>

      {/* Numerical and Mathematic Modeling Projects */}
      <h3 className="project-category">Numerical and Mathematic Modeling Projects</h3>
      <div className="projects-container">
        {AlgoNumProjectList.map((project, index) => (
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
              View code
            </a>
          </div>
        ))}
      </div>

      {/* Cyber Security Rooms */}
      <Security></Security>
    </div>
    </>
  );
}


export default Projects;
