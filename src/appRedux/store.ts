import {configureStore, combineReducers} from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import {authAPI} from './api/auth-api';
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // este sera el estado global de la apliaccion
  reducer: {
    persistedReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authAPI.middleware]),
});

export const persistor = persistStore(store);
