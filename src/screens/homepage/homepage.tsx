import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { amiiboGameSelection, IAmiiboGameSelection } from '../../utils/game-selection';
import Card from '../../components/card/card';
import { createAmiiboDeck } from '../../redux/amiibo-selectors';

import './homepage.scss';

function Homepage() {
  const history = useHistory();
  const deck = useSelector((store) => createAmiiboDeck(store, 'animalCrossing'));

  console.log(deck);

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
