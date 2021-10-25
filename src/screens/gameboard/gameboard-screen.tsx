import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Gameboard from '../../components/gameboard/gameboard';
import { useQuery } from '../../utils/use-query';
import { amiiboGameSelection } from '../../utils/game-selection';
import { createAmiiboDeck } from '../../redux/amiibo-selectors';
import { ANIMAL_CROSSING_GAME_SERIES } from '../../utils/constants';

const DEFAULT_DECK_TYPE = ANIMAL_CROSSING_GAME_SERIES;

function GameboardScreen() {
  const history = useHistory();
  const query = useQuery();
  const type = query.get('type');
  const amiiboConfig = amiiboGameSelection.find((elm) => elm.type === type);
  const deck = useSelector((store) => createAmiiboDeck(store, amiiboConfig?.type || DEFAULT_DECK_TYPE));

  function onCompletionCallback(moves: number) {
    setTimeout(() => history.push(`/completion?moves=${moves}`), 500);
  }

  return (
    <div className="app">
      <div className="app-gameboard">
        <Gameboard
          id={1}
          type="random"
          backfaceImageUrl={amiiboConfig?.backfaceUrl}
          cards={deck}
          onCompletionCallback={onCompletionCallback}
        />
      </div>
    </div>
  );
}

export default GameboardScreen;
