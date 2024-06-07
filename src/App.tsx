import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './pages/Game';
import 'bulma/css/bulma.css';

function Header() {
  return (
    <header>

    </header>
  );
}

function Footer() {
  return (
    <footer></footer>
  );
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Game />
      <Footer /></div>
  );
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
