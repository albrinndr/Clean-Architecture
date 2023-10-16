import express from 'express';

import UserController from "../../adapters/controllers/userController";
import UserRepo from "../repositories/userRepo";
import UserUseCase from "../../useCase/userUseCase";

const repository = new UserRepo();
const useCase = new UserUseCase(repository);
const controller = new UserController(useCase);

const router = express.Router();

router.post('/api/user/signUp', (req, res) => controller.signUp(req, res));

export default router;
