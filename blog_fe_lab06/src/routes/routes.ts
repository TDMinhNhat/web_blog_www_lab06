import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import React from "react";

const routes = createBrowserRouter([
    {
        path: "/",
        element: null,
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: "/admin",
        element: null
    }
])

export default routes;