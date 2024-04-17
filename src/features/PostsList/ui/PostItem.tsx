import { memo } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "shared/lib/hooks/redux";
import { getRoutePost } from "shared/const/router";
import { classNames } from "shared/lib/classnames";
import { getFormattedDate } from "shared/lib/getFormattedDate";
import { ReactComponent as RatingIcon } from "shared/assets/icons/rating.svg";

import cls from "./PostItem.module.css";
import { getPostById } from "../model/selectors/getPostsList";

interface PostItemProps {
  className?: string;
  postId: number;
}

export const PostItem = memo((props: PostItemProps) => {
  const { className, postId } = props;

  const post = useAppSelector((state) => getPostById(state, postId));

  if (!post) {
    return null;
  }

  const date = getFormattedDate(post.created_at);

  return (
    <Link
      className={classNames(cls.post, {}, [className])}
      to={getRoutePost(post.id.toString())}
    >
      <h2 className={cls.title}>{post.title}</h2>

      <div className={cls.info}>
        <div>
          by <span className={cls.nickname}>{post.author_nickname}</span>
        </div>

        <div className={cls.rating}>
          <RatingIcon width={32} />
          {post.rating}
        </div>
      </div>

      <div className={cls.date}>{date}</div>
    </Link>
  );
});

PostItem.displayName = "PostItem";
