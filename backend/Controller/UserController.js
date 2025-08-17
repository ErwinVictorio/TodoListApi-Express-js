import { Register } from "../Models/Users";
import { bcrypt } from 'bcrypt';

export async function RegisterUser(req, res) {

    try {
        const { full_name, username, password } = req.body; // get the input from body

        //  to hash password 
        const saltRounds = 10;
        const HashPassword = await bcrypt.hash(password, saltRounds)

        const result = await Register(full_name, username, HashPassword);

        if (result.affectedRows === 0) { // check if the affectedRows is  === 0  meaning failed to register your account
            return res.status(400).json({
                message: "Failed To Register Your Account"
            })
        }

        //else return success message
        return res.status(200).json({
            message: "Successfully Register Your Account",
            affectedRows: res.affectedRows
        })

    } catch (error) {

        return res.status(500).json({
            message: `We have Server Error: ${error}`
        })
    }


}