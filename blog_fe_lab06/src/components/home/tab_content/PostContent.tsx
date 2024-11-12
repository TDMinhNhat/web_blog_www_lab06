import React from "react"
import postController from "../../../controllers/post_controller"

export default function PostContent({ user }: { user: object }) {

    const [posts, setPosts] = React.useState([])
    const [maxPage, setMaxPage] = React.useState(0);

    React.useEffect(() => {
        async function fetchData() {
            const response = await postController.getAll(0);
            setMaxPage(response.data.page.totalPages);
            setPosts(response.data._embedded.posts);
        }
        fetchData();
    }, [])

    return (
        <div className="container-fluid ">
            {/* Search Post */}

            {/* Page */}
            <div className="container-fluid text-center mt-5">
                {
                    Array.from(Array(maxPage).keys()).map((page, index) => {
                        return (
                            <button key={index} onClick={() => solveNextUserPage(page + 1)} className="btn btn-primary ms-3">{page + 1}</button>
                        )
                    })
                }
            </div>

            {/* List Posts */}
            <div className="container-fluid">
                { posts.map((post: object, index: number) => {
                    return (
                        <div key={index.toString()}>{post.id}</div>
                    )
                })}
            </div>
        </div>
    )
}