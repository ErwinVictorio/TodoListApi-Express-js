
import express, { Router } from 'express'
const router = express.Router();
import { GetTodo, TodoCreate,Show,updateTodo } from '../Controller/TodoController.js';
import { todoValidationSchema , handleValidationInputs } from '../validators/TodoValidate.js';

router.get('/', GetTodo);
router.get('/:TodoId',Show);




router.post('/create',todoValidationSchema, handleValidationInputs,TodoCreate);
router.put('/:TodoId',todoValidationSchema, handleValidationInputs, updateTodo);



export default router;













