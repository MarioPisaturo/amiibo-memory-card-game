import { CARD_ITEM_STATE_BACKFACED, ICard } from '../components/card/card';

import { MARIO_SUPER_STARS_GAME_SERIES, ANIMAL_CROSSING_GAME_SERIES, POKEMON_GAME_SERIES } from './constants';

export interface IAmiiboGameSelection extends ICard {
  type: string;
}

export const amiiboGameSelection: IAmiiboGameSelection[] = [
  {
    id: 1,
    type: ANIMAL_CROSSING_GAME_SERIES,
    imageUrl: './assets/animal-crossing.png',
    backfaceUrl: './assets/animal-crossing.png',
    state: CARD_ITEM_STATE_BACKFACED,
  },
  {
    id: 2,
    type: POKEMON_GAME_SERIES,
    imageUrl: './assets/poketball.png',
    backfaceUrl: './assets/poketball.png',
    state: CARD_ITEM_STATE_BACKFACED,
  },
  {
    id: 3,
    type: MARIO_SUPER_STARS_GAME_SERIES,
    imageUrl: './assets/mario-logo.png',
    backfaceUrl: './assets/mario-logo.png',
    state: CARD_ITEM_STATE_BACKFACED,
  },
];
