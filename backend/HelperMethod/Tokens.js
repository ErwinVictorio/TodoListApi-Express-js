import jwt from 'jsonwebtoken';
import dotenv  from 'dotenv';

dotenv.config()



export function GenerateToken(payload){
    return jwt.sign(payload, env.process.SECRET_KEY , { expiresIn: '1h'});
}