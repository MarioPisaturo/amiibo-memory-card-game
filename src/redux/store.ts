import { configureStore } from '@reduxjs/toolkit';

import amiiboReducer from './slices/amiibo-slice';

export default configureStore({
  reducer: {
    amiibo: amiiboReducer,
    // ...other reducer here
  },
});
