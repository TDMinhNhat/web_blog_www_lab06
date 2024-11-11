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

export default function TabAdminComponent() {
  return (
    <div className="h-100 position-fixed top-0 start-0 d-flex flex-column justify-content-between background-dark-color">
      {/* Control about manage */}
      <div>
        <ul className="navbar-nav">
            <li className="d-flex align-items-center nav-item p-2">
              <PostAddIcon sx={{width: 40, height: 40, color: "red" }} />
              <span className="align-text-center ms-2 text-light-color fw-bold">Post</span>
            </li>
            <li className="d-flex align-items-center nav-item p-2">
              <CommentIcon sx={{width: 40, height: 40, color: "red" }} />
              <span className="align-text-center ms-2 text-light-color fw-bold">Post Comment</span>
            </li>
            <li className="d-flex align-items-center nav-item p-2">
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
