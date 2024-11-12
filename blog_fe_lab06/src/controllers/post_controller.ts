import postModel from "../models/post_models"

const postController = {

    getAll: (page: number) => {
        return postModel.getAll(page);
    }
}

export default postController;