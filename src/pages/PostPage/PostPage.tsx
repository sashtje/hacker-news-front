import { memo } from "react";

import { BackToPostsListBtn } from "features/BackToPostsListBtn";
import { PostDetails } from "features/PostDetails";
import { CommentsBlock } from "features/CommentsBlock";

import cls from "./PostPage.module.css";

export const PostPage = memo(() => {
  return (
    <main className={cls.main}>
      <div className={cls.panel}>
        <BackToPostsListBtn />
      </div>

      <PostDetails className={cls.post_details} />

      <CommentsBlock className={cls.comments_block} />
    </main>
  );
});

PostPage.displayName = "PostPage";
