/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { mockedDeckx12, mockedDeckx6 } from '../../__mocks__/deck';

import Gameboard, { IGameboard } from './gameboard';

/** GAMEBOARD TEST SUITE
 * 1. Shoud render all cards (initially in backfaced state)
 * 2. Shoud update cards "state"
 * 3. Shoud call onCompletion Callback
 * 4. Simulate a Match
 *
 */

describe('Gameboard', () => {
  function makeProps(
    overrideProps: IGameboard = {
      id: 1,
      cards: mockedDeckx12.cards,
      type: 'pokemon',
      onCompletionCallback: () => {},
    }
  ): IGameboard {
    return {
      ...overrideProps,
    };
  }

  it('should render a Default Gameboard with all cards ', () => {
    const props: IGameboard = makeProps();
    const wrapper = shallow(<Gameboard {...props} />);
    expect(wrapper).toHaveLength(1);
    const cards = wrapper.find('Card');

    expect(cards).toHaveLength(12); // should render all 12 cards
    cards.forEach((card) => expect(card.prop('state')).toBe('backfaced')); // backfaced
  });

  it('should render a Default Gameboard with 6 cards ', () => {
    const props: IGameboard = {
      ...makeProps(),
      cards: mockedDeckx6.cards,
    };
    const wrapper = mount(<Gameboard {...props} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('Card')).toHaveLength(6);
  });
});
