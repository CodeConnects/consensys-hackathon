import StatusBar from './components/StatusBar.js';
import './styles/StatusBar.css';
import ChooseInsect from './components/ChooseInsect.js';
import './styles/ChooseInsect.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Swatter</h1>

        <StatusBar />

        <ChooseInsect />
        
        <button className='btn' id='start-btn'>Start Swatting</button>
      </header>
    </div>
  );
}

export default App;
