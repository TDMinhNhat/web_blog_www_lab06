import axios from "axios";

const postModel = {

    getAll: async (page: number) => {
        return await axios.get(`http://localhost:8080/api/posts?page=${page}&size=20`).then(response => response).catch(error => error);
    }

}

export default postModel;