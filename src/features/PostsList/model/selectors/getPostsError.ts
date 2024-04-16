import { StateSchema } from "app/providers/StoreProvider";

export const getPostsError = (state: StateSchema) => state?.posts?.error;
