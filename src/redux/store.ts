import { configureStore } from '@reduxjs/toolkit';

import amiiboReducer from './amiibo-slice';

export default configureStore({
  reducer: {
    amiibo: amiiboReducer,
  },
});
