import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import CateRouter from './routes/item.route.js'
import path from 'path'
import cookieParser from 'cookie-parser'




dotenv.config()


const __dirname = path.resolve()
const app = express()

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use(express.json())


app.use(cookieParser())

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB connected...")
}).catch((error)=>{
    console.log(error) 
})



//api Routes
app.use('/api/user',userRoute)
app.use('/api/auth',authRouter)
app.use('/api/item',CateRouter)




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