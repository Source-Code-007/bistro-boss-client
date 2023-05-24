import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            }
        ]
    }
])