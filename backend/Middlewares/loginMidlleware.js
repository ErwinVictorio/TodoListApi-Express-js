import { GenerateToken } from "../HelperMethod/Tokens.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
dotenv.config()

import { Login } from "../Models/Users.js";

export async function loginMidleware(req, res, next) {

    try {
        const { username, password } = req.body

        const users = await Login(username);

        if (!users || users.length === 0) { // check if we have result
            return res.status(400).json({
                message: "Account Not Found"
            })
        }

        const user = users[0]

        // then if we have result then check if the password match to the plain text from password input
        const isMatch = await bcrypt.compare(password, user.password);



        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid username or password'
            })
        }

        //  if match the generate token
        const token = GenerateToken(user)

        // attach data sa request para magamit ng controller

        req.user = user;
        req.token = token;


        next()
    } catch (error) {
       res.status(500).json({
        message: `Login process Failed: error: ${error}`
       })
    }
}