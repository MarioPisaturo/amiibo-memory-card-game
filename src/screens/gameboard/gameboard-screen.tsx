import React from 'react';
import { useHistory } from 'react-router-dom';

import Gameboard from '../../components/gameboard/gameboard';
import { useQuery } from '../../utils/use-query';
import { amibooGameSelection } from '../../utils/game-selection';

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

function GameboardScreen() {
  const history = useHistory();
  const query = useQuery();
  const type = query.get('type');
  const amiiboType = amibooGameSelection.find((elm) => elm.type === type);

  function onCompletionCallback(moves: number) {
    setTimeout(() => history.push(`/completion?moves=${moves}`), 500);
  }

  return (
    <div className="app">
      <div className="app-gameboard">
        <Gameboard
          id={1}
          type="random"
          backfaceImageUrl={amiiboType?.backfaceUrl}
          cards={defaultCards}
          onCompletionCallback={onCompletionCallback}
        />
      </div>
    </div>
  );
}

export default GameboardScreen;
