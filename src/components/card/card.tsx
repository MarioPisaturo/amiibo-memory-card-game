import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { ICardModel } from '../../typings/card';
import { colors } from '../../styles/colors';
import { rotateY180 } from '../../styles/utils';

import './card.scss';

export type CardState = 'hidden' | 'matched' | 'enabled' | 'backfaced';

export const CARD_ITEM_STATE_HIDDEN: CardState = 'hidden';
export const CARD_ITEM_STATE_ENABLED: CardState = 'enabled';
export const CARD_ITEM_STATE_MATCHED: CardState = 'matched';
export const CARD_ITEM_STATE_BACKFACED: CardState = 'backfaced';

export const DEFAULT_BACKFACE_ASSET_URL = '/assets/animal-crossing.png';

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

const CardComponent: React.FC<ICard> = ({
  id,
  onCardClicked,
  state,
  imageUrl,
  backfaceUrl = DEFAULT_BACKFACE_ASSET_URL,
}) => {
  return (
    <Card data-state={state} onClick={() => onCardClicked && handleClick(id, onCardClicked, state)}>
      <CardFace>
        <CardImage src={backfaceUrl} alt="card flipped face" />
      </CardFace>
      <CardFace className={rotate180YCardFace}>
        <CardImage src={imageUrl} alt="data-face" />
      </CardFace>
    </Card>
  );
};

/** TEST LINARA  styled component syntax*/
const CardImage = styled.img`
  width: 95%;
  height: 95%;
  margin-top: 5px;
  margin-left: 4px;
  border-radius: 4px;
`;

const CardFace = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  backface-visibility: hidden;
`;

const Card = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  cursor: pointer;
  transition: 0.3s;

  border-radius: 4px;
  box-shadow: 2px 2px 4px 4px ${colors.cardBoxShadow};

  transform-style: preserve-3d;

  &:hover {
    transform: scale(1.05);
  }
  /** card data states */
  &[data-state='matched'],
  &[data-state='enabled'] {
    ${rotateY180};
  }
  &[data-state='hidden'] {
    opacity: 0;
  }
`;

const rotate180YCardFace = css`
  ${rotateY180}
`;

/** end  Linara test */

CardComponent.propTypes = {
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

export default CardComponent;
