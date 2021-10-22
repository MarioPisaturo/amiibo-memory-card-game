import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { IDeckModel } from '../../typings/deck';
import { ICardModel } from '../../typings/card';
import Card, { CARD_ITEM_STATE_ENABLED, CARD_ITEM_STATE_MATCHED, CARD_ITEM_STATE_BACKFACED } from '../card/card';

import './gameboard.scss';

export interface IGameboard extends IDeckModel {
  onCompletionCallback?: (moves: number) => any;
}
interface ICardsCleared {
  [key: string]: string;
}

const checkCardStatus = (index: number, cardsOpened: number[], cardsCleared: ICardsCleared, card: ICardModel) => {
  if (cardsOpened.includes(index)) {
    return CARD_ITEM_STATE_MATCHED;
  } else if (cardsCleared[card.id]) {
    return CARD_ITEM_STATE_ENABLED;
  }
  return CARD_ITEM_STATE_BACKFACED;
};

const Gameboard: React.FC<IGameboard> = ({ cards = [], id, onCompletionCallback = () => {} }) => {
  const [cardsOpened, setCardsOpen] = useState<Array<number>>([]);
  const [cardsCleared, setCardsCleared] = useState<ICardsCleared>({});
  const [moves, setMoves] = useState<number>(0);

  const onCardClicked = (id: number) => {
    if (cardsOpened.length === 1) {
      setMoves((moves) => moves + 1);
      setCardsOpen((cardsIds: number[]) => [...cardsIds, id]);
    } else {
      setCardsOpen([id]);
    }
  };

  /** Cards open/close hook */
  useEffect(() => {
    if (cardsOpened.length === 2) {
      const [card1, card2] = cardsOpened;
      if (cards[card1].id === cards[card2].id) {
        setCardsCleared((prev: ICardsCleared) => ({ ...prev, [cards[card1].id]: true }));
      } else {
        setTimeout(() => {
          setCardsOpen([]);
        }, 500);
      }
    }
  }, [cardsOpened, cards]);

  /* check onCompletion Hook*/
  useEffect(() => {
    if (Object.keys(cardsCleared).length === cards.length / 2) {
      onCompletionCallback(moves);
    }
  }, [cardsCleared, cards, moves, onCompletionCallback]);

  return (
    <div className="gameboard" id={`${id}`}>
      {cards.map((card: ICardModel, index: number) => {
        return (
          <Card
            key={`gamecard-index-${index}`}
            id={index}
            onCardClicked={onCardClicked}
            imageUrl={card.imageUrl}
            state={checkCardStatus(index, cardsOpened, cardsCleared, card)}
          />
        );
      })}
      <div>{`Moves:${moves}`}</div>
    </div>
  );
};

Gameboard.propTypes = {
  cards: PropTypes.array,
  id: PropTypes.number.isRequired,
  onCompletionCallback: PropTypes.func,
};

export default Gameboard;
