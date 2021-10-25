import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAmiibo } from './amiibo-thunks';

const initialState = {
  value: 0,
  amiiboCollection: {
    pokemon: [],
    animalCrossing: [],
    marioSuperStars: [],
  },
  error: null,
  appState: 'AMIIBO_LOADING',
};

export const amiiboSlice = createSlice({
  name: 'amiibo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAmiibo.fulfilled, (state, action) => {
      state.amiiboCollection = action.payload;
      state.appState = 'AMIIBO_LOADED';
    });
  },
});

/** Selectors */
export const selectAmiboo = (state: any) => state.amiibo.amiiboCollection.pokemon;

/** Reducers */
export default amiiboSlice.reducer;

/** Actions */
export const { increment, decrement, incrementByAmount } = amiiboSlice.actions;
