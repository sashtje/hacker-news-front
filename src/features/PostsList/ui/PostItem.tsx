import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classnames";
import { ReactComponent as RatingIcon } from "shared/assets/icons/rating.svg";

import { Post } from "./type";

import cls from "./PostItem.module.css";

interface PostItemProps {
  className?: string;
  post: Post;
}

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export const PostItem = (props: PostItemProps) => {
  const { className, post } = props;
  const date = new Date(post.created_at).toLocaleString("en-US", options);

  return (
    <Link className={classNames(cls.post, {}, [className])} to={""}>
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
};
