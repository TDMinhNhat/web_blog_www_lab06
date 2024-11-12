import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../styles/base.scss";
import "../../styles/admin/user_admin.scss";
import userController from "../../controllers/user_controller.js";
export default function UserAdminComponent() {

    const [users, setUsers] = React.useState([]);
    const [maxPage, setMaxPage] = React.useState(0); 

    React.useEffect(() => {
        async function fetchData() {
            const response = await userController.getAll(0);
            setMaxPage(response.data.page.totalPages);
            setUsers(response.data._embedded.users);
        }
        fetchData();
    }, [])

    const solveNextUserPage = (page: number) => {
        async function fetchData() {
            const response = await userController.getAll(page - 1);
            setMaxPage(response.data.page.totalPages);
            setUsers(response.data._embedded.users);
        }
        fetchData();
    }

    const solveDeleteUser = (id: number) => {
        async function deleteData() {
            await userController.deleteUser(id);
            const response = await userController.getAll(0);
            setMaxPage(response.data.page.totalPages);
            setUsers(response.data._embedded.users);
        }

        deleteData();
    }

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
            <div className="container-fluid mt-5 text-center">
                <div>
                    <h2>List Users</h2>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Full Name</td>
                            <td>Mobile</td>
                            <td>Email</td>
                            <td>Last Login</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className="container-fluid">
                        { users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName} {user.middleName} {user.lastName}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td>{user.lastLogin}</td>
                                    <td>{user.status ? "Active" : "Unactive"}</td>
                                    <td>
                                        <button className="btn btn-primary">View Detail</button>
                                        <button className="btn btn-danger ms-2" onClick={() => solveDeleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="container-fluid text-center mt-5">
                {
                    Array.from(Array(maxPage).keys()).map((page, index) => {
                        return (
                            <button key={index} onClick={() => solveNextUserPage(page + 1)} className="btn btn-primary ms-3">{page + 1}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}