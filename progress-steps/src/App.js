import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentActive, setCurrentActive] = useState(1);

  const circles = document.querySelectorAll('.circle');

  const update = () => {
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    const actives = document.querySelectorAll('.active');

    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  };

  const nextStep = () => {
    setCurrentActive(currentActive + 1);
  };

  const prevStep = () => {
    setCurrentActive(currentActive - 1);
  };

  useEffect(() => {
    update();
  }, [currentActive]);

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className={`circle ${currentActive >= 1 ? 'active' : ''}`}>1</div>
        <div className={`circle ${currentActive >= 2 ? 'active' : ''}`}>2</div>
        <div className={`circle ${currentActive >= 3 ? 'active' : ''}`}>3</div>
        <div className={`circle ${currentActive >= 4 ? 'active' : ''}`}>4</div>
      </div>

      <button className="btn" id="prev" onClick={prevStep} disabled={currentActive === 1}>
        Prev
      </button>
      <button className="btn" id="next" onClick={nextStep} disabled={currentActive === circles.length}>
        Next
      </button>
    </div>
  );
}

export default App;
