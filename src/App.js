import logo from './logo.svg';
import './App.css';
import key from './apikey.js'
function App() {

  const apikey = process.env.REACT_APP_s_key;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trying website= {key}.
        </a>
      </header>
    </div>
  );
}

export default App;
