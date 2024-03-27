import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Error,
  Courses,
  SingleCourse,
  Events,
  SingleEvent,
  AboutUs,
  Blogs,
  SingleBlog,
  Contacts,
} from "./pages";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <SingleCourse />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <SingleEvent />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
