import jwt from 'jsonwebtoken';
import Joi from 'joi';

const handleToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const schema = Joi.string().required();
        const validate = schema.validate(token);

        console.log(token);

        if (!token || validate.error) return res.status(401).json({ message: 'Token Not Found!' });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
    } catch (error) {
        return res.status(401).json({ message: 'Expired OR Invalid Token!'})
    }
    next();
}

export default handleToken;