import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SpeedChecker from "./pages/speedChecker/speedChecker";
import { Home } from "./pages/home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/speed-checker",
                element: <SpeedChecker />,
            },
        ],
    },
]);

export default router;
