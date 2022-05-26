import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
