import { memo } from "react";

import { PostsRefreshBtn } from "widgets/PostsRefreshBtn";
import { PostsList } from "features/PostsList";

import cls from "./PostListPage.module.css";

export const PostsListPage = memo(() => {
  return (
    <main className={cls.main}>
      <div className={cls.panel}>
        <PostsRefreshBtn className={cls.btn_refresh} />
      </div>

      <PostsList />
    </main>
  );
});

PostsListPage.displayName = "PostsListPage";
