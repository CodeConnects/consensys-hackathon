function StatusBar({score, setScore, timer, setTimer, setGameInsects, setGameOn, gameLength}) {
  
  const handleReset = () => {
    setScore(0);
    setTimer(gameLength);
    document.querySelector('.choose-insect h2').classList.remove('hidden');
    document.querySelector('#start-btn').classList.remove('hidden');
    document.querySelector('.choose-insect li:nth-child(1)').classList.remove('hidden');
    document.querySelector('.choose-insect li:nth-child(2)').classList.remove('hidden');
    document.querySelector('.choose-insect li:nth-child(3)').classList.remove('hidden');
    document.querySelector('.choose-insect li:nth-child(4)').classList.remove('hidden');

    document.querySelector('h1').classList.remove('game-on');

    document.querySelector('.status-bar').classList.remove('game-on');
    document.querySelector('.status-bar').classList.add('game-off');

    setGameInsects([]);
    setGameOn(false);
  }
  
  return (
    <div className='status-bar game-off'>
      
      <div className='status-bar-item'>
        <p className='status-bar-title'>Score</p>
        <p className='status-bar-value' id='score'>{score}</p>
      </div>

      <button className='btn' id='help-btn' onClick={() => alert('Help Text')}>Help</button>

      <button className='btn' id='reset-btn' onClick={handleReset}>Reset</button>
      
      <div className='status-bar-item'>
        <p className='status-bar-title'>Time</p>
        <p className='status-bar-value' id='time'>{timer}</p>
      </div>
      
    </div>
  );
}

export default StatusBar;
