import { mockedAPIResponse as animalCrossingAmiibo } from '../__mocks__/animal-crossing-amiibo';
import { mockedAPIResponse as marioSportsAmiibo } from '../__mocks__/mario-sports-superstars-amiibo';
import { mockedAPIResponse as pokemonAmiibo } from '../__mocks__/pokemon-amiibo';

import { buildDeck, shuffleDeck, createGameDeck } from './deck-utils';

describe('createGameDeck - tests on createGameDeck function', () => {
  it('should createGameDeck with correct occourrence and lenght', () => {
    const clonedAmibooArray = [...marioSportsAmiibo.amiibo];
    const buildedDeck = createGameDeck([...clonedAmibooArray]);
    expect(buildedDeck).toHaveLength(12); // check on array leght
    for (const amiibo of buildedDeck) {
      const amiiboOccourrence = buildedDeck.filter((amiibooElm) => amiibo.head === amiibooElm.head).length;
      expect(amiiboOccourrence).toEqual(2);
    }
    expect(clonedAmibooArray).toStrictEqual(clonedAmibooArray);
  });
});

describe('shuffleDeck - tests on shuffleDeck function', () => {
  it('should shuffle deck array ', () => {
    const clonedAmibooArray = [...pokemonAmiibo.amiibo].slice(0, 10);
    const shuffeledDeck = shuffleDeck([...clonedAmibooArray]);
    expect(shuffeledDeck).toHaveLength(10); // check on array leght
    expect(shuffeledDeck).toHaveLength(clonedAmibooArray.length); // check on array leght
  });
});

describe('buildDeck - tests on buildDeck function', () => {
  it('test on build Deck ', () => {
    const clonedAmibooArray = [...animalCrossingAmiibo.amiibo];
    const buildedDeck = buildDeck([...clonedAmibooArray].slice(0, 5));
    const expectedDeck = [
      {
        amiiboSeries: 'Super Smash Bros.',
        character: 'Villager',
        gameSeries: 'Animal Crossing',
        head: '01800000',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01800000-00080002.png',
        name: 'Villager',
        release: {
          au: '2014-11-29',
          eu: '2014-11-28',
          jp: '2014-12-06',
          na: '2014-11-21',
        },
        tail: '00080002',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Animal Crossing',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810000',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810000-024b0502.png',
        name: 'Isabelle - Summer Outfit',
        release: {
          au: '2016-03-19',
          eu: '2016-03-18',
          jp: '2016-03-24',
          na: '2016-06-10',
        },
        tail: '024b0502',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Animal Crossing',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810001',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810001-00440502.png',
        name: 'Isabelle',
        release: {
          au: '2015-10-03',
          eu: '2015-10-02',
          jp: '2015-07-30',
          na: '2015-09-25',
        },
        tail: '00440502',
        type: 'Card',
      },
      {
        amiiboSeries: 'Super Smash Bros.',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810000',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810000-037d0002.png',
        name: 'Isabelle',
        release: {
          au: '2019-07-19',
          eu: '2019-07-19',
          jp: '2019-07-19',
          na: '2019-07-26',
        },
        tail: '037d0002',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Animal Crossing',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810001',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810001-01d40502.png',
        name: 'Isabelle - Character Parfait',
        release: { au: null, eu: null, jp: '2015-08-01', na: null },
        tail: '01d40502',
        type: 'Card',
      },
      {
        amiiboSeries: 'Super Smash Bros.',
        character: 'Villager',
        gameSeries: 'Animal Crossing',
        head: '01800000',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01800000-00080002.png',
        name: 'Villager',
        release: {
          au: '2014-11-29',
          eu: '2014-11-28',
          jp: '2014-12-06',
          na: '2014-11-21',
        },
        tail: '00080002',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Animal Crossing',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810000',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810000-024b0502.png',
        name: 'Isabelle - Summer Outfit',
        release: {
          au: '2016-03-19',
          eu: '2016-03-18',
          jp: '2016-03-24',
          na: '2016-06-10',
        },
        tail: '024b0502',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Animal Crossing',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810001',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810001-00440502.png',
        name: 'Isabelle',
        release: {
          au: '2015-10-03',
          eu: '2015-10-02',
          jp: '2015-07-30',
          na: '2015-09-25',
        },
        tail: '00440502',
        type: 'Card',
      },
      {
        amiiboSeries: 'Super Smash Bros.',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810000',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810000-037d0002.png',
        name: 'Isabelle',
        release: {
          au: '2019-07-19',
          eu: '2019-07-19',
          jp: '2019-07-19',
          na: '2019-07-26',
        },
        tail: '037d0002',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Animal Crossing',
        character: 'Isabelle',
        gameSeries: 'Animal Crossing',
        head: '01810001',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810001-01d40502.png',
        name: 'Isabelle - Character Parfait',
        release: { au: null, eu: null, jp: '2015-08-01', na: null },
        tail: '01d40502',
        type: 'Card',
      },
    ];
    expect(buildedDeck).toHaveLength(10); // check on array duplication
    expect(buildedDeck).toStrictEqual(expectedDeck); // should create a deck as espected
    expect(clonedAmibooArray).toStrictEqual(clonedAmibooArray); // check immutability of the function
  });
});
