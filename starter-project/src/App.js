import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [joke, setJoke] = useState('Joke goes here')

  useEffect(() => {
    generateJoke();
  }, []);

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()
  
  setJoke(data.joke)
}


  return (
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">{joke}</div>
      <button id="jokeBtn" class="btn" onClick={()=> generateJoke()} >Get Another Joke</button>
    </div>
  )
}

export default App