import express from  'express'
const app = express()
import cors from 'cors';
import router  from './Routes/TodoRoutes.js';
app.use(cors()) // to communicate to another ports
app.use(express.json());   // ✅ this is required to parse JSON bodies
const port = 3000


app.use('/api', router) // this is base endpoint



app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`)
})
