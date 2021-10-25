import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { amiiboGameSelection, IAmiiboGameSelection } from '../../utils/game-selection';
import Card from '../../components/card/card';

import './homepage.scss';

function Homepage() {
  const history = useHistory();

  const onAmiiboTypeSelected = (id: number) => {
    const selectedAmiibo = amiiboGameSelection.find((elm) => elm.id === id);
    history.push(`/gameboard?type=${selectedAmiibo?.type}`);
  };

  return (
    <div className="app">
      <div className="app-gameboard">
        <p>Welcome to Amiboo memory card game!</p>
        <div className="select-game-container">
          {amiiboGameSelection.map((elm: IAmiiboGameSelection) => {
            return <Card {...elm} onCardClicked={onAmiiboTypeSelected} key={elm.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
