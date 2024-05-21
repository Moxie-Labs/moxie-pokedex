import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonProvider } from "./context/PokemonContext";
import { Layout } from "./components/Layout";
import { LayoutProvider } from "./context/LayoutContext";
import "react-modern-drawer/dist/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24 * 365, // data is fresh for 1 year
      cacheTime: 1000 * 60 * 60 * 24 * 365 * 5, // data is kept in cache for 5 years, unless actively being used
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <PokemonProvider>
          <Layout>
            <App />
          </Layout>
        </PokemonProvider>
      </LayoutProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
