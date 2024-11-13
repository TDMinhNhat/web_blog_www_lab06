import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../styles/base.scss";
import "../../styles/home/tab-menu.scss"
import userModel from "../../models/users_model.js"

export default function Tabheader({ tab, setTab, user, setUser }: { tab: string, user: object }) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const solveLogin = () => {
    userModel.checkLogin(email, password).then((res) => {
      if (res.status == 200) {
        setUser(res.data);
      } else {
        alert("Login failed");
      }
    });
  }

  return (
    <div className="container-fluid d-flex flex-row align-items-center justify-content-around navbar-nav background-dark-color">
      <div className="navbar-item tab-item p-2" onClick={() => setTab("Home")}>
        <span className="fw-bold fs-3 text-light-color">HOME</span>
      </div>
      <div className="navbar-item tab-item p-2" onClick={() => setTab("Post")}>
        <span className="fw-bold fs-3 text-light-color">ASK QUESTION</span>
      </div>
      <div className="navbar-item tab-item p-2" onClick={() => setTab("Support")}>
        <span className="fw-bold fs-3 text-light-color">SUPPORT</span>
      </div>
      <div className="navbar-item tab-item p-2">
        { user == null && <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">LOGIN</button> }
        { user != null && <span className="fw-bold fs-3 text-light-color" onClick={() => setTab("Profile")}>{user.firstName}</span> }
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">LOGIN ACCOUNT</h1>
              </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3 form-check d-flex align-items-center justify-content-between">
                  <a>Forgot Password?</a>
                  <a>Register Account</a>
                </div>
              </form>
            </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => solveLogin()}>Login</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}
