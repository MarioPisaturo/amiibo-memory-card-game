import { ICard } from '../components/card/card';
import { IAmiibo } from '../typings/amiibo';

export const mapAmiiboModelToCard = (amiibo: IAmiibo, index: number): ICard => {
  return {
    id: amiibo.id || 0,
    state: 'backfaced',
    imageUrl: amiibo.image,
  };
};

export const decoreteAmiiboWithId = (amiibo: IAmiibo, id: number) => {
  return { ...amiibo, id };
};
