function ChooseInsect({ insects, activeInsect, setActiveInsect, getRandomLocation, setGameInsects, setGameOn }) {

  const handleStart = () => {
    document.querySelector('.choose-insect h2').classList.add('hidden');
    document.querySelector('#start-btn').classList.add('hidden');
    document.querySelector('.choose-insect li:nth-child(1)').classList.add('hidden');
    document.querySelector('.choose-insect li:nth-child(2)').classList.add('hidden');
    document.querySelector('.choose-insect li:nth-child(3)').classList.add('hidden');
    document.querySelector('.choose-insect li:nth-child(4)').classList.add('hidden');

    document.querySelector('h1').classList.add('game-on');

    document.querySelector('.status-bar').classList.add('game-on');
    document.querySelector('.status-bar').classList.remove('game-off');

    const newInsect = {
      key: 0, ...getRandomLocation()
    };
    setGameInsects([newInsect]);
    setGameOn(true);
    //alert('Game On!');
  };
  
  return (
    <div className="choose-insect">
      <h2>Whatchu Swattin?</h2>
      <ul>
        {insects.map(insect => (
          <li
            key={insect.name}
            className={`insect ${insect.name === activeInsect ? 'active' : ''}`}
            onClick={() => setActiveInsect(insect.name)}
          >
            <p>{insect.name}</p>
            <img src={insect.img} alt={insect.alt} className="insect-img" />
          </li>
        ))}
      </ul>

      <button className='btn' id='start-btn' onClick={handleStart}>Start Swatting</button>

    </div>
  );
}

export default ChooseInsect;
