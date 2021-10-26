/**
 * decare JSDOM test env
 * @jest-environment jsdom
 */
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as reactRedux from 'react-redux';

import { mockedAPIResponse as animalCrossingAmiiboResponse } from '../../__mocks__/animal-crossing-amiibo';
import { mockedAPIResponse as pokemonAmiiboResponse } from '../../__mocks__/pokemon-amiibo';
import { mockedAPIResponse as superMarioAmiiboResponse } from '../../__mocks__/mario-sports-superstars-amiibo';
import { createAmiiboDeck } from '../../redux/selectors/amiibo-selectors';
import Gameboard from '../../components/gameboard/gameboard';

import GameboardScreen, { IGameboardScreen } from './gameboard-screen';

/** Mock react router dom library */
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'http://localhost:3000/gameboard?type=animalCrossing',
  }),
}));

/** Mock react-redux library - useSelector */
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

/** Mock all custom selectors used in Gameboard Screen */
const mockSelectors = (selector: any, store: any) => {
  if (selector === createAmiiboDeck) {
    return createAmiiboDeck(store, 'animalCrossing');
  }
  return selector(store);
};

describe('GameboardScreen', () => {
  beforeEach(() => {
    // @ts-ignore
    useSelectorMock.mockImplementation((selector) => mockSelectors(selector, mockStore));
  });
  afterEach(() => {
    // @ts-ignore
    useSelectorMock.mockClear();
  });

  const mockStore = {
    amiibo: {
      amiiboCollection: {
        pokemon: pokemonAmiiboResponse,
        animalCrossing: animalCrossingAmiiboResponse,
        marioSuperStars: superMarioAmiiboResponse,
      },
      error: null,
      appState: 'AMIIBO_LOADED',
    },
  };

  const useSelectorMock = reactRedux.useSelector;

  it('should render a GameboardScreen with gameboard LOADED', () => {
    const props: IGameboardScreen = {};
    const wrapper = shallow(<GameboardScreen {...props} />);
    expect(wrapper).toHaveLength(1);
    const gameboard = wrapper.find(Gameboard);
    expect(gameboard).toHaveLength(1);
    expect(gameboard.prop('cards')).toHaveLength(12);
  });

  it('should render a GameboardScreen with gameboard LOADED and CARDS', () => {
    const props: IGameboardScreen = {};
    const wrapper = mount(<GameboardScreen {...props} />);
    expect(wrapper).toHaveLength(1);
    const gameboard = wrapper.find(Gameboard);
    const cards = wrapper.find('Card');
    expect(gameboard).toHaveLength(1);
    expect(cards).toHaveLength(12);
  });
});
