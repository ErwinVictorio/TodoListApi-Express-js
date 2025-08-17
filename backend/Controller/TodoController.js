import { GetAllNotes, createTodo, ShowById, update, TodoDelete } from '../Models/Todo.js';

export async function GetTodo(req, res) {

    try {

        const todo = await GetAllNotes();

        if (todo.length > 0) {
            return res.status(201).json(todo)
        }
        return res.status(200).json('No Data Available');

    } catch (error) {

        return res.status(500).json(`We have server error: ${error}`)
    }
}


export async function TodoCreate(req, res) {

    try {
        const { todo } = req.body;
        await createTodo(todo); // execute the query

        return res.status(201).json({ message: `Successfully Created Todo ${todo}`, });

    } catch (error) {

        return res.status(500).json(`error creating todos: ${error}`)

    }
}


export async function Show(req, res,) {

    const { TodoId } = req.params;

    try {
        const result = await ShowById(TodoId) // execute the query

        if (result.length > 0) {
            return res.status(201).json(result)
        }

        return res.status(400).json({ message: 'Todo Not Found' });



    } catch (error) {
        return res.status(500).json({ message: `Error:  ${error}` })
    }

}



export async function updateTodo(req, res) {

    try {
        const { todo } = req.body
        const { TodoId } = req.params

        const result = await update(todo, TodoId);


        if (result.affectedRows > 0) {

            return res.status(201).json({ message: "successfully Updated", totalAffected: result.affectedRows })
        }

        return res.status(400).json({ message: 'Failed To Updated' })
    } catch (error) {

        return res.status(500).json({ message: `Error: ${error}` })
    }

}


export async function DeleteTdo(req, res) {

    const { TodoId } = req.params;

    try {
    
        const result = await TodoDelete(TodoId); // call the model function

        //  to check if the id provided is exist on database
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Todo No Found",
                affectedRows: result.affectedRows
            })
        }

        if (result.affectedRows > 0) { // check if greater than zero yong affected rows meaning successfully updated

            return res.status(201).json({
                message: 'Successfully Deleted',
                affectedRows: result.affectedRows
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'we have server error' . error })
    }


}



// Good question 👍

// Yung **affectedRows** ay gaoling sa MySQL driver (mysql2) mismo.

// Kapag nag-execute ka ng INSERT / UPDATE / DELETE gamit pool.query() o ExecuteQry(), ang result na nire-return ng MySQL ay isang object na may mga properties tulad ng:

// {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 3,
//   info: '',
//   serverStatus: 2,
//   warningStatus: 0
// }

// Meaning ng ilan dito:

// affectedRows → ilang rows ang naapektuhan ng query (hal. ilang na-update o na-delete).

// insertId → kung INSERT ang query, ito yung auto-increment id ng bagong row.

// fieldCount → bilang ng fields (mostly 0 sa INSERT/UPDATE/DELETE).