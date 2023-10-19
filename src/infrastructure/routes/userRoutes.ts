import express from 'express';

import UserController from "../../adapters/controllers/userController";
import UserRepo from "../repositories/userRepo";
import UserUseCase from "../../useCase/userUseCase";
import Encrypt from '../hashing/password';

const repository = new UserRepo();
const encrypt = new Encrypt();
const useCase = new UserUseCase(repository,encrypt);
const controller = new UserController(useCase);

const router = express.Router();

router.post('/api/user/signUp', (req, res) => controller.signUp(req, res));
router.post('/api/user/login', (req, res) => controller.login(req, res));

export default router;
