import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import articleReducer from "./articleSlice";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  article: articleReducer,
});

const persistConfig = getPersistConfig({
  key: "root",
  version: 1,
  storage,
  whitelist: [
    // "user.info",
    // "user.status",
    // "category.list",
    // "category.listUnNested",
    // "category.status",
    // "article.tempContent",
    // "article.item",
    // "article.status",
  ],
  rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
