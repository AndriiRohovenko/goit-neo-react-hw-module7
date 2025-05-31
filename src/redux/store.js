import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

const contactsConfig = {
  key: 'contactsList',
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsConfig,
  contactsReducer
);

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore paths in the state or action where non-serializable values might exist
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['register', 'rehydrate'],
      },
    }),
});
export const persistor = persistStore(store);
