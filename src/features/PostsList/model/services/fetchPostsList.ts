import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "features/PostsList/ui/type";

export const fetchPostsList = createAsyncThunk<Post[]>(
  "getPostsList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/posts");

      const data = await response.json();

      if (!data) {
        throw new Error("No data");
      }

      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error" as string);
    }
  }
);
