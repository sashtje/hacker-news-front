import { createSlice } from "@reduxjs/toolkit";

import { PostsListSchema } from "../types/PostsListSchema";
import { fetchPostsList } from "../services/fetchPostsList";

const initialState: PostsListSchema = {
  isLoading: false,
  error: undefined,
  posts: [],
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchPostsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: postsReducer, actions: postsActions } = postsSlice;
