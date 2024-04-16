import { Header } from "../widgets/Header";
import { AppRouter } from "./providers/router";

export const App = () => {
  return (
    <div className="app">
      <Header />

      <AppRouter />
    </div>
  );
};
