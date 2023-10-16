import { Request, Response } from "express";
import UserUseCase from "../../useCase/userUseCase";


class UserController {
    private userCase: UserUseCase;
    constructor(userCase: UserUseCase) {
        this.userCase = userCase;
    }

    async signUp(req: Request, res: Response) {
        try {
            const user = await this.userCase.signUp(req.body);
            res.status(user.status).json(user.data);
        } catch (err) {
            const error: Error = err as Error;
            console.log(error.message);
            res.status(401).json(error.message);
        }
    }
}

export default UserController;
