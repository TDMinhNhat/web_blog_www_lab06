import userModel from "../models/users_model";

const userController = {

    getAll: (page: number) => {
        return userModel.getAll(page);
    }
}

export default userController;