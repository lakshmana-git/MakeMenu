import mongoose from "mongoose";
import User from "./user.model.js";

const Schema = mongoose.Schema;


const themeSchema = new Schema({
     theme:{
      type:String
      
     },
    
})

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
 
});

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required:true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: User, 
    required: true, 
  },
});

const themeUser = new Schema({
  theme: {
    type: Schema.Types.ObjectId,
    ref: 'Theme',
    required:true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: User, 
    required: true, 
  }

 
})



export const Category = mongoose.model('Category', categorySchema);
export const Item = mongoose.model('Item', itemSchema);
export const Theme = mongoose.model('Theme', themeSchema);
export const ThemeUser = mongoose.model('ThemeUser', themeUser);


