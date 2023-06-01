import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Pages/Homepage/Homepage";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import YummyShop from "../Pages/YummyShop/YummyShop";
import UserDashboardHome from "../Dashboard/UserDashboard/UserDashboardHome";
import UserDashboardCart from "../Dashboard/UserDashboard/UserDashboardCart";
import AdminDashboardAllUsers from "../Dashboard/AdminDashboard/AdminDashboardAllUsers";
import DashboradLayout from "../Layout/DashboradLayout";
import GiveReview from "../Dashboard/UserDashboard/GiveReview";
import AddAnItem from "../Dashboard/AdminDashboard/AddAnItem";

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
    },

    {
        path: '/',
        element: <DashboradLayout></DashboradLayout>,
        children: [
            {
                path: '/user-dashboard',
                element: <UserDashboardHome></UserDashboardHome>
            },
            {
                path: '/user-dashboard-my-cart',
                element: <UserDashboardCart></UserDashboardCart>
            },
            {
                path: '/user-dashboard-give-review',
                element: <GiveReview></GiveReview>
            },
            {
                path: '/admin-dashboard-all-users',
                element: <AdminDashboardAllUsers></AdminDashboardAllUsers>
            },
            {
                path: '/admin-dashboard-add-an-item',
                element: <AddAnItem></AddAnItem>
            }
        ]
    }
    
])