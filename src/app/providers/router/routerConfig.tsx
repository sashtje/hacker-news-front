import { Navigate } from "react-router-dom";

import {
  getRouteMain,
  getRoutePostsList,
  getRoutePost,
  getRouteNotFound,
} from "shared/const/router";
import { PostsListPage } from "pages/PostsListPage";
import { PostPage } from "pages/PostPage";
import { Page404 } from "pages/Page404";

export const routerConfig = [
  {
    path: getRouteMain(),
    element: <Navigate to={getRoutePostsList()} replace={true} />,
  },
  {
    path: getRoutePostsList(),
    element: <PostsListPage />,
  },
  {
    path: getRoutePost(":id"),
    element: <PostPage />,
  },
  {
    path: getRouteNotFound(),
    element: <Page404 />,
  },
];
