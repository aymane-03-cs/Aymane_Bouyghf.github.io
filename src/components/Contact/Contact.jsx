import React from "react";
import "./Contact.css";
import Header from "../Header/Header";

const Contact = () => {
  return (
    <>
    <Header></Header>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-intro">Feel free to reach out to me with any questions, collaboration opportunities, or professional offers.</p>
      <div className="contact-details">
        <p>
          <i className="fas fa-envelope"></i> 
          <span>Email : </span>
          <a href="mailto:abouyhf@enseirb-matmeca.fr">abouyghf@enseirb-matmeca.fr</a>
        </p>
        <p>
          <i className="fab fa-linkedin"></i> 
          <span>LinkedIn : </span>
          <a
            href="https://fr.linkedin.com/in/aymane-bouyghf-097ab1306"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn Acount
          </a>
        </p>
        <p>
          <i className="fab fa-github"></i> 
          <span>GitHub : </span>
          <a
            href="https://github.com/aymane-03-cs"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Account
          </a>
        </p>
        <p>
          <i className="fas fa-phone"></i> 
          <span>Phone : </span>
          +33 6 14 99 80 52
        </p>
      </div>
    </div>
    </>
  );
};

export default Contact;
