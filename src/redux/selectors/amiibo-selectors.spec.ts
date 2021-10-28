import { mockedAPIResponse as animalCrossingAmiiboResponse } from '../../__mocks__/animal-crossing-amiibo';
import { mockedAPIResponse as pokemonAmiiboResponse } from '../../__mocks__/pokemon-amiibo';
import { mockedAPIResponse as superMarioAmiiboResponse } from '../../__mocks__/mario-sports-superstars-amiibo';
import { STATE_LOADED, STATE_LOADING } from '../slices/amiibo-slice';
import { CARD_ITEM_STATE_BACKFACED } from '../../components/card/card';

import { createAmiiboDeck, selectAppState } from './amiibo-selectors';

const mockStore = {
  amiibo: {
    amiiboCollection: {
      pokemon: pokemonAmiiboResponse,
      animalCrossing: animalCrossingAmiiboResponse,
      marioSuperStars: superMarioAmiiboResponse,
    },
    error: undefined,
    appState: STATE_LOADED,
  },
};

const mockStoreEmpty = {
  amiibo: {
    amiiboCollection: {
      pokemon: [],
      animalCrossing: [],
      marioSuperStars: [],
    },
    error: null,
    appState: STATE_LOADING,
  },
};

describe('createAmiiboDeck()', () => {
  it('should createGameDeck', () => {
    const amiiboDeck = createAmiiboDeck(mockStore);
    expect(amiiboDeck).toHaveLength(12);
    amiiboDeck.forEach((amiibo) => {
      expect(amiibo.id).toBeDefined();
      expect(amiibo.imageUrl).toBeDefined();
      expect(amiibo.state).toBeDefined();
      expect(amiibo.state).toEqual(CARD_ITEM_STATE_BACKFACED);
    });
  });

  it('should createGameDeck with empty model', () => {
    expect(createAmiiboDeck(mockStoreEmpty)).toStrictEqual([]);
  });
});

describe('selectAppState()', () => {
  it('should selectAppState ', () => {
    // @ts-ignore typecheck on mocked store
    expect(selectAppState(mockStore)).toEqual(STATE_LOADED);
  });

  it('should createGameDeck with empty model', () => {
    // @ts-ignore typecheck on mocked store
    expect(selectAppState(mockStoreEmpty)).toStrictEqual(STATE_LOADING);
  });
});
