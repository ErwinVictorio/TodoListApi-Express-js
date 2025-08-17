import { checkSchema, validationResult } from "express-validator";

// ✅ Validation schema
export const todoValidationSchema = checkSchema({
  todo: {
    in: ['body'],               
    trim: true,                  // auto-trim
    notEmpty: {
      errorMessage: "todo is required",
    }
  }
});

// ✅ Middleware handler
export function handleValidationInputs(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  next();
}
          