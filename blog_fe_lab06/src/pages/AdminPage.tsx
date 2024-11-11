import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../styles/admin.scss";
import TabAdminComponent from "../components/admin/TabAdminComponent.js";
import PostAdminComponent from "../components/admin/PostAdminComponent.js";
import PostCommentAdminComponent from "../components/admin/PostCommentAdminComponent.js";
import UserAdminComponent from "../components/admin/UserAdminComponent.js";

export default function AdminPage() {

    const [tab, setTab] = React.useState("post");

    return <div className="container-fluid h-100 d-flex flex-row">
        <TabAdminComponent tab={tab} setTab={setTab} />
        <div className="container-fluid tab-content mt-3">
            {tab === "post" && <PostAdminComponent /> }
            {tab === "post_comment" && <PostCommentAdminComponent />}
            {tab === "user" && <UserAdminComponent />}
        </div>
    </div>  
}