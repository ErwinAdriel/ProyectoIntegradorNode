import jwt from 'jsonwebtoken';
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if(!token){
        return res.status(401).json({ message: 'No token provided' });
    } else {
        jwt.verify(token, secret_key, (err) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
            next();
        })   
    }
}