import { Link } from "react-router-dom";

import { getRouteMain } from "shared/const/router";

import cls from "./Page404.module.css";

export const Page404 = () => {
  return (
    <main className={cls.page404}>
      <h1 className={cls.title}>Page 404</h1>

      <Link className={cls.btn} to={getRouteMain()}>
        Go to main page
      </Link>
    </main>
  );
};
