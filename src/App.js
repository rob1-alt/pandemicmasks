import logo from './logo.svg';
import opensea from './img/opensea.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='openingTitle'>Hello we are PandemicMasks 🦠</h1>
        <a href='https://opensea.io/collection/pandemicmasks'>
          <h2 className='linkOpenSea'>find us on opensea</h2> <img className='logoOpensea' src={opensea}/>
        </a>
        
      </header>
    </div>
  );
}

export default App;
