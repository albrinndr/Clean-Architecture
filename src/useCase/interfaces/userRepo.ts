import User from "../../domain/models/user";

interface UserRepository {
    save(user: User): Promise<any>;
    findByEmail(email: string): Promise<any>;
}

export default UserRepository;
