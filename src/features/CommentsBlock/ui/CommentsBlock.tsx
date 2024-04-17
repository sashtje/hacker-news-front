import { memo, useMemo } from "react";

import { classNames } from "shared/lib/classnames";

import cls from "./CommentsBlock.module.css";

interface CommentsBlockProps {
  className?: string;
}

// just test data
// need to create slice like was done for posts
const comments = [
  {
    id: 4,
    created_at: "2024-04-15T19:49:00.936348Z",
    text: 'My natural tendency as a software engineer is to leave everything tidy at the end of the day (i.e., find a "good stopping point"). That meant no clear loose ends on what I\'d been working on. But I often had trouble getting started the next day for reasons quite related to the article. Many years into my career, I figured out to leave a simple issue that I had already thought through the solution to, and leave myself a note that pointed me in the right direction the next day. Getting that initial success the next day was often enough to get me going again.',
    author_nickname: "rented_mule",
    comments_count: 5,
  },
  {
    id: 5,
    created_at: "2024-04-15T19:49:57.236452Z",
    text: "Break your work into small and manageable steps. ... Start with a tiny step.\r\n\r\nSomething to add to this: start with the problematic step, not with the tiniest. Not all steps induce anxiety. It's buried in there, but is very local. Divide into manageable steps, identify the most anxious one and just kill it. The rest is usually free.\r\n\r\nFor example, if you're procrastinating and can't sort these 5831 saved pictures in \"New folder (35)\", first identify that the most anxious part is the sliding categorization paralysis. Simply start scrolling through the pics and making a directory plan in notepad aside, adjusting it on the fly. After you finish, it's only a mundane task of moving that is left, which you can just sit and do without any thought.",
    author_nickname: "wruza",
    comments_count: 0,
  },
  {
    id: 6,
    created_at: "2024-04-15T19:50:36.561661Z",
    text: "According to my therapist, procrastination IS caused by anxiety.",
    author_nickname: "pjerem",
    comments_count: 4,
  },
  {
    id: 7,
    created_at: "2024-04-15T19:51:12.412861Z",
    text: "Yes?",
    author_nickname: "wiredfool",
    comments_count: 0,
  },
  {
    id: 8,
    created_at: "2024-04-15T19:51:51.205163Z",
    text: "Thanks for posting this - I'll have to read it later.",
    author_nickname: "phone8675309",
    comments_count: 1,
  },
];

export const CommentsBlock = memo((props: CommentsBlockProps) => {
  const { className } = props;

  const total = useMemo(() => {
    return (
      comments.length +
      comments.reduce((sum, item) => sum + item.comments_count, 0)
    );
  }, []);

  return (
    <section className={classNames(cls.comments_block, {}, [className])}>
      <div className={cls.titleWrapper}>
        <h2 className={cls.title}>Comments({total}):</h2>
      </div>
    </section>
  );
});

CommentsBlock.displayName = "CommentsBlock";
