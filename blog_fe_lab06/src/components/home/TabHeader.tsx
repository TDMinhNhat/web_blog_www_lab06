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

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">LOGIN ACCOUNT</h1>
              </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="mb-3 form-check d-flex align-items-center justify-content-between">
                  <a>Forgot Password?</a>
                  <a>Register Account</a>
                </div>
              </form>
            </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => solveLogin()}>Login</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}
