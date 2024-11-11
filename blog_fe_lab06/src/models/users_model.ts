import axios from "axios";

const userModel = {

    getAll: async (page: number) => {
        return await axios.get(`http://localhost:8080/api/users?page=${page}&size=10`).then(response => response).catch(error => alert("Error: " + error));
    }

}

export default userModel;