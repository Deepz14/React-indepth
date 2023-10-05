import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from './components/Header';
import BodyLayout from './components/Body';
import ContactUs from './components/ContactUs';
import ErrorComponent from './components/Error';
import RestaurantInfo from './components/RestaurantInfo';

const AppLayout = () => {
    return (
        <div className='app' id='app'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

const AboutUs = lazy(() => import("./components/AboutUs"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <BodyLayout />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h3>Loading.....</h3>}>
                    <AboutUs />
                </Suspense> 
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantInfo />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />)