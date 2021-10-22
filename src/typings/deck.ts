/**
 * Deck Model interfaces and types
 */
import { ICardModel } from './card';

export interface IDeckModel {
  readonly id: number;
  readonly cards?: Array<ICardModel>;
  readonly type: string;
}
