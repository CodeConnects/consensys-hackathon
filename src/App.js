import React, { useState } from 'react';

import StatusBar from './components/StatusBar.js';
import './styles/StatusBar.css';
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
  
  const [activeInsect, setActiveInsect] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Swatter</h1>

        <StatusBar 
          score={score}
          setScore={setScore}
          timer={timer}
          setTimer={setTimer}
        />

        <ChooseInsect 
          insects={insects} 
          activeInsect={activeInsect} 
          setActiveInsect={setActiveInsect}
        />
        
        <button className='btn' id='start-btn'>Start Swatting</button>
      </header>
    </div>
  );
}

export default App;
