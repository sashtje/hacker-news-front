import { useEffect, useRef, memo } from "react";

import { useAppDispatch, useAppSelector } from "shared/lib/hooks/redux";

import { PostItem } from "./PostItem";
import { fetchPostsList } from "../model/services/fetchPostsList";
import { getPostsList } from "../model/selectors/getPostsList";

import cls from "./PostsList.module.css";

export const PostsList = memo(() => {
  const posts = useAppSelector(getPostsList);

  const dispatch = useAppDispatch();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    dispatch(fetchPostsList());

    timerRef.current = setInterval(() => {
      dispatch(fetchPostsList());
    }, 60000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [dispatch]);

  return (
    <div className={cls.list}>
      {posts?.map((post) => (
        <PostItem className={cls.post_item} key={post.id} postId={post.id} />
      ))}
    </div>
  );
});

PostsList.displayName = "PostsList";
