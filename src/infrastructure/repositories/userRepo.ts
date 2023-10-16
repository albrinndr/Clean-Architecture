import User from "../../domain/models/user";
import { UserModel } from "../db/models/userModel";
import UserRepository from "../../useCase/interfaces/userRepo";

class UserRepo implements UserRepository {
    async save(user: User) {
        console.log(user);
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser;
    }
}

export default UserRepo;
