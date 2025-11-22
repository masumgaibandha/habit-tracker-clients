import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import PublicHabits from "../pages/PublicHabits";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/addhabit',
        element: <AddHabit/>
      },
      {
        path: '/myhabits',
        element: <MyHabits/>
      },
      {
        path: '/publichabits',
        element: <PublicHabits/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/signin',
        element: <Signin/>
      }
    ]
  },
]);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
// <RouterProvider router={router} />
// );
