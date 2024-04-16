import { Post } from "../../ui/type";

export interface PostsListSchema {
  isLoading: boolean;
  error?: string;

  posts: Post[];
}
