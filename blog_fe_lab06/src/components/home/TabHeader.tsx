import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../styles/base.scss";
import "../../styles/home/tab-menu.scss"

export default function Tabheader({ tab, setTab }: { tab: string }) {
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
        <span className="fw-bold fs-3 text-light-color">LOGIN</span>
      </div>
    </div>
  );
}
