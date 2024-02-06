import { createBrowserRouter } from "react-router-dom";
import { History, Home, Root } from "./pages";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        id: "home",
        path: "/",
        element: <Home />,
      },
      {
        id: "history",
        path: "/history",
        element: <History />,
      },
    ],
  },
]);
