import "./App.css";
import React, { useRef } from 'react';
import Applause from './sounds/applause.mp3'
import Boo from './sounds/boo.mp3'
import Gasp from './sounds/gasp.mp3'
import Tada from './sounds/tada.mp3'
import Victory from './sounds/victory.mp3'
import Wrong from './sounds/wrong.mp3'

const sounds = [
  { id: 'applause', name: 'Applause', sound: Applause },
  { id: 'boo', name: 'Boo', sound: Boo },
  { id: 'gasp', name: 'Gasp', sound: Gasp },
  { id: 'tada', name: 'Tada', sound: Tada },
  { id: 'victory', name: 'Victory', sound: Victory },
  { id: 'wrong', name: 'Wrong', sound: Wrong },
];

function App() {

  const audioRefs = {};
  
  const playSound = (id) => {
    if (audioRefs[id]) {
      audioRefs[id].pause();
      audioRefs[id].currentTime = 0;
      audioRefs[id].play();
    }
  };

  return (
    <div className="App" >
      {
        sounds.map((sound) => (
          <button
            key={sound.id}
            className="btn"
            onClick={() => playSound(sound.id)}
          >
            {sound.name}
          </button>
        ))
      }
      {
        sounds.map((sound) => (
          <audio
            key={sound.id}
            ref={(audio) => (audioRefs[sound.id] = audio)}
            id={sound.id}
            
          >
            <source src={sound.sound} type="audio/mp3" />
          </audio>
        ))
      }
    </div>
  );
}

export default App;
