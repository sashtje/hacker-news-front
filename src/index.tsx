import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "app/App";
import { StoreProvider } from "app/providers/StoreProvider";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
