import React from 'react';

import './App.scss';
import Gameboard from './components/gameboard/gameboard';

const defaultCards = [
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 4 },
  { imageUrl: './assets/animal-crossing.png', id: 4 },
  { imageUrl: './assets/animal-crossing.png', id: 5 },
  { imageUrl: './assets/animal-crossing.png', id: 5 },
  { imageUrl: './assets/animal-crossing.png', id: 6 },
  { imageUrl: './assets/animal-crossing.png', id: 6 },
  { imageUrl: './assets/animal-crossing.png', id: 7 },
  { imageUrl: './assets/animal-crossing.png', id: 7 },
];

function App() {
  return (
    <div className="app">
      <div className="app-gameboard">
        <p>Welcome to Amiboo memory card game!</p>
        <Gameboard id={1} type="random" cards={defaultCards} />
      </div>
    </div>
  );
}

export default App;
