const express = require ('express')
const mongoose=require('mongoose')
const routes=require('./routes/ToDoRoutes')
const cors =require('cors')


require('dotenv').config()
const app =express()
const PORT =process.env.port ||5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URl)
    .then(()=>console.log(`Connected to My Database.....`))
    .catch((err)=>console.log(err))

    app.use(routes)

app.listen(PORT,()=>console.log(`Listening on : ${PORT}`))