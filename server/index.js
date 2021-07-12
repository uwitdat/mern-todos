import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import todosRoutes from './routes/todos.js'
const app = express()

dotenv.config()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/todos', todosRoutes)


const db = ('mongodb+srv://admin:password1234@sei.dnjry.mongodb.net/todo-database?retryWrites=true&w=majority')

app.get('/', (req, res) => {
    res.send('<h1>WELCOME TO SERVER</h1>')
})



mongoose.connect(db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

).then(() => {
    console.log(`server is running on port`)
    app.listen(3001)
}).catch(err => {
    console.log('ERROR', err)
})