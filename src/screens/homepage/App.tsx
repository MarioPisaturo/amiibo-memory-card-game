import React from 'react';
import { useHistory } from 'react-router-dom';

import { amibooGameSelection, IAmiiboGameSelection } from '../../utils/game-selection';
import Card from '../../components/card/card';
import './App.scss';

function App() {
  const history = useHistory();

  const onCardClicked = (id: number) => {
    const selectedAmiibo = amibooGameSelection.find((elm) => elm.id === id);
    history.push(`/gameboard?type=${selectedAmiibo?.type}`);
  };

  return (
    <div className="app">
      <div className="app-gameboard">
        <p>Welcome to Amiboo memory card game!</p>
        <div className="select-game-container">
          {amibooGameSelection.map((elm: IAmiiboGameSelection) => {
            return <Card {...elm} onCardClicked={onCardClicked} key={elm.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
