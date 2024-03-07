import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/context/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "@/context/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>

);
