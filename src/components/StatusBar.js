function StatusBar() {
  return (
    <div className='status-bar'>
      
      <div className='status-bar-item'>
        <p className='status-bar-title'>Score</p>
        <p className='status-bar-value' id='score'>0</p>
      </div>
      
      <div className='status-bar-item'>
        <p className='status-bar-title'>Time</p>
        <p className='status-bar-value' id='time'>0</p>
      </div>
      
    </div>
  );
}

export default StatusBar;
