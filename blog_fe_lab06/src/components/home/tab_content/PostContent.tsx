import React from "react";
import postController from "../../../controllers/post_controller";
import "../../../styles/home/tab_content/post-content.scss";

export default function PostContent({ user }: { user: object }) {
  const [posts, setPosts] = React.useState([]);
  const [maxPage, setMaxPage] = React.useState(0);

  const [postTitle, setPostTitle] = React.useState("");
  const [postContent, setPostContent] = React.useState("");
  const [postSummary, setPostSummary] = React.useState("");
  const [postMetaTitle, setPostMetaTitle] = React.useState("");
  const [postPublised, setPostPublised] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const response = await postController.getAll(0);
      setMaxPage(response.data.page.totalPages);
      setPosts(response.data._embedded.posts);
    }
    fetchData();
  }, []);

  const solveNextUserPage = (page: number) => {
    async function fetchData() {
      const response = await postController.getAll(page - 1);
      setMaxPage(response.data.page.totalPages);
      setPosts(response.data._embedded.posts);
    }
    fetchData();
  };

  const solveCreatePost = () => {
    async function addPost() {
      await postController.addPost(
        postTitle,
        postContent,
        postSummary,
        postMetaTitle,
        postPublised,
        user
      );
      const response = await postController.getAll(0);
      setMaxPage(response.data.page.totalPages);
      setPosts(response.data._embedded.posts);
    }
    addPost();
  };

  return (
    <div className="container-fluid ">
      {/* Search Post */}
      <div className="container-fluid">
        <div className="d-flex flex-row align-items-center justify-content-around">
          <div className="d-flex align-items-center">
            <label className="form-label col-5">Post ID:</label>
            <input className="form-control" name="inputPostID" />
          </div>
          <div className="d-flex align-items-center">
            <label className="form-label col-5">Post title:</label>
            <input className="form-control" name="inputPostName" />
          </div>
          <div className="d-flex align-items-center">
            <label className="form-label col-5">Author name:</label>
            <input className="form-control" name="inputAuthorName" />
          </div>
        </div>
        <div className="text-center mt-2">
          <button className="btn btn-secondary">Search</button>
        </div>
      </div>

      {/* Action */}
      <div className="container-fluid d-flex align-items-center justify-content-evenly mt-3">
        <div className="container-fluid">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#createPost"
          >
            Ask a question
          </button>
        </div>
        <div className="container-fluid col-2 d-flex align-items-center">
          <label className="col-4">Sorted by:</label>
          <select className="form-select">
            <option value="created">CREATED</option>
            <option value="updated">UPDATED</option>
            <option value="published">PUBLISHED</option>
            <option value="title">TITLE</option>
          </select>
        </div>
      </div>

      {/* Model create post */}
      <div
        className="w-100 modal fade"
        id="createPost"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="createPostLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createPostLabel">
                CREATE QUESTION
              </h1>
            </div>
            <div className="modal-body">
              <form>
                <div className="container-fluid d-flex aling-items-center">
                  <label className="form-label col-1">Title:</label>
                  <input
                    onChange={(e) => setPostTitle(e.target.value)}
                    className="form-control"
                    name="inputPostTitle"
                    required
                  />
                </div>
                <div className="container-fluid d-flex aling-items-center">
                  <label className="form-label col-1">Content:</label>
                  <textarea
                    onChange={(e) => setPostContent(e.target.value)}
                    className="form-control"
                    name="inputPostContent"
                    rows={10}
                    required
                  />
                </div>
                <div className="container-fluid d-flex aling-items-center">
                  <label className="form-label col-1">Summary:</label>
                  <input
                    onChange={(e) => setPostSummary(e.target.value)}
                    className="form-control"
                    name="inputPostTitle"
                    required
                  />
                </div>
                <div className="container-fluid d-flex aling-items-center">
                  <label className="form-label col-1">Meta title:</label>
                  <input
                    onChange={(e) => setPostMetaTitle(e.target.value)}
                    className="form-control"
                    name="inputPostTitle"
                    required
                  />
                </div>
                <div className="container-fluid d-flex aling-items-center">
                  <label className="form-label col-1">Published:</label>
                  <input
                    type="radio"
                    className="form-check"
                    name="inputPostTitle"
                    checked={postPublised}
                    onClick={() => setPostPublised(!postPublised)}
                    required
                  />
                </div>
                <div className="container-fluid text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => solveCreatePost()}
                  >
                    Create Question
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page */}
      <div className="container-fluid text-center mt-5">
        {Array.from(Array(maxPage).keys()).map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => solveNextUserPage(page + 1)}
              className="btn btn-primary ms-3"
            >
              {page + 1}
            </button>
          );
        })}
      </div>

      {/* List Posts */}
      <div className="container-fluid">
        {posts.map((post: object, index: number) => {
          return (
            <div key={index.toString()} className="d-flex align-items-center justify-content-between mt-3 post-item">
              <div className="d-flex align-items-center">
                <div style={{width: "200px"}} className="text-center">
                  <h1 style={{fontSize: "80px"}} className="text-center">{post.id}</h1>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <div>
                    <span style={{fontSize: "35px"}}>{post.title}</span>
                  </div>
                  <div>
                    <span>{post.metaTitle}</span>
                  </div>
                </div>
              </div>
              <div>
                <span>Author: <span className="fw-bold fs-5">{post.author.firstName} {post.author.lastName}</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
