import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../styles/base.scss";
import "../../styles/admin/user_admin.scss";

export default function UserAdminComponent() {

    const [users, setUsers] = React.useState([]);

    return (
        <div className="container-fluid">
            { /* Search User */}
            <div className="container-fluid">
                <div>
                    <h2 className="text-center">Search User</h2>
                </div>
                <div className="d-flex align-items-center justify-content-around mt-2">
                    <div className="d-flex align-items-center">
                        <label className="col-4">ID:</label>
                        <input className="form-control" name="inputUserId" type="number" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">First Name:</label>
                        <input className="form-control" name="inputFirstName" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Middle Name:</label>
                        <input className="form-control" name="inputMiddleName" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Last Name:</label>
                        <input className="form-control" name="inputLastName" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Email:</label>
                        <input className="form-control" name="inputEmail" type="email" />
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            { /* Show table users */}
            <div className="container-fluid mt-5">
                <div>
                    <h2 className="text-center">List Users</h2>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Full Name</td>
                            <td>Mobile</td>
                            <td>Email</td>
                            <td>Last Login</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className="container-fluid">

                    </tbody>
                </table>
            </div>
        </div>
    )
}