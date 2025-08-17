import { ExecuteRecordSetQry, ExecuteQry } from "../Config/connect";


export function Register(full_name, username, password) {

    const qry = `INSERT INTO users (full_name,username,password) values(?,?,?)`;

    const result = ExecuteQry(qry, [full_name, username, password]);

    return result;
}