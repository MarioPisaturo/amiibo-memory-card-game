import { createGameDeck } from '../../utils/deck-utils';
import { decoreteAmiiboWithId, mapAmiiboModelToCard } from '../../utils/amiibo';
import { IAmiiboState } from '../slices/amiibo-slice';
import { IResponse } from '../../service/amiibo-api';

export const createAmiiboDeck = (amiiboResponse: IResponse) => {
  const amiiboArray = amiiboResponse.amiibo;
  const amibooArrayWithIds = amiiboArray?.map(decoreteAmiiboWithId);
  const deck = createGameDeck(amibooArrayWithIds || []);
  return deck.map(mapAmiiboModelToCard);
};

/**
 * Select app state
 */
export const selectAppState = (state: IAmiiboState) => state.amiibo.appState;
