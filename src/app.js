import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from './components/Header';
import BodyLayout from './components/Body';
import ContactUs from './components/ContactUs';
import ErrorComponent from './components/Error';
import RestaurantInfo from './components/RestaurantInfo';
import Cart from './components/cart';
import userContext from './utils/userContext';

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            userName: "Deepz"
        }
        setUserName(data.userName);
    }, []);

    return (
        <userContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className='app' id='app'>
                <HeaderComponent />
                <Outlet />
            </div>
        </userContext.Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />)