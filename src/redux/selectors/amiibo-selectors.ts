import { createGameDeck } from '../../utils/deck-utils';
import { decoreteAmiiboWithId, mapAmiiboModelToCard } from '../../utils/amiibo';
import { ANIMAL_CROSSING_GAME_SERIES } from '../../utils/constants';
import { IAmiiboState } from '../slices/amiibo-slice';

/**
 * Create Game Deck
 */
export const createAmiiboDeck = (state: object, type: string = ANIMAL_CROSSING_GAME_SERIES) => {
  // @ts-ignore ignore type inference
  const amiiboArray = state.amiibo.amiiboCollection[type].amiibo;
  const amibooArrayWithIds = amiiboArray?.map(decoreteAmiiboWithId);
  const deck = createGameDeck(amibooArrayWithIds || []);
  return deck.map(mapAmiiboModelToCard);
};

/**
 * Select app state
 */
export const selectAppState = (state: IAmiiboState) => state.amiibo.appState;
