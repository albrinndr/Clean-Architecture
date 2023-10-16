import User from "../../domain/models/user";

interface UserRepository {
    save(user: User): Promise<any>;
}

export default UserRepository;
