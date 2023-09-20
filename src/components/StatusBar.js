function StatusBar({score, setScore, timer, setTimer}) {
  return (
    <div className='status-bar'>
      
      <div className='status-bar-item'>
        <p className='status-bar-title'>Score</p>
        <p className='status-bar-value' id='score'>{score}</p>
      </div>
      
      <div className='status-bar-item'>
        <p className='status-bar-title'>Time</p>
        <p className='status-bar-value' id='time'>{timer}</p>
      </div>
      
    </div>
  );
}

export default StatusBar;
