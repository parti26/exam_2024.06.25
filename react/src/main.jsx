import React from "react";
import ReactDOM from "react-dom/client";
import { initFakeApi } from "./mirage.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Rooms from "./Pages/Rooms.jsx";

// don't touch this line
initFakeApi();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooms />,
  },
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
