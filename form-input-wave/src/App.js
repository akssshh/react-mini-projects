import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');

    const updatedLabels = Array.from(labels).map((label) => {
      const text = label.innerText;
      const spans = Array.from(text).map((letter, idx) => (
        <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
          {letter}
        </span>
      ));
      return <label>{spans}</label>;
    });

    setLabels(updatedLabels);
  }, []);

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <input type="text" required />
          {labels[0]}
        </div>

        <div className="form-control">
          <input type="password" required />
          {labels[1]}
        </div>

        <button className="btn">Login</button>

        <p className="text">
          Don't have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
};

export default App;
