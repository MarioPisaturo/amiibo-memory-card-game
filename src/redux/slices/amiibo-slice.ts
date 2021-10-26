import { createSlice } from '@reduxjs/toolkit';

import { IAmiibo } from '../../typings/amiibo';
import { fetchAmiibo } from '../thunks/amiibo-thunks';

export const STATE_LOADING = 'AMIIBO_LOADING';
export const STATE_LOADED = 'AMIIBO_LOADED';

export interface IAmiiboCollection {
  pokemon?: Array<IAmiibo>;
  animalCrossing?: Array<IAmiibo>;
  marioSuperStars?: Array<IAmiibo>;
}

export interface IAmiiboSlice {
  amiiboCollection: IAmiiboCollection;
  error?: number | undefined;
  appState: 'AMIIBO_LOADING' | 'AMIIBO_LOADED';
}

export interface IAmiiboState {
  amiibo: IAmiiboSlice;
}

/** initial state */
const initialState = {
  amiiboCollection: {
    pokemon: [],
    animalCrossing: [],
    marioSuperStars: [],
  },
  error: null,
  appState: STATE_LOADING,
};

/** Amiibo Slice */
export const amiiboSlice = createSlice({
  name: 'amiibo',
  initialState,
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAmiibo.pending, (state, action) => {
      state.appState = STATE_LOADING;
    });
    builder.addCase(fetchAmiibo.fulfilled, (state, action) => {
      state.amiiboCollection = action.payload;
      state.appState = STATE_LOADED;
    });
  },
});

/** Reducers */
export default amiiboSlice.reducer;

/** Actions */
export const { setAppState } = amiiboSlice.actions;
