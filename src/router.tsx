import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/landing";
import Venue from "./pages/venue";
import Programme from "./pages/programme";
import BreakoutSessions from "./pages/breakout-sessions";
import PageNotFound from "./components/PageNotFound";
// import Organizers from "./pages/organizers";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/venue",
        element: <Venue />,
      },
      {
        path: "/programme",
        element: <Programme />,
      },
      {
        path: "/breakout-sessions",
        element: <BreakoutSessions />,
      },
      // {
      //   path: "/organizers",
      //   element: <Organizers />,
      // },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
