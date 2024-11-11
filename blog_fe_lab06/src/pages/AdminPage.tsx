import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import TabAdminComponent from "../components/admin/TabAdminComponent.js";

export default function AdminPage() {
    return <div className="container-fluid h-100 d-flex flex-row">
        <TabAdminComponent />
    </div>  
}