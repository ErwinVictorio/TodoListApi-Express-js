import { checkSchema } from "express-validator";

export const LoginValidateInput = checkSchema({
    username: {
        in:['body'],
        trim: true,
        notEmpty:{
            errorMessage: 'username is reqired',
        }
    },
        password: {
        in:['body'],
        trim: true,
        notEmpty:{
            errorMessage: 'password is reqired',
        }
    }
});