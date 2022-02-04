import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { amiiboApi } from '../service/amiibo-api';

import amiiboReducer from './slices/amiibo-slice';

export const store = configureStore({
  reducer: {
    amiibo: amiiboReducer,
    [amiiboApi.reducerPath]: amiiboApi.reducer,
    // ...other reducer here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amiiboApi.middleware),
});

setupListeners(store.dispatch);
