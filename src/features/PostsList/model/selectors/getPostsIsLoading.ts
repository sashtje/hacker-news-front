import { StateSchema } from "app/providers/StoreProvider";

export const getPostsIsLoading = (state: StateSchema) =>
  !!state?.posts?.isLoading;
