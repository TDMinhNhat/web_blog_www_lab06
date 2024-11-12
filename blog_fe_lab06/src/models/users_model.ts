import axios from "axios";

const userModel = {

    checkLogin: async (email: string, password: string) => { 
        return await axios.post(`http://localhost:8080/api/v1/users/login?email=${email}&password=${password}`).then(response => response).catch(error => alert("Error: " + error));
    },

    getAll: async (page: number) => {
        return await axios.get(`http://localhost:8080/api/users?page=${page}&size=10`).then(response => response).catch(error => alert("Error: " + error));
    },

    deleteUser: async (id: number) => {
        return await axios.delete(`http://localhost:8080/api/users/${id}`).then(response => response).catch(error => alert("Error: " + error));
    }
}

export default userModel;