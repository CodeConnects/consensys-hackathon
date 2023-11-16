import React, { useState, useEffect, useCallback } from 'react';

import StatusBar from './components/StatusBar.js';
import './styles/StatusBar.css';
import SwatScreen from './components/SwatScreen.js';
import './styles/SwatScreen.css';
import ChooseInsect from './components/ChooseInsect.js';
import './styles/ChooseInsect.css';

import './App.css';

function App() {
  const gameLength = 10; // seconds

  const [startTime, setStartTime] = useState(null);
  const [activeInsect, setActiveInsect] = useState({});
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(gameLength);
  const [gameOn, setGameOn] = useState(false);
  const [gameInsects, setGameInsects] = useState([{}]);

  const calculateTimeLeft = () => {
    const now = new Date();
    const timePassed = Math.floor((now - startTime) / 1000);
    return Math.max(gameLength - timePassed, 0);
  };

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

  function getRandomInsect() {
    return insects[Math.floor(Math.random() * insects.length)];
  }

  function createInsect() {
    if (activeInsect === null) {
      setActiveInsect(getRandomInsect());
    }
    const { x, y } = getRandomLocation();
    return (
      <div className='insect' style={{ top: `${y}px`, left: `${x}px` }} onClick={handleCatchInsect}>
        <img
          src={activeInsect.img}
          alt={activeInsect.alt}
          style={{ transform: `rotate(${Math.random() * 360}deg)` }}
        />
      </div>
    )
  }

  function handleCatchInsect() {
    setScore(prevScore => prevScore + 1);
  }

  const gameOver = useCallback(() => {
    alert(`Game Over! You scored ${score} points!`);
    setStartTime(null);  // Reset the start time
  }, [score]);

  // timer functionality
  useEffect(() => {
    if (!gameOn || !startTime) return;

    const timerId = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimer(timeLeft);
      if (timeLeft === 0) {
        clearInterval(timerId);
        setGameOn(false);
        gameOver();
      }
    }, 1000);

    // Cleanup timer when component is unmounted or when game is no longer active
    return () => clearInterval(timerId);
  }, [gameOn, gameOver, startTime]);


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
        createInsect={createInsect}
      />

      <ChooseInsect
        insects={insects}
        activeInsect={activeInsect}
        setActiveInsect={setActiveInsect}
        getRandomLocation={getRandomLocation}
        setGameInsects={setGameInsects}
        setGameOn={setGameOn}
        setStartTime={setStartTime}
        setTimer={setTimer}
        gameLength={gameLength}
      />
    </div>
  );
}

export default App;
