import { Header } from "../widgets/Header";
import { AppRouter } from "./providers/router";

import cls from "./App.module.css";

export const App = () => {
  return (
    <div className={cls.app}>
      <Header />

      <AppRouter />
    </div>
  );
};
