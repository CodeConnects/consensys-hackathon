function StatusBar() {
  return (
    <div className='status-bar'>
      <div className='status-bar__item'>
        <p className='status-bar__title'>Score</p>
        <p className='status-bar__value' id='score'>0</p>
      </div>
      
      <div className='status-bar__item'>
        <p className='status-bar__title'>Time</p>
        <p className='status-bar__value' id='time'>0</p>
      </div>
    </div>
  );
}

export default StatusBar;
