import React from "react";

export default function PostCommentAdminComponent() {

    const [postComment, setPostComment] = React.useState([]);

    return (
        <div className="container-fluid">
            { /* Search post comment */}
            <div className="container-fluid">
                <div>
                    <h2 className="text-center">Search Comment</h2>
                </div>
                <div className="d-flex align-items-center justify-content-around mt-2">
                    <div className="d-flex align-items-center">
                        <label className="col-4">ID Comment:</label>
                        <input className="form-control" name="inputCommentID" type="number" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Author:</label>
                        <input className="form-control" name="inputAuthor" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">ID Post:</label>
                        <input className="form-control" name="inputPostID" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="col-4">Title:</label>
                        <input className="form-control" name="inputTitleComment" />
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            { /* Show table post comment */}
            <div className="container-fluid mt-5">
                <div>
                    <h2 className="text-center">List Comment</h2>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Post ID</td>
                            <td>Author</td>
                            <td>Title</td>
                            <td>Commented Dated</td>
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