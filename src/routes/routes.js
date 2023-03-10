import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HomePage from "../Pages/HomePage/HomePage";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Posts from "../Pages/Posts/Posts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/postDetails/:id",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/posts/:id",
        element: <Posts></Posts>,
        loader: () => {
          return fetch("https://dummyapi.io/data/v1/tag/water/post?limit=10", {
            headers: {
              "app-id": "63a705516f2b848161c97870",
            },
          });
        },
      },
    ],
  },
]);
