import { memo } from "react";
import { useParams } from "react-router-dom";

import { AppLink } from "shared/ui/AppLink";
import { getFormattedDate } from "shared/lib/getFormattedDate";
import { ReactComponent as RatingIcon } from "shared/assets/icons/rating.svg";
import { classNames } from "shared/lib/classnames";
import { useAppSelector } from "shared/lib/hooks/redux";
import { getPostById } from "features/PostsList";

import cls from "./PostDetails.module.css";

interface PostDetailsProps {
  className?: string;
}

export const PostDetails = memo((props: PostDetailsProps) => {
  const { className } = props;

  const { id } = useParams();

  const post = useAppSelector((state) => getPostById(state, Number(id)));

  if (!post) {
    return null;
  }

  const date = getFormattedDate(post.created_at);

  return (
    <section className={classNames(cls.post_details, {}, [className])}>
      <h2 className={cls.title}>{post.title}</h2>

      <div className={cls.info}>
        <div>
          Author: <span className={cls.nickname}>{post.author_nickname}</span>
        </div>

        <div className={cls.rating}>
          <RatingIcon width={32} />
          {post.rating}
        </div>
      </div>

      <div className={cls.date}>{date}</div>

      <AppLink className={cls.link} to={post.url} external>
        Read post
      </AppLink>
    </section>
  );
});

PostDetails.displayName = "PostDetails";
