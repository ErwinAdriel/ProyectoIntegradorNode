import * as userModels from '../models/users.model.js';

export const getAllUsers = async () => {
    const users = await userModels.getAllUsers();
    return users;
}