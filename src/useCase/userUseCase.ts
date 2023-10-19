import User from "../domain/models/user";
import UserRepo from "../infrastructure/repositories/userRepo";
import Encrypt from "../infrastructure/hashing/password";

class UserUseCase {
    private UserRepo: UserRepo;
    private Encrypt: Encrypt;

    constructor(UserRepo: UserRepo, Encrypt: Encrypt) {
        this.Encrypt = Encrypt;
        this.UserRepo = UserRepo;
    }

    //user signup 
    async signUp(user: User) {
        const userAlreadyExists = await this.UserRepo.findByEmail(user.email);
        if (userAlreadyExists) {
            return {
                status: 400,
                data: 'User already exists!'
            };
        } else {
            const hashedPassword = await this.Encrypt.generateHash(user.password);
            const newUser = { ...user, password: hashedPassword };
            await this.UserRepo.save(newUser);
            return {
                status: 200,
                data: newUser
            };
        }
    }

    //user login
    async login(user: User) {
        const userExists = await this.UserRepo.findByEmail(user.email);
        if (userExists) {
            const passwordMatch = await this.Encrypt.compare(user.password, userExists.password);
            if (passwordMatch) {
                return {
                    status: 200,
                    data: {
                        name: userExists.name,
                        email: userExists.email
                    }
                };
            } else {
                return {
                    status: 400,
                    data: 'Invalid email or password'
                };
            }

        } else {
            return {
                status: 400,
                data: 'Invalid email or password'
            };
        }
    }
}

export default UserUseCase;
