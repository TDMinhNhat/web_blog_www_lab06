import userModel from "../models/users_model";

const userController = {

    getAll: (page: number) => {
        return userModel.getAll(page);
    },

    deleteUser: (id: number) => {
        return userModel.deleteUser(id);
    }
}

export default userController;