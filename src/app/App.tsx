import { memo } from "react";

import { Header } from "widgets/Header";

import { AppRouter } from "./providers/router";

import cls from "./App.module.css";

export const App = memo(() => {
  return (
    <div className={cls.app}>
      <Header />

      <AppRouter />
    </div>
  );
});

App.displayName = "App";
