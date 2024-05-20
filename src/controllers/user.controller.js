import userService from "../services/user.service.js";

const userController = {
    createUser: async (req, res) => {
        const auth = await userService.newUserAuth(req.body);
        if (auth.code) return res.status(auth.code).json(auth.message);

        const findUser = await userService.findUser(req.body);
        if (findUser) return res.status(409).json({ message: "User already registered!"});

        const { password, ...infos } = auth;
        const token = await userService.generateToken(infos);

        await userService.createUser(auth);

        res.status(201).json({ token });
    },
    getUsers: async (req, res) => {
        const users = await userService.getUsers();
        res.status(200).json(users);
    },
    findUserByID: async (req, res) => {
        const { id } = req.params;
        const user = await userService.findUserByID(id);

        if(user.code) return res.status(user.code).json(user.message);

        res.status(200).json(user);
    },
    findUser: async (req, res) => {
        const { email } = req.body;
        const user = await userService.findUser(email);

        if(user.code) return res.status(user.code).json(user.message);

        res.status(200).json(user);
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        await userService.deleteUser(id);

        res.status(204).end();
    }
}

export default userController;