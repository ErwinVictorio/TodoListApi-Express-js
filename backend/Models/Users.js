import { ExecuteRecordSetQry, ExecuteQry } from "../Config/connect.js";


export async function Register(full_name, username, password) {

    const qry = `INSERT INTO users (full_name,username,password) values(?,?,?)`;

    const result = await ExecuteQry(qry, [full_name, username, password]);

    return result;
}


export async function checkUserIsExist(username) {

    const qry = "SELECT username FROM users WHERE username = ? ";

    const row = await ExecuteRecordSetQry(qry, [username]);

    return row;

}


export async function Login(username){

    const qry = "SELECT * FROM users WHERE username = ?";

    const user = ExecuteRecordSetQry(qry,[username])

    return user;
}