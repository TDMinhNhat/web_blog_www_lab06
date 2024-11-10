import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import React from "react";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(HomePage, null),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: "/admin",
        element: React.createElement(AdminPage, null),
        errorElement: React.createElement(ErrorPage, null)
    }
])

export default routes;