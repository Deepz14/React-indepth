import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from './components/Header';
import BodyLayout from './components/Body';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ErrorComponent from './components/Error';

const AppLayout = () => {
    return (
        <div className='app' id='app'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

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
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <ContactUs />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />)