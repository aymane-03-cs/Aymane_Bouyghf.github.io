import React from 'react';
import './Home.scss';   
function Home() {
  
  return (
    <div className="home">
      <div className="stars">
        {[...Array(50)].map((_, index) => (
          <div className="star" key={index}></div>
        ))}
      </div>

      <div className="home-intro"> Hi, I'm Aymane BOUYGHF</div>
      <div className='home'> I am a Second year Computer science student at <strong> ENSEIRB-Matmeca Bordeaux.</strong></div>
      <div className='home'>I am interested in Cyber security, Machine Learning and advanced IT technologies.</div>
      <div className="home"> I am actively seeking a <strong>3-4 month internship </strong>opportunity that would begin in July 2025.</div>

    </div>
  );
}

export default Home;
