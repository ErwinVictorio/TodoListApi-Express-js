
import express, { Router } from 'express'
const router = express.Router();
import { GetTodo, TodoCreate,Show,updateTodo,DeleteTdo } from '../Controller/TodoController.js';
import { todoValidationSchema , handleValidationInputs } from '../validators/TodoValidate.js';
import { authMiddleware  } from '../Middlewares/authMiddleware.js';
import { RegisterUser,login } from '../Controller/UserController.js';
import { loginMidleware } from '../Middlewares/loginMidlleware.js';
import { RegisterValidationForm } from '../validators/RegisterValidator.js';
import { LoginValidateInput } from '../validators/loginValidateInput.js';



//protected routes
router.get('/', authMiddleware,GetTodo);
router.get('/:TodoId',authMiddleware,Show);
router.post('/create', authMiddleware, todoValidationSchema, handleValidationInputs,TodoCreate);
router.put('/:TodoId',authMiddleware,todoValidationSchema, handleValidationInputs, updateTodo);
router.delete('/:TodoId',DeleteTdo);

//unprotected routes
router.post('/register-account',RegisterValidationForm,handleValidationInputs,RegisterUser);
router.post('/login',LoginValidateInput,loginMidleware,login);



export default router;













