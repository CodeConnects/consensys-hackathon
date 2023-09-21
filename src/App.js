import React, { useState, useEffect, useCallback } from 'react';

import StatusBar from './components/StatusBar.js';
import './styles/StatusBar.css';
import SwatScreen from './components/SwatScreen.js';
import './styles/SwatScreen.css';
import ChooseInsect from './components/ChooseInsect.js';
import './styles/ChooseInsect.css';

import './App.css';

function App() {

  const insects = [
    {
      name: 'Mosquito',
      img: 'https://pngimg.com/uploads/mosquito/small/mosquito_PNG18158.png',
      alt: 'mosquito'
    },
    {
      name: 'Spider',
      img: 'https://pngimg.com/uploads/spider/spider_PNG20.png',
      alt: 'spider'
    },
    {
      name: 'Fly',
      img: 'https://pngimg.com/uploads/fly/fly_PNG3946.png',
      alt: 'fly'
    },
    {
      name: 'Roach',
      img: 'https://pngimg.com/uploads/roach/roach_PNG12163.png',
      alt: 'roach'
    }
  ];

  function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
  }
  
  const [activeInsect, setActiveInsect] = useState(null);
  const [score, setScore] = useState(0);
  const [gameLength, setGameLength] = useState(10); // seconds
  const [timer, setTimer] = useState(gameLength);
  const [gameOn, setGameOn] = useState(false);
  const [gameInsects, setGameInsects] = useState([]);

  const gameOver = useCallback(() => {
    alert(`Game Over! You scored ${score} points!`);
  }, [score]);

  useEffect(() => {
    if (!gameOn) return;
  
    const timerId = setInterval(() => {
      setTimer(prevSeconds => {
        if (prevSeconds === 1) {
          setGameOn(false);
          gameOver();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  
    // Cleanup timer when component is unmounted or when game is no longer active
    return () => clearInterval(timerId);
  }, [gameOn, gameOver]);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Swatter</h1>

        <StatusBar 
          score={score}
          setScore={setScore}
          timer={timer}
          setTimer={setTimer}
          setGameInsects={setGameInsects}
          setGameOn={setGameOn}
          gameLength={gameLength}
        />
      </header>

      <SwatScreen 
        gameOn={gameOn}
        gameInsects={gameInsects}
      />

      <ChooseInsect 
        insects={insects} 
        activeInsect={activeInsect} 
        setActiveInsect={setActiveInsect}
        getRandomLocation={getRandomLocation}
        setGameInsects={setGameInsects}
        setGameOn={setGameOn}
      />
    </div>
  );
}

export default App;
