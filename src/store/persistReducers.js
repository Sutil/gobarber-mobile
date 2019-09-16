import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'gobarbermob',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducers;
};
