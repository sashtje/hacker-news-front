import { memo } from "react";

import { AppLink } from "shared/ui/AppLink";
import { getRoutePostsList } from "shared/const/router";
import { ReactComponent as BackIcon } from "shared/assets/icons/back.svg";

export const BackToPostsListBtn = memo(() => {
  return (
    <AppLink
      to={getRoutePostsList()}
      variant="icon"
      title="Go back to posts page"
    >
      <BackIcon />
    </AppLink>
  );
});

BackToPostsListBtn.displayName = "BackToPostsListBtn";
