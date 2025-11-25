import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import PublicHabits from "../pages/PublicHabits";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import HabitsDetailsCard from "../components/HabitsDetailsCard";
import UpdateHabits from "../components/UpdateHabits";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addhabit",
        element: (
          <PrivateRoute>
            <AddHabit />
          </PrivateRoute>
        ),
      },
      {
        path: "/myhabits",
        element: (
          <PrivateRoute>
            <MyHabits />
          </PrivateRoute>
        ),
      },
      {
        path: "/habits/:id",
        element: (
          <PrivateRoute>
            <HabitsDetailsCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://habit-tracker-server-eta.vercel.app/habits/${params.id}`
          ),
      },
      {
        path: "/update-habit/:id",
        element: (
          <PrivateRoute>
            <UpdateHabits />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://habit-tracker-server-eta.vercel.app/habits/${params.id}`
          ),
      },
      {
        path: "/publichabits",
        element: <PublicHabits />,
        loader: () =>
          fetch("https://habit-tracker-server-eta.vercel.app/public-habits"),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
