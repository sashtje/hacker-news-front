import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { routerConfig } from "./routerConfig";

export const AppRouter = memo(() => {
  return (
    <Routes>
      {routerConfig.map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
});

AppRouter.displayName = "AppRouter";
