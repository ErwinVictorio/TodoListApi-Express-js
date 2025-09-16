import { ExecuteRecordSetQry, ExecuteQry } from '../Config/connect.js';

// for select * query
export async function GetAllNotes() {
    const qry = `SELECT * FROM todos`;

    const rows = await ExecuteRecordSetQry(qry)

    return rows;
}



export async function createTodo(todo,userId) {

    const qry = `INSERT INTO todos (todo,user_id) values(?,?)`;
    const result = await ExecuteQry(qry, [todo,userId])

    return result;
}



export async function ShowById(TodoId) {

    const qry = `SELECT * FROM todos WHERE id  = ?`;

    const rows = await ExecuteRecordSetQry(qry, [TodoId]);

    return rows
}



export async function update(Todo,TodoId){

    const qry = `UPDATE todos SET todo = ? WHERE id = ?`;
    //  execute the query
    const result =  await ExecuteQry(qry,[Todo,TodoId,]);

    return result;
}


export async function TodoDelete(TodoId){

    const query = `DELETE FROM todos WHERE id = ?`;

    const result = await ExecuteQry(query,[TodoId]);
    
    return result;
}




