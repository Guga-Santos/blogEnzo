import { Router } from "express";
import userController from "../controllers/user.controller.js";

const User = Router();

User.route('/:id').get(userController.findUserByID);
User.route('/').get(userController.getUsers);
User.route('/').delete(userController.deleteUser);
User.route('/').post(userController.createUser);

export default User;