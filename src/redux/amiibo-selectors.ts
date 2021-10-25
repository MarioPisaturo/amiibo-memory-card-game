import { createGameDeck } from '../utils/deck-utils';
/**
 * BUILD GAME DECK
 */
export const createAmiiboDeck = (state: any, type = 'pokemon') => {
  const amiiboArray = state.amiibo.amiiboCollection[type].amiibo;
  return createGameDeck(amiiboArray || []);
};
