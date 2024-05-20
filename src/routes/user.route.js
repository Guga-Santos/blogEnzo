import { Router } from "express";
import userController from "../controllers/user.controller.js";

const User = Router();

User.route('/').get(userController.getUsers);

export default User;