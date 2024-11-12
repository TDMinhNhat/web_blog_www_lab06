import userModel from "../models/users_model";

const userController = {

    checkLogin: (email: string, password: string) => { 
        return userModel.checkLogin(email, password);
    },

    getAll: (page: number) => {
        return userModel.getAll(page);
    },

    deleteUser: (id: number) => {
        return userModel.deleteUser(id);
    }
}

export default userController;