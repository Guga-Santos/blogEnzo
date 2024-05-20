import { Sequelize, DataTypes } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import UserModel from './user.model.js';


import config from '../config/config.js';


const sequelize = new Sequelize({
    ...config.development
});


const User = UserModel(sequelize, DataTypes);


export { User, sequelize, Sequelize };
