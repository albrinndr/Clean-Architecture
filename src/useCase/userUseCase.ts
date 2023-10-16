import User from "../domain/models/user";
import UserRepo from "../infrastructure/repositories/userRepo";

class UserUseCase {
    private UserRepo: UserRepo;
    constructor(UserRepo: UserRepo) {
        this.UserRepo = UserRepo;
    }

    async signUp(user: User) {
        const newUser = { ...user };
        await this.UserRepo.save(newUser);
        return {
            status: 200,
            data: newUser
        };
    }
}

export default UserUseCase;
