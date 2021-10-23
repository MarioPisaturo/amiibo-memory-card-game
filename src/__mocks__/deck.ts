import { IDeckModel } from '../typings/deck';

export const mockedDeckCardsx12 = [
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/animal-crossing.png', id: 4 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 4 },
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/animal-crossing.png', id: 6 },
  { imageUrl: './assets/animal-crossing.png', id: 5 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 5 },
  { imageUrl: './assets/animal-crossing.png', id: 7 },
  { imageUrl: './assets/animal-crossing.png', id: 6 },
  { imageUrl: './assets/animal-crossing.png', id: 7 },
];

const defaultCardsx6 = [
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/mario-logo.png', id: 1 },
  { imageUrl: './assets/animal-crossing.png', id: 2 },
  { imageUrl: './assets/animal-crossing.png', id: 2 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
  { imageUrl: './assets/animal-crossing.png', id: 3 },
];

export const mockedDeckx12: IDeckModel = {
  cards: mockedDeckCardsx12,
  type: 'mocked-type-x12',
  id: 0,
};

export const mockedDeckx6: IDeckModel = {
  cards: defaultCardsx6,
  type: 'mocked-type-x6',
  id: 0,
};
