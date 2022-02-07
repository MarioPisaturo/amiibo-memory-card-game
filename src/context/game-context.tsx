/**
 * Game React context example
 */

import * as React from 'react';

const INCREMENT_MOVES = 'increment';
const RESET_MOVES = 'reset';
const SET_MOVES = 'set';

interface IActionPayload {
  moves: number;
}

type Action = { type: 'increment' } | { type: 'reset' } | { type: 'set'; payload: IActionPayload } | { type: '' };
type Dispatch = (action: Action) => void;
type State = { moves: number };
type GameProviderProps = { children: React.ReactNode };

const GameContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

/** simple game reducer for moves */
function movesReducer(state: State, action: Action) {
  switch (action.type) {
    case INCREMENT_MOVES: {
      return { moves: state.moves + 1 };
    }
    case RESET_MOVES: {
      return { moves: 0 };
    }
    case SET_MOVES: {
      return { moves: action.payload.moves };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

/** The game provider */
function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = React.useReducer(movesReducer, { moves: 0 });
  const value = { state, dispatch };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

/** Custom Hooks on the Game Context
 * a better simple way to use the context
 * instead of class components for Consumer
 *
 * You can use this hook like:
 * const {dispatch} = useGameContext();
 */
function useGameContext() {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error('useMoves must be used within a GameProvider');
  }
  return context;
}
// ... other custom hooks

export { GameProvider, useGameContext };
