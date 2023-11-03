import { Category, Theme, ThemeUser } from "../models/items.model.js"
import { Item } from "../models/items.model.js"
import mongoose from "mongoose"

export const addCategory=async(req,res,next)=>{
   const  {name} = req.body
   
   const CateAdd = new Category({name})
   
   try{
    await CateAdd.save()
    res.status(200).json({"message":"category added sucessfully"})
    }catch(error){
   next(error);
 }

        
}
export const addTheme=async(req,res,next)=>{
  const  {theme} = req.body
  
  const themeAdd = new Theme({theme})
  
  try{
   await themeAdd.save()
   res.status(200).json({"message":"theme added sucessfully"})
   }catch(error){
  next(error);
}

       
}

export const getAllCategory = async (req, res, next) => {
    try {

      const categories = await Category.find({});
  
     
      res.status(200).json({ categories });

    } catch (error) {
      
      next(error);
    }
}

export const getAllItems = async (req, res, next) => {
  try {
    const userId = req.params.userId;

   
    const items = await Item.find({ user: userId }).populate({
      path: 'category',
      select: 'name',
    });

    res.status(200).json({ items });
  } catch (error) {
    next(error);
  }
}


export const addItem = async (req, res, next) => {
    try {
      const { name, price, category, user } = req.body; 
     
      const categoryFind = await Category.findOne({ name: category });
    
  
      if (!categoryFind) {
        
        return res.status(400).json({ message: 'Category not found' });
      }
  
      
      const newItem = new Item({
        name,
        price, 
        category: categoryFind._id, 
        user:user
  
      })
      await newItem.save();
  
      res.status(201).json({ message: 'Item added successfully', item: newItem });
    } catch (error) {
      next(error);
    }
  };

  export const deleteItem = async (req, res, next) => {
    try {
     
      const itemId = req.params.itemId;
      
      console.log('Deleting item with ID:', itemId);
  
      // Attempt to delete the item from the database
      const deletedItem = await Item.findByIdAndDelete(itemId);
  
      if (!deletedItem) {
        // If the item wasn't found, return a 404 response
        return res.status(404).json({ message: 'Item not found' });
      }
  
      // Item successfully deleted
      res.status(200).json({ message: 'Item has been deleted' });
    } catch (error) {
      // Handle any errors (e.g., database connection issues, server errors)
      console.error('Error deleting item:', error);
      next(error); // Pass the error to the error handling middleware
    }
  };

  export const addOrUpdateUserTheme = async (req, res, next) => {
    try {
      const { user, theme } = req.body; 
  
      const themeDoc = await Theme.findOne({ theme: theme });
      console.log(themeDoc._id)
      let existingTheme = await ThemeUser.findOne({ user: user });
       console.log(existingTheme)
      if (!existingTheme) {
        existingTheme = new ThemeUser({
          theme: themeDoc._id,
          user
        });
        await existingTheme.save();
      } else {
       
        existingTheme.theme = themeDoc._id;
        await existingTheme.save();
      }
  
       
      res.status(200).json({ message: 'Theme added/updated successfully' ,existingTheme});
    } catch (error) {
      next(error);
    }
  };
  

 export const getCurrentTheme = async (req, res, next) => {
    try {
      const user = req.params.userId; 
      
      const themeUser = await ThemeUser.findOne({ user }).populate('theme');
     
      if (!themeUser) {
        return res.status(404).json({ message: 'Current theme not found for the user' });
      }
  
      const currentTheme = themeUser.theme.theme; 
     
      res.status(200).json({ currentTheme });
    } catch (error) {
      next(error);
    }
  };
  


  export const  editItem = async(req,res,next)=>{
       try{
        const {itemId}  = req.params;
        const { name, price, category } = req.body; 

        if (!mongoose.Types.ObjectId.isValid(itemId)) {
          return res.status(400).json({ message: 'Invalid item ID' });
        }
     
        const categoryFind = await Category.findOne({ name: category });
        if (!categoryFind) {
        
          return res.status(400).json({ message: 'Category not found' });
        }
    console.log(categoryFind._id)

    console.log(itemId)
        const update = {
          name,
          price, 
          category: categoryFind._id, 
        
    
        }

        const updatedItem = await  Item.findByIdAndUpdate(itemId,update,{new:true})

        if(!updatedItem){
          return res.status(404).json({
            error:"Item Not Found"
          })
        }
        res.status(200).json(updatedItem)

       }
       catch(error){

        next(error)

       }
  }