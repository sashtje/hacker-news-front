import { memo } from "react";

interface CommentsBlockProps {
  className?: string;
}

export const CommentsBlock = memo((props: CommentsBlockProps) => {
  return <div></div>;
});

CommentsBlock.displayName = "CommentsBlock";
