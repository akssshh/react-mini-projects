
import { useState } from 'react';
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className={`search ${toggle ? 'active' : ''}`}>
      <input type="text" className="input" placeholder="Search..."/>
      <button className="btn" onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default App;
