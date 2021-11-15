export interface IGameboardState {
  cardsOpened: number[];
  cardsCleared: ICardsCleared;
  moves: number;
}

export interface ICardsCleared {
  [key: string]: string;
}

interface IGameboardAction {
  type: string;
  payload?: {
    cardId: number;
  };
}

export const ACTIONS = {
  ADD_CARDS_OPEN: 'add_cards_open',
  CLEAR_CARDS_OPEN: 'clear_cards_open',
  SET_CARDS_CLEARED: 'set_cards_cleared',
  RESET_MOVES: 'reset_moves',
  INCREMENT_MOVES: 'increment_moves',
  SET_CARDS_OPEN: 'set_cards_open',
};

export const initialState: IGameboardState = {
  cardsOpened: [],
  cardsCleared: {},
  moves: 0,
};

export const reducer = (state: IGameboardState, action: IGameboardAction): IGameboardState => {
  const { payload, type } = action;
  switch (type) {
    /** cards opened */
    case ACTIONS.ADD_CARDS_OPEN: {
      if (payload?.cardId !== undefined) {
        return { ...state, cardsOpened: [...state.cardsOpened, payload.cardId] };
      }
      return state;
    }
    case ACTIONS.SET_CARDS_OPEN: {
      if (payload?.cardId !== undefined) {
        return { ...state, cardsOpened: [payload!.cardId] };
      }
      return state;
    }
    case ACTIONS.CLEAR_CARDS_OPEN: {
      return { ...state, cardsOpened: [] };
    }

    /* cards cleared*/
    case ACTIONS.SET_CARDS_CLEARED: {
      if (payload?.cardId !== undefined) {
        return { ...state, cardsCleared: { ...state.cardsCleared, [payload!.cardId]: true } };
      }
      return state;
    }

    /* moves*/
    case ACTIONS.RESET_MOVES: {
      return { ...state, moves: 0 };
    }
    case ACTIONS.INCREMENT_MOVES: {
      return { ...state, moves: state.moves++ };
    }
    default:
      return state;
  }
};
