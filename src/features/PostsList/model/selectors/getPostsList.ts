import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

export const getPostsList = (state: StateSchema) => state?.posts?.posts;

export const getPostById = createSelector(
  getPostsList,
  (_: StateSchema, postId: number) => postId,
  (posts, postId) => posts.find((post) => post.id === postId)
);
