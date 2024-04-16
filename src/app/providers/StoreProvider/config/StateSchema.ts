import { PostsListSchema } from "features/PostsList";

import { createReduxStore } from "./store";

export interface StateSchema {
  posts: PostsListSchema;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
