import { PostsRefreshBtn } from "../../features/PostsRefreshBtn";
import { PostsList } from "../../features/PostsList";

import cls from "./PostListPage.module.css";

export const PostsListPage = () => {
  return (
    <main className={cls.main}>
      <div className={cls.panel}>
        <PostsRefreshBtn className={cls.btn_refresh} />
      </div>

      <PostsList />
    </main>
  );
};
