
import express, { Router } from 'express'
const router = express.Router();
import { GetTodo, TodoCreate,Show,updateTodo,DeleteTdo } from '../Controller/TodoController.js';
import { todoValidationSchema , handleValidationInputs } from '../validators/TodoValidate.js';
import { RegisterUser } from '../Controller/UserController.js';
import { RegisterValidationForm } from '../validators/RegisterValidator.js';

router.get('/', GetTodo);
router.get('/:TodoId',Show);




router.post('/create',todoValidationSchema, handleValidationInputs,TodoCreate);
router.put('/:TodoId',todoValidationSchema, handleValidationInputs, updateTodo);
router.delete('/:TodoId',DeleteTdo);

// router for Register
router.post('/register-account',RegisterValidationForm,handleValidationInputs,RegisterUser);




export default router;













