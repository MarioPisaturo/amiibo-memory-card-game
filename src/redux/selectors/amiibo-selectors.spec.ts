import { mockedAPIResponse as pokemonAmiiboResponse } from '../../__mocks__/pokemon-amiibo';
import { STATE_LOADED, STATE_LOADING } from '../slices/amiibo-slice';
import { CARD_ITEM_STATE_BACKFACED } from '../../components/card/card';

import { createAmiiboDeck, selectAppState } from './amiibo-selectors';

const mockedResponse = {
  amiibo: pokemonAmiiboResponse.amiibo,
};

const mockedResponseEmpty = {
  amiibo: [],
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
    const amiiboDeck = createAmiiboDeck(mockedResponse);
    expect(amiiboDeck).toHaveLength(12);
    amiiboDeck.forEach((amiibo) => {
      expect(amiibo.id).toBeDefined();
      expect(amiibo.imageUrl).toBeDefined();
      expect(amiibo.state).toBeDefined();
      expect(amiibo.state).toEqual(CARD_ITEM_STATE_BACKFACED);
    });
  });

  it('should createGameDeck with empty model', () => {
    expect(createAmiiboDeck(mockedResponseEmpty)).toStrictEqual([]);
  });
});

describe('selectAppState()', () => {
  it('should createGameDeck with empty model', () => {
    // @ts-ignore typecheck on mocked store
    expect(selectAppState(mockStoreEmpty)).toStrictEqual(STATE_LOADING);
  });
});
