
import { checkSchema } from "express-validator";

export const RegisterValidationForm = checkSchema({

  full_name: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: "full name is required"
    },
    isLength: {
    options: { min: 3 },
    errorMessage: "full name must be at least 3 characters"
    }
  },

  username: {
    in: ['body'],
    trim: true,
    notEmpty:{
      errorMessage: "username is required"
    },
    isLength: {
      options: { min: 3},
      errorMessage: "username is must be at least 3 characters"
    }
  },

    password: {
    in: ['body'],
    trim: true,
    notEmpty:{
      errorMessage: "password is required"
    },
    isLength: {
      options: { min: 3},
      errorMessage: "password is must be at least 3 characters"
    }
  }

});
