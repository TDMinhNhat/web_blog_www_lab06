import React from "react"

export default function PostAdminComponent() {

    const [post, setPost] = React.useState([])

    return (
        <div className="container-fluid">
            { /* Search Post */}
            <div className="container-fluid">
                <div>
                    <h2 className="text-center">Search User</h2>
                </div>
                <div className="d-flex align-items-center justify-content-around mt-2">
                    <div className="d-flex align-items-center">
                        <label className="col-4">ID:</label>
                        <input className="form-control" name="inputPostId" type="number" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Post title:</label>
                        <input className="form-control" name="inputPostTitle" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Post Author:</label>
                        <input className="form-control" name="inputPostAuthor" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Post Parent:</label>
                        <input className="form-control" name="inputPostParent" type="number" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Post created:</label>
                        <input className="form-control" name="inputPostCreated" type="date" />
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            { /* Show table posts */}
            <div className="container-fluid mt-5">
                <div>
                    <h2 className="text-center">List Posts</h2>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Post Title</td>
                            <td>Post Author Name</td>
                            <td>Post Parent</td>
                            <td>Created At</td>
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