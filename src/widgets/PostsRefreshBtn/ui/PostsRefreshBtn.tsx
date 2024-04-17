import { memo, useCallback } from "react";

import { useAppDispatch } from "shared/lib/hooks/redux";
import { fetchPostsList } from "features/PostsList";
import { Button } from "shared/ui/Button";
import { ReactComponent as RefreshIcon } from "shared/assets/icons/refresh.svg";

interface PostsRefreshBtnProps {
  className?: string;
}

export const PostsRefreshBtn = memo((props: PostsRefreshBtnProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const refreshPosts = useCallback(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  return (
    <Button
      onClick={refreshPosts}
      className={className}
      variant="icon"
      title="Refresh posts"
    >
      <RefreshIcon />
    </Button>
  );
});

PostsRefreshBtn.displayName = "PostsRefreshBtn";
