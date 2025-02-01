import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/material/styles";
import StoreProvider from "./store/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </StoreProvider>
  </StrictMode>
);
