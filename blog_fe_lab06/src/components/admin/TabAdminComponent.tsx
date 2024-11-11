import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../styles/base.scss";
import "../../styles/admin/tab_admin.scss"
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import $ from "jquery";

export default function TabAdminComponent({ tab, setTab }: { tab: string, setTab: (tab: string) => void }) {

  React.useEffect(() => {
    if(tab == "post") {
      $("#tabPost").addClass("nav-item-active")
      $("#tabPost span").addClass("nav-item-text-active")
      $("#tabPostComment, #tabUser").removeClass("nav-item-active")
    } else if(tab == "post_comment") {
      $("#tabPostComment").addClass("nav-item-active")
      $("#tabPostComment span").addClass("nav-item-text-active")
      $("#tabPost, #tabUser").removeClass("nav-item-active")
    } else {
      $("#tabUser").addClass("nav-item-active")
      $("#tabUser span").addClass("nav-item-text-active")
      $("#tabPost, #tabPostComment").removeClass("nav-item-active")
    }
  }, [tab])

  return (
    <div className="h-100 position-fixed top-0 start-0 d-flex flex-column justify-content-between background-dark-color">
      {/* Control about manage */}
      <div>
        <ul className="navbar-nav">
            <li className="d-flex align-items-center nav-item p-2" onClick={() => setTab("post")} id="tabPost">
              <PostAddIcon sx={{width: 40, height: 40, color: "red" }} />
              <span className="align-text-center ms-2 text-light-color fw-bold">Post</span>
            </li>
            <li className="d-flex align-items-center nav-item p-2" onClick={() => setTab("post_comment")} id="tabPostComment">
              <CommentIcon sx={{width: 40, height: 40, color: "red" }} />
              <span className="align-text-center ms-2 text-light-color fw-bold">Post Comment</span>
            </li>
            <li className="d-flex align-items-center nav-item p-2" onClick={() => setTab("user")} id="tabUser">
              <AccountCircleIcon sx={{width: 40, height: 40, color: "red" }} />
              <span className="align-text-center ms-2 text-light-color fw-bold">User</span>
            </li>
        </ul>
      </div>

      {/* Control about direct to home page and log out */}
      <div>
        <ul className="navbar-nav">
          <li className="d-flex align-items-center nav-item p-2">
            <HomeIcon sx={{width: 40, height: 40, color: "red" }} />
            <span className="align-text-center ms-2 text-light-color fw-bold">Home Page</span>
          </li>
          <li className="d-flex align-items-center nav-item p-2">
            <LogoutIcon sx={{width: 40, height: 40, color: "red" }} />
            <span className="align-text-center ms-2 text-light-color fw-bold">Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
