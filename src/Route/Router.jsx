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
import AdminRoute from "../PrivateRoute/AdminRoute";
import AdminDashBoardHome from "../Dashboard/AdminDashboard/AdminDashBoardHome";
import UserDashboardPayment from "../Dashboard/UserDashboard/Payment/UserDashboardPayment";
import UserDashboardPaymentHistory from "../Dashboard/UserDashboard/UserDashboardPaymentHistory";

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
                element: <PrivateRoute><UserDashboardHome></UserDashboardHome></PrivateRoute>
            },
            {
                path: '/user-dashboard-my-cart',
                element: <PrivateRoute><UserDashboardCart></UserDashboardCart></PrivateRoute>
            },
            {
                path: '/user-dashboard-payment',
                element: <PrivateRoute><UserDashboardPayment></UserDashboardPayment></PrivateRoute>
            },
            {
                path: '/user-dashboard-payment-history',
                element: <PrivateRoute><UserDashboardPaymentHistory></UserDashboardPaymentHistory></PrivateRoute>
            },
            {
                path: '/user-dashboard-give-review',
                element: <PrivateRoute><GiveReview></GiveReview></PrivateRoute>
            },
            {
                path: '/admin-dashboard',
                element: <AdminRoute><AdminDashBoardHome></AdminDashBoardHome></AdminRoute>
            },
            {
                path: '/admin-dashboard-all-users',
                element: <AdminRoute><AdminDashboardAllUsers></AdminDashboardAllUsers></AdminRoute>
            },
            {
                path: '/admin-dashboard-add-an-item',
                element: <AdminRoute><AddAnItem></AddAnItem></AdminRoute>
            }
        ]
    }
    
])