import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';
import categoryReducer from './categorySlice';
import articleReducer from './articleSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['user', 'category', 'article'],
}

const reducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    article: articleReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;

