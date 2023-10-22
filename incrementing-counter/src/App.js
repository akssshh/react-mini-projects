import React, { useState, useEffect } from 'react';
import './App.css';

function Counter({ target, title }) {
  const [count, setCount] = useState(0);

  // const increment = target / 200;
  const animationDuration = 1000; // 1000ms (1 second) for the animation

  useEffect(() => {
    let startTimestamp;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const elapsed = timestamp - startTimestamp;
      if (elapsed < animationDuration) {
        const newCount = Math.ceil((elapsed / animationDuration) * target);
        setCount(newCount);
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <div className="counter-container">
      <div className="counter">{count}</div>
      <span>{title}</span>
    </div>
  );
}

function App() {
  return (
    <body className="App">
      <Counter target={12000} title="Twitter Followers" />
      <Counter target={5000} title="YouTube Subscribers" />
      <Counter target={7500} title="Facebook Fans" />
    </body>
  );
}

export default App;
