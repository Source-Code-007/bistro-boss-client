import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Pages/Homepage/Homepage";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import YummyShop from "../Pages/YummyShop/YummyShop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: 'our-menu',
                element: <PrivateRoute><OurMenu></OurMenu></PrivateRoute>
            },
            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'yummy-shop',
                element: <YummyShop></YummyShop>
            },
        ]
    }
])