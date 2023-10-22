import React, { useState } from 'react';
import './App.css'

function SplitLanding() {
  const [hoveredSide, setHoveredSide] = useState(null);

  const handleMouseEnter = (side) => {
    setHoveredSide(side);
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
  };

  return (
    <div className={`container ${hoveredSide ? `hover-${hoveredSide}` : ''}`}>
      <div className="split left" onMouseEnter={() => handleMouseEnter('left')} onMouseLeave={handleMouseLeave}>
        <h1>Playstation 5</h1>
        <a href="/" className="btn">Buy Now</a>
      </div>
      <div className="split right" onMouseEnter={() => handleMouseEnter('right')} onMouseLeave={handleMouseLeave}>
        <h1>XBox Series X</h1>
        <a href="/" className="btn">Buy Now</a>
      </div>
    </div>
  );
}

export default SplitLanding;
