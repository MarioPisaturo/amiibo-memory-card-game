import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Gameboard from '../../components/gameboard/gameboard';
import { useQuery } from '../../utils/use-query';
import { amiiboGameSelection } from '../../utils/game-selection';
import { createAmiiboDeck, selectAppState } from '../../redux/selectors/amiibo-selectors';
import { STATE_LOADING } from '../../redux/slices/amiibo-slice';
import { ANIMAL_CROSSING_GAME_SERIES } from '../../utils/constants';

import './gameboard-screen.scss';

const DEFAULT_DECK_TYPE = ANIMAL_CROSSING_GAME_SERIES;

const isLoading = (appState: string) => appState === STATE_LOADING;

export interface IGameboardScreen {}

const GameboardScreen: React.FC<IGameboardScreen> = () => {
  const history = useHistory();
  const query = useQuery();
  const type = query.get('type');
  const amiiboConfig = amiiboGameSelection.find((elm) => elm.type === type);
  const appState = useSelector(selectAppState);
  const deck = useSelector((store) => createAmiiboDeck(store, amiiboConfig?.type || DEFAULT_DECK_TYPE));

  const onCompletionCallback = (moves: number) => {
    setTimeout(() => history.push(`/completion?moves=${moves}`), 500);
  };

  return (
    <div className="app-gameboard">
      {isLoading(appState) ? (
        <Fragment>
          {/** Loading Component should be placed here */}
          <p>Loading...</p>
        </Fragment>
      ) : (
        <Gameboard
          id={1}
          type={type || 'default'}
          backfaceImageUrl={amiiboConfig?.backfaceUrl}
          cards={deck}
          onCompletionCallback={onCompletionCallback}
        />
      )}
    </div>
  );
};

export default GameboardScreen;
