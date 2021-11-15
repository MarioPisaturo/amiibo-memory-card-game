import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { IDeckModel } from '../../typings/deck';
import { ICardModel } from '../../typings/card';
import Card, { CARD_ITEM_STATE_ENABLED, CARD_ITEM_STATE_MATCHED, CARD_ITEM_STATE_BACKFACED } from '../card/card';

import { reducer, ACTIONS, initialState, ICardsCleared } from './gameboard-reducer';

import './gameboard.scss';

export interface IGameboard extends IDeckModel {
  onCompletionCallback?: (moves: number) => any;
  backfaceImageUrl?: string;
}

const checkCardStatus = (index: number, cardsOpened: number[], cardsCleared: ICardsCleared, card: ICardModel) => {
  if (cardsOpened.includes(index)) {
    return cardsOpened.length === 1 ? CARD_ITEM_STATE_ENABLED : CARD_ITEM_STATE_MATCHED;
  } else if (cardsCleared[card.id]) {
    return CARD_ITEM_STATE_ENABLED;
  }
  return CARD_ITEM_STATE_BACKFACED;
};

const Gameboard: React.FC<IGameboard> = ({ cards = [], id, onCompletionCallback = () => {}, backfaceImageUrl }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const onCardClicked = (cardId: number) => {
    if (state.cardsOpened.length === 1) {
      dispatch({ type: ACTIONS.INCREMENT_MOVES });
      dispatch({ type: ACTIONS.ADD_CARDS_OPEN, payload: { cardId } });
    } else {
      dispatch({ type: ACTIONS.SET_CARDS_OPEN, payload: { cardId } });
    }
  };

  /** Cards open/close hook */
  useEffect(() => {
    if (state.cardsOpened.length === 2) {
      const [card1, card2] = state.cardsOpened;
      if (cards[card1].id === cards[card2].id) {
        dispatch({ type: ACTIONS.SET_CARDS_CLEARED, payload: { cardId: cards[card1].id } });
      } else {
        setTimeout(() => {
          dispatch({ type: ACTIONS.CLEAR_CARDS_OPEN });
        }, 500);
      }
    }
  }, [state.cardsOpened, cards]);

  /* check onCompletion Hook*/
  useEffect(() => {
    if (Object.keys(state.cardsCleared).length === cards.length / 2) {
      onCompletionCallback(state.moves);
    }
  }, [state.cardsCleared, state.moves, cards, onCompletionCallback]);

  return (
    <div className="gameboard" id={`${id}`}>
      {cards.map((card: ICardModel, index: number) => {
        return (
          <Card
            key={`gamecard-index-${index}`}
            id={index}
            onCardClicked={onCardClicked}
            imageUrl={card.imageUrl}
            backfaceUrl={backfaceImageUrl}
            state={checkCardStatus(index, state.cardsOpened, state.cardsCleared, card)}
          />
        );
      })}
      <div>{`Moves:${state.moves}`}</div>
    </div>
  );
};

Gameboard.propTypes = {
  backfaceImageUrl: PropTypes.string,
  cards: PropTypes.array,
  id: PropTypes.number.isRequired,
  onCompletionCallback: PropTypes.func,
};

export default Gameboard;
