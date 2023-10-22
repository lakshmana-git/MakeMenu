import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

const app = express()

app.use(express.json())


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB connected...")
}).catch((error)=>{
    console.log(error) 
})



//api Routes
app.use('/api',userRoute)
app.use('/api/auth',authRouter)



app.listen(3000,()=>{
    console.log("Server running on port 3000....")
})



//middelware to handle errors

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success:false,
        error:message,
        statusCode
    })
})