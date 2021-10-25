import { createGameDeck } from '../utils/deck-utils';
import { decoreteAmiiboWithId, mapAmiiboModelToCard } from '../utils/amiibo';
import { ANIMAL_CROSSING_GAME_SERIES } from '../utils/constants';

/**
 * CREATE GAME DECK
 */
export const createAmiiboDeck = (state: any, type = ANIMAL_CROSSING_GAME_SERIES) => {
  const amiiboArray = state.amiibo.amiiboCollection[type].amiibo;
  const amibooArrayWithIds = amiiboArray?.map(decoreteAmiiboWithId);
  const deck = createGameDeck(amibooArrayWithIds || []);
  return deck.map(mapAmiiboModelToCard);
};

export const selectAppState = (state: any) => state.amiibo.appState;
