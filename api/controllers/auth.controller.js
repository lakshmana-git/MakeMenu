import { errorHandler } from "../../utils/error.js";
import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body
   
     const hashedPassword = bcryptjs.hashSync(password,10)
     const newUser = new User({username,email,password:hashedPassword})
     

     try{
        await newUser.save()
        res.status(200).json({"message":"User created succesfully"})
     }catch(error){
       next(error);
     }
    
     
};