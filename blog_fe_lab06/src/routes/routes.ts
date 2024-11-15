import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import React from "react";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ViewUserDetailPage from "../pages/admin/ViewUserDetailPage";
import ViewPostDetailPage from "../pages/admin/ViewPostDetailPage";
import ViewPostCommentDetailPage from "../pages/admin/ViewPostCommentDetailPage";
const routes = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(HomePage, null),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: "/admin",
        element: React.createElement(AdminPage, null),
        errorElement: React.createElement(ErrorPage, null),
        children: [
            {
                path: "user-detail/:id",
                element: React.createElement(ViewUserDetailPage, null),
                errorElement: React.createElement(ErrorPage, null)
            },
            {
                path: "post-detail/:id",
                element: React.createElement(ViewPostDetailPage, null),
                errorElement: React.createElement(ErrorPage, null)
            },
            {
                path: "post-comment/:id",
                element: React.createElement(ViewPostCommentDetailPage, null),
                errorElement: React.createElement(ErrorPage, null)
            }
        ]
    }
])

export default routes;