import './App.css';
import React, { useState } from 'react';

function RandomChoicePicker() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  const createTags = (input) => {
    const tagArray = input.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setTags(tagArray);
  }

  const randomSelect = () => {
    if (tags.length > 0) {
      const times = 30;
      let count = 0;

      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * tags.length);
        setSelectedTag(tags[randomIndex]);
        count++;

        if (count === times) {
          clearInterval(interval);
        }
      }, 100);
    }
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleInputKeyUp = (e) => {
    if (e.key === 'Enter') {
      randomSelect();
      setTimeout(() => {
        setInput('');
      }, 10);
    }
  }

  return (
    <div className="container">
      <h3>Enter all of the choices divided by a comma (','). Press Enter when you're done</h3>
      <input
        type="text"
        placeholder="Enter choices here..."
        value={input}
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp}
      />

      <div id="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      {selectedTag && (
        <div className="selected-tag">
          <p>Randomly Selected:</p>
          <span className="tag">{selectedTag}</span>
        </div>
      )}
    </div>
  );
}

export default RandomChoicePicker;

