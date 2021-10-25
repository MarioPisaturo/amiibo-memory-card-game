import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAmiibo } from './amiibo-thunks';

export const STATE_LOADING = 'AMIIBO_LOADING';
export const STATE_LOADED = 'AMIIBO_LOADED';

const initialState = {
  value: 0,
  amiiboCollection: {
    pokemon: [],
    animalCrossing: [],
    marioSuperStars: [],
  },
  error: null,
  appState: STATE_LOADING,
};

export const amiiboSlice = createSlice({
  name: 'amiibo',
  initialState,
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    },
  },
  extraReducers: (builder) => {
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
