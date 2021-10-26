import reducer, { setAppState, STATE_LOADING, STATE_LOADED } from './amiibo-slice';

it('should return the initial state', () => {
  // @ts-ignore ignore AnyAction typecheck on test
  expect(reducer(undefined, {})).toEqual({
    amiiboCollection: { animalCrossing: [], marioSuperStars: [], pokemon: [] },
    appState: STATE_LOADING,
    error: null,
  });
});

it('should handle a setAppState for AMIIBO_LOADED ', () => {
  const previousState = {
    amiiboCollection: { animalCrossing: [], marioSuperStars: [], pokemon: [] },
    appState: STATE_LOADING,
    error: null,
  };
  expect(reducer(previousState, setAppState(STATE_LOADED))).toEqual({
    amiiboCollection: { animalCrossing: [], marioSuperStars: [], pokemon: [] },
    appState: STATE_LOADED,
    error: null,
  });
});
