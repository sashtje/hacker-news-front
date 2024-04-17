import { memo } from "react";

import { getRouteMain } from "shared/const/router";
import { AppLink } from "shared/ui/AppLink";

import cls from "./Page404.module.css";

export const Page404 = memo(() => {
  return (
    <main className={cls.page404}>
      <h1 className={cls.title}>Page 404</h1>

      <AppLink to={getRouteMain()}>Go to main page</AppLink>
    </main>
  );
});

Page404.displayName = "Page404";
