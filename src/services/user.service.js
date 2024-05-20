import Joi from 'joi';
import jwt from 'jsonwebtoken';
import { User } from '../database/models/index.js';

const userService = {
    newUserAuth: async (newUser) => {
        const schema = Joi.object({
            displayName: Joi.string().min(8).required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const auth = schema.validate(newUser);

        const { error, value } = auth;

        if (error) return { code: 400, message: { message: error.message } };

        return value;
    },
    generateToken: async (userInfos) => {
        const token = jwt.sign({ data: userInfos }, process.env.JWT_SECRET);

        return token;
    },
    createUser: async (newUser) => {
        const user = await User.create(newUser);
        return user;
    },
    getUsers: async () => {
        const users = await User.findAll();

        return users;
    },
    findUser: async ({ email }) => {
        const user = await User.findOne({
            where: { email },
            raw: true,
            attributes: { exclude: ['password'] }
        })

        if (!user) return { code: 404, message: { message: 'User does not exist' } };

        return user;
    },
    findUserByID: async (id) => {
        const user = await User.findOne({
            where: { id },
            raw: true,
            attributes: { exclude: ['password'] }
        })

        if (!user) return { code: 404, message: { message: 'User does not exist' } };

        return user;
    },
    deleteUser: async (id) => {
        await models.User.destroy({ where: { id } });
        return true;
    }
}

export default userService;