import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "features/PostsList";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export function createReduxStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}
