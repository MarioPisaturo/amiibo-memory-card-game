import { IAmiibo } from '../typings/amiibo';

export const buildDeck = (amiiboArray: IAmiibo[]): IAmiibo[] => [...amiiboArray].concat(amiiboArray);

export const shuffleDeck = (amiiboArray: IAmiibo[]): IAmiibo[] => {
  const arrayToShuffle = [...amiiboArray];
  // The Fisher-Yates algorith
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arrayToShuffle[i];
    arrayToShuffle[i] = arrayToShuffle[j];
    arrayToShuffle[j] = temp;
  }
  return arrayToShuffle;
};

export const createGameDeck = (amiiboArray: IAmiibo[], maxDeckLenght = 6, deckMaxSize = 50): IAmiibo[] => {
  const deck = shuffleDeck([...amiiboArray].slice(0, deckMaxSize)).slice(0, maxDeckLenght);
  return buildDeck(deck);
};
