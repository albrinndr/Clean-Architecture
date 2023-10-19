import User from "../../domain/models/user";
import { UserModel } from "../db/models/userModel";
import UserRepository from "../../useCase/interfaces/userRepo";

class UserRepo implements UserRepository {
    async save(user: User) {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser;
    }

    async findByEmail(email: string) {
        const user = await UserModel.findOne({ email });
        if (user) return user;
        return null;
    }

}

export default UserRepo;
