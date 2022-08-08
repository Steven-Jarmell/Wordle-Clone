import React from 'react';
import './App.css';
import Gameboard from './Components/Gameboard';
import Keyboard from './Components/Keyboard';
import Navbar from './Components/Navbar';
import { randomWord } from './Components/GenerateRandomWord';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gameboard />
      <Keyboard />
    </div>
  );
}

export default App;
