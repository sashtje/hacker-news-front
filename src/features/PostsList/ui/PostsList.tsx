import { useState, useEffect } from "react";

import { PostItem } from "./PostItem";
import { Post } from "./type";

import cls from "./PostsList.module.css";

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/posts");
      const data = await response.json();

      setPosts(data);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={cls.list}>
      {posts.map((post) => (
        <PostItem className={cls.post_item} key={post.id} post={post} />
      ))}
    </div>
  );
};
