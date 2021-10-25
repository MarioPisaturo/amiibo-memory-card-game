import { CARD_ITEM_STATE_BACKFACED, ICard } from '../components/card/card';

export interface IAmiiboGameSelection extends ICard {
  type: string;
}

export const amiiboGameSelection: IAmiiboGameSelection[] = [
  {
    id: 1,
    type: 'mario',
    imageUrl: './assets/mario-logo.png',
    backfaceUrl: './assets/mario-logo.png',
    state: CARD_ITEM_STATE_BACKFACED,
  },
  {
    id: 2,
    type: 'animal-crossing',
    imageUrl: './assets/animal-crossing.png',
    backfaceUrl: './assets/animal-crossing.png',
    state: CARD_ITEM_STATE_BACKFACED,
  },
  {
    id: 3,
    type: 'pokemon',
    imageUrl: './assets/poketball.png',
    backfaceUrl: './assets/poketball.png',
    state: CARD_ITEM_STATE_BACKFACED,
  },
];
