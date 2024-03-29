import React from 'react';
import PropTypes from 'prop-types';

import { ICardModel } from '../../typings/card';

import './card.scss';

export type CardState = 'hidden' | 'matched' | 'enabled' | 'backfaced';

export const CARD_ITEM_STATE_HIDDEN: CardState = 'hidden';
export const CARD_ITEM_STATE_ENABLED: CardState = 'enabled';
export const CARD_ITEM_STATE_MATCHED: CardState = 'matched';
export const CARD_ITEM_STATE_BACKFACED: CardState = 'backfaced';

export const DEFAULT_BACKFACE_ASSET_URL = './assets/animal-crossing.png';

export interface ICard extends ICardModel {
  state: CardState;
  backfaceUrl?: string;
  onCardClicked?: (id: number) => unknown;
}

const isFlipped = (state: CardState) => state === CARD_ITEM_STATE_MATCHED || state === CARD_ITEM_STATE_ENABLED;

const handleClick = (id: number, onCardClicked: (id: number) => any, state: CardState) => {
  if (!isFlipped(state)) {
    onCardClicked(id);
  }
};

const Card: React.FC<ICard> = ({ id, onCardClicked, state, imageUrl, backfaceUrl = DEFAULT_BACKFACE_ASSET_URL }) => {
  return (
    <div className="card" data-state={state} onClick={() => onCardClicked && handleClick(id, onCardClicked, state)}>
      <div className="card--card-face">
        <img src={backfaceUrl} alt="card flipped face" />
      </div>
      <div className="card--card-face card--card-back-face">
        <img src={imageUrl} alt="data-face" />
      </div>
    </div>
  );
};

Card.propTypes = {
  backfaceUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onCardClicked: PropTypes.func,
  state: PropTypes.oneOf<CardState>([
    CARD_ITEM_STATE_HIDDEN,
    CARD_ITEM_STATE_MATCHED,
    CARD_ITEM_STATE_ENABLED,
    CARD_ITEM_STATE_BACKFACED,
  ]).isRequired,
};

export default Card;
