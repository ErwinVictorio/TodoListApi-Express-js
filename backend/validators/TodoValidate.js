import { checkSchema, validationResult } from "express-validator";

// ✅ Validation schema reuse this when you validate same input or like you want to update data and validate before sending the data on database 
export const todoValidationSchema = checkSchema({
  todo: {
    in: ['body'],               
    trim: true,                  // auto-trim
    notEmpty: {
      errorMessage: "todo is required",
    }
  },
  userId: {
    in: ['body'],
    trim:true,
    notEmpty:{
      errorMessage: "please Provide UserId"
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
          











// Because in Express you can receive data from multiple sources:

// req.body → JSON or form data (from POST/PUT requests)

// req.query → query params (/api?username=ervic)

// req.params → route params (/user/:id)

// req.cookies → cookies

// So in: ['body'] makes sure Express Validator only checks the body and ignores query/params.


  // 1. Check if user already exists
    // const existing = await UserModel.findOne({ email });
    // if (existing) return res.status(400).json({ error: "Email already registered" });


    // // 4. Generate token (optional: auto-login after register)
    // const token = jwt.sign(
    //   { id: 1, email }, // normally newUser.id
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );
