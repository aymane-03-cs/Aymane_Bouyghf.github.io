import React from 'react';
import './About.css';
import PhotoCv2 from '../../Pictures/PhotoCv2.jpeg';
import cv2 from '../../assets/cv2.pdf';
import Hobbies from './Hobbies/Hobbies';
import Header from '../Header/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about">
          <img src={PhotoCv2} alt="My Photo" className='about-photo' />
          <p>
            Hello! My name is Aymane Bouyghf.<br />
            I'm a highly motivated and curious second-year engineering student at ENSEIRB-MATMECA Bordeaux,
            specializing in computer science with a passion for cybersecurity.<br />
            With a solid academic foundation gained from preparatory classes and hands-on my two years experience tackling object-oriented programming,
            database management, game development, and network systems, I thrive on tackling complex technical challenges.
          </p>
          <a 
            href={cv2} 
            className="cv-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View My CV
          </a>
        </div>
        <Hobbies />
      </div>
    </>
  );
};

export default About;
