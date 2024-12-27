import React from 'react';
import './Loader.scss';

function Loader() {
  return (
    <div className="wrapper">
      <ul>
        {Array.from({ length: 25 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}

export default Loader;
