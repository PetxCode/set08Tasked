import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LayOut from "../components/LayOut";
import AddTask from "../pages/AddTask";

export const mianRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        index: true,
        path: "add-task",
        element: <AddTask />,
      },
    ],
  },
]);
