import postModel from "../models/post_models"

const postController = {

    addPost: (postTitle: string, postContent: string, postSummary: string, postTitleMeta: string, postPublished: boolean, user: object) => {
        return postModel.addPost(postTitle, postContent, postSummary, postTitleMeta, postPublished, user);
    },

    getAll: (page: number) => {
        return postModel.getAll(page);
    }
}

export default postController;