/**
 * decare JSDOM test env
 * @jest-environment jsdom
 */
import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { mockedDeckx12, mockedDeckx6 } from '../../__mocks__/deck';
import Card, { CARD_ITEM_STATE_ENABLED, CARD_ITEM_STATE_MATCHED, CARD_ITEM_STATE_BACKFACED } from '../card/card';

import Gameboard, { IGameboard } from './gameboard';

/** GAMEBOARD  - TEST SUITE
 * 1. Shoud render all cards (initially in backfaced state)
 * 2. Shoud update cards "state" after click
 * 3. Shoud call onCompletion Callback
 * 4. Simulate a Matching behavior
 * 5. Simulate a Matching behavior failed
 * 6. Simulate a Game Completion Win
 * 7. Empty cards array shoud not cause a crash
 * 8. ... and so on
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
    const cards = wrapper.find(Card);

    expect(cards).toHaveLength(12); // should render all 12 cards
    cards.forEach((card) => expect(card.prop('state')).toBe(CARD_ITEM_STATE_BACKFACED)); // backfaced
  });

  it('should render a Default Gameboard with 6 cards ', () => {
    const props: IGameboard = {
      ...makeProps(),
      cards: mockedDeckx6.cards,
    };
    const wrapper = shallow(<Gameboard {...props} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Card)).toHaveLength(6);
  });

  it('should update Clicked card in Gameboard ', () => {
    const props: IGameboard = {
      ...makeProps(),
      cards: mockedDeckx6.cards,
    };
    const wrapper = mount(<Gameboard {...props} />);
    const card0 = wrapper.find(Card).at(0);
    card0.find('div').at(0).simulate('click');
    const card0State = wrapper.find(Card).at(0).render().attr('data-state');
    expect(card0State).toEqual(CARD_ITEM_STATE_ENABLED);
  });

  it('MATCHING BEHAVIOR - should match cards with the same IDs', () => {
    const props: IGameboard = {
      ...makeProps(),
      cards: mockedDeckx6.cards,
    };
    const wrapper = mount(<Gameboard {...props} />);
    const card0 = wrapper.find(Card).at(0);
    const card1 = wrapper.find(Card).at(1);

    // simulate click on card1
    card0.find('div').at(0).simulate('click');
    const card0State = card0.render().attr('data-state');
    expect(card0State).toEqual(CARD_ITEM_STATE_ENABLED);

    // simulate click on card2
    card1.find('div').at(0).simulate('click');
    const card0StateMatched = card0.render().attr('data-state');
    const card1StateMatched = card1.render().attr('data-state');
    expect(card0StateMatched).toEqual(CARD_ITEM_STATE_MATCHED);
    expect(card1StateMatched).toEqual(CARD_ITEM_STATE_MATCHED);
  });

  it('MATCHING BEHAVIOR FAILED - should match cards with the same IDs', () => {
    const props: IGameboard = {
      ...makeProps(),
      cards: mockedDeckx6.cards,
    };
    const wrapper = mount(<Gameboard {...props} />);
    const cardA = wrapper.find(Card).at(0);
    const cardB = wrapper.find(Card).at(5);
    const cardC = wrapper.find(Card).at(2);

    // simulate click on card1
    cardA.find('div').at(0).simulate('click');
    const card0State = cardA.render().attr('data-state');
    expect(card0State).toEqual(CARD_ITEM_STATE_ENABLED);

    // simulate click on card2
    cardB.find('div').at(0).simulate('click');
    cardC.find('div').at(0).simulate('click'); // also simulate other click instead of mock setTimeout function

    const cardAStateMatched2 = cardA.render().attr('data-state');
    const cardBStateMatched2 = cardB.render().attr('data-state');
    const cardCStateMatched2 = cardC.render().attr('data-state');

    expect(cardAStateMatched2).toEqual(CARD_ITEM_STATE_BACKFACED);
    expect(cardBStateMatched2).toEqual(CARD_ITEM_STATE_BACKFACED);
    expect(cardCStateMatched2).toEqual(CARD_ITEM_STATE_ENABLED);
  });

  it('COMPLETION BEHAVIOR (in 3 moves for testing pourpose) - should call onCompletionCallback on win', () => {
    const spyOnWin = jest.fn((moves: number) => moves === 3); // WIN in 3 MOVES

    const props: IGameboard = {
      ...makeProps(),
      cards: mockedDeckx6.cards,
      onCompletionCallback: spyOnWin,
    };
    const wrapper = mount(<Gameboard {...props} />);
    const card1 = wrapper.find(Card).at(0);
    const card2 = wrapper.find(Card).at(1);
    const card3 = wrapper.find(Card).at(2);
    const card4 = wrapper.find(Card).at(3);
    const card5 = wrapper.find(Card).at(4);
    const card6 = wrapper.find(Card).at(5);

    // simulate click sequence to win the game
    // very simple sequence for testing pourpose
    card1.find('div').at(0).simulate('click');
    card2.find('div').at(0).simulate('click');
    card3.find('div').at(0).simulate('click');
    card4.find('div').at(0).simulate('click');
    card5.find('div').at(0).simulate('click');
    card6.find('div').at(0).simulate('click');

    const card1State = card1.render().attr('data-state');
    const card2State = card2.render().attr('data-state');
    const card3State = card3.render().attr('data-state');
    const card4State = card4.render().attr('data-state');
    const card5State = card5.render().attr('data-state');
    const card6State = card6.render().attr('data-state');

    expect(card1State).toEqual(CARD_ITEM_STATE_ENABLED); // enabled (after matched)
    expect(card2State).toEqual(CARD_ITEM_STATE_ENABLED); // enabled (after matched)
    expect(card3State).toEqual(CARD_ITEM_STATE_ENABLED); // enabled (after matched)
    expect(card4State).toEqual(CARD_ITEM_STATE_ENABLED); // enabled (after matched)
    expect(card5State).toEqual(CARD_ITEM_STATE_MATCHED); // last 2 matched to win
    expect(card6State).toEqual(CARD_ITEM_STATE_MATCHED); // last 2 matched to win
    expect(spyOnWin).toHaveBeenCalledTimes(1);
    expect(spyOnWin).toHaveLastReturnedWith(true); // id === 1234
  });

  it('should render a Gameboard with 0 cards- empty cards array shoud not cause a crash ', () => {
    const props: IGameboard = {
      ...makeProps(),
      cards: [],
    };
    const wrapper = shallow(<Gameboard {...props} />);
    expect(wrapper).toHaveLength(1);
    const cards = wrapper.find(Card);
    expect(cards).toHaveLength(0);
  });
});
