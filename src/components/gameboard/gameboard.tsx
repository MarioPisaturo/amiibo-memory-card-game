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

const defaultCards = [
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 4 },
  { imageUrl: './assets/animal-crossing.png', id: 4 },
  { imageUrl: './assets/animal-crossing.png', id: 5 },
  { imageUrl: './assets/animal-crossing.png', id: 5 },
  { imageUrl: './assets/animal-crossing.png', id: 6 },
  { imageUrl: './assets/animal-crossing.png', id: 6 },
  { imageUrl: './assets/animal-crossing.png', id: 7 },
  { imageUrl: './assets/animal-crossing.png', id: 7 },
];

const checkCardStatus = (index: number, cardsOpened: number[], cardsCleared: ICardsCleared, card: ICardModel) => {
  if (cardsOpened.includes(index)) {
    return CARD_ITEM_STATE_MATCHED;
  } else if (cardsCleared[card.id]) {
    return CARD_ITEM_STATE_ENABLED;
  }
  return CARD_ITEM_STATE_BACKFACED;
};

const Gameboard: React.FC<IGameboard> = ({ cards = defaultCards, id, onCompletionCallback = () => {} }) => {
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

  const evaluateOpenedCards = () => {
    const [card1, card2] = cardsOpened;
    if (cards[card1].id === cards[card2].id) {
      setCardsCleared((prev) => ({ ...prev, [cards[card1].id]: true }));
    }
    setTimeout(() => {
      setCardsOpen([]);
    }, 500);
  };

  const checkCompletion = () => {
    if (Object.keys(cardsCleared).length === cards.length / 2) {
      console.log('win!');
      onCompletionCallback(moves);
    }
  };

  useEffect(() => {
    checkCompletion();
  }, [cardsCleared]);

  useEffect(() => {
    if (cardsOpened.length === 2) {
      evaluateOpenedCards();
    }
  }, [cardsOpened]);

  return (
    <div className="gameboard" id={`${id}`}>
      {cards.map((card, index) => {
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
  id: PropTypes.number.isRequired,
  onCompletionCallback: PropTypes.func,
  cards: PropTypes.array,
};

export default Gameboard;
