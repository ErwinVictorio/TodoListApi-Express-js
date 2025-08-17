
import express, { Router } from 'express'
const router = express.Router();
import { GetTodo, TodoCreate,Show,updateTodo,DeleteTdo } from '../Controller/TodoController.js';
import { todoValidationSchema , handleValidationInputs } from '../validators/TodoValidate.js';

router.get('/', GetTodo);
router.get('/:TodoId',Show);




router.post('/create',todoValidationSchema, handleValidationInputs,TodoCreate);
router.put('/:TodoId',todoValidationSchema, handleValidationInputs, updateTodo);
router.delete('/:TodoId',DeleteTdo);



export default router;













