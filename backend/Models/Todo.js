import { ExecuteRecordSetQry, ExecuteQry } from '../Config/connect.js';

// for select * query
export async function GetAllNotes() {
    const qry = `SELECT * FROM todo_list`;

    const rows = await ExecuteRecordSetQry(qry)

    return rows;
}



export async function createTodo(todo) {

    const qry = `INSERT INTO todo_list (todo) values(?)`;
    const result = await ExecuteQry(qry, [todo])

    return result;
}



export async function ShowById(TodoId) {


    const qry = `SELECT * FROM todo_list WHERE id  = ?`;

    const rows = await ExecuteRecordSetQry(qry, [TodoId]);

    return rows
}



export async function update(Todo,TodoId){

    const qry = `UPDATE todo SET todo_list = ? WHERE id = ?`;
    //  execute the query
    const result =  await ExecuteQry(qry,[Todo,TodoId,]);

    return result;
}

