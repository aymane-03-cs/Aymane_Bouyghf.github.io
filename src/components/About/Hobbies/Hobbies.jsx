import React from 'react';
import './Hobbies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlane, faGamepad, faCode, faMountain, faCamera, faSkating } from '@fortawesome/free-solid-svg-icons';
import { faFootball } from '@fortawesome/free-solid-svg-icons/faFootball';

const Hobbies = () => {
  const hobbies = [
    { 
      name: 'travel', 
      icon: faPlane, 
      description: "Currently, I visited five countries." 
    },
    { 
      name: 'Sport', 
      icon: faSkating, 
      description: "Football:frequently  Skate, Surf: Often" 
    },
    { 
      name: 'Coding', 
      icon: faCode, 
      description: "Coding is a part of my carrier as same as a part of my joy time." 
    },
    { 
      name: 'Photography', 
      icon: faCamera, 
      description: "Visit my instagram account @__ayman_e for Pictures and videos." 
    }
  ];
  const languages = [
    {
     language: "English",
     level:"Fluent",
    }, 
    { 
     language:"Frensh",
     level: "Fluent"
    },
    { 
     language:"Arabic",
     level: "Native"
    },
    {
     language:"Spanish",
     level:"Beginner",
    }
];

  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      <div className="hobby-cards">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <FontAwesomeIcon icon={hobby.icon} size="2x" />
                <p>{hobby.name}</p>
              </div>
              <div className="card-back">
                <p>{hobby.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Languages</h2>
      <div className="language-list">
          {languages.map((lang, index) => (
            <div className="language-item" key={index}>
              <span className='Language'>{lang.language}: </span>
              <span className='Language-level'>{lang.level}</span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Hobbies;
