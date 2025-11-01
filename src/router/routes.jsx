import { createBrowserRouter } from "react-router";
import App from "../App";
import PostList from "../pages/PostList";
import CreatePost from "../pages/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
    ],
  },
]);

export default router;
