import { Button } from "../../../shared/ui/Button";

import { ReactComponent as RefreshIcon } from "../../../shared/assets/icons/refresh.svg";

interface PostsRefreshBtnProps {
  className?: string;
}

export const PostsRefreshBtn = (props: PostsRefreshBtnProps) => {
  const { className } = props;

  const refreshPosts = () => {
    //
  };

  return (
    <Button onClick={refreshPosts} className={className} variant="icon">
      <RefreshIcon />
    </Button>
  );
};
