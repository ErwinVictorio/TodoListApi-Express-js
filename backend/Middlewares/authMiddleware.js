import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

 dotenv.config();// load the dotenv file

 export function authMiddleware(req,res,next){

    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({message: "No token provided"});
        }


        // expected format "Bearer token"

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({message: "Invalid token format"});
        }

        // verify token
        const decoded = jwt.verify(token,process.env.SECRET_KEY);

        // attatch decoded user sa request
        req.user = decoded;

        next()
    } catch (error) {
        res.status(401).json({
            message: "Unauthorized: Invalid or expired token",
            error: error.message
        })
    }
 }