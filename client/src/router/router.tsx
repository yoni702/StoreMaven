import { createBrowserRouter } from "react-router-dom";
import { TapGame, Welcome } from "../pages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/tap-game/:id",
      element: <TapGame />,
    },
]);