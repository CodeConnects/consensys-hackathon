import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Swatter</h1>
        
        <h2>Who You Swattin?</h2>
        <ul class="insects-list">
          
          <li class="insect">
            <p>Mosquito</p>
            <img src="https://pngimg.com/uploads/mosquito/small/mosquito_PNG18158.png" alt="mosquito" class="insect-img" />
          </li>
          
          <li class="insect">
            <p>Spider</p>
            <img src="https://pngimg.com/uploads/spider/spider_PNG20.png" alt="spider" class="insect-img" />
          </li>

          <li class="insect">
            <p>Fly</p>
            <img src="https://pngimg.com/uploads/fly/fly_PNG3946.png" alt="fly" class="insect-img" />
          </li>

          <li class="insect">
            <p>Roach</p>
            <img src="https://pngimg.com/uploads/roach/roach_PNG12163.png" alt="roach" class="insect-img" />
          </li>

        </ul>
        
        <button className='btn' id='start-btn'>Start Swatting</button>
      </header>
    </div>
  );
}

export default App;
