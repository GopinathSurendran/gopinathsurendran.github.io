import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default router;