import axios from "axios";

const postModel = {

    addPost: async (postTitle: string, postContent: string, postSummary: string, postTitleMeta: string, postPublished: boolean, user: object) => {
        return await axios.post(`http://localhost:8080/api/posts`, {
            "author": {"id": user.id},
            "title": postTitle,
            "metaTitle": postTitleMeta,
            "content": postContent,
            "summary": postSummary,
            "parent": null,
            "published": postPublished
        }).then(response => response).catch(error => error);
    },

    getAll: async (page: number) => {
        return await axios.get(`http://localhost:8080/api/posts/search/published?page=${page}&size=20`).then(response => response).catch(error => error);
    }

}

export default postModel;