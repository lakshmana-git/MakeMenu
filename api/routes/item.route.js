import express from 'express'
import { addCategory, addItem, addOrUpdateUserTheme, addTheme, deleteItem, editItem, getAllCategory, getAllItems, getCurrentTheme } from '../controllers/item.controller.js';


const router = express.Router()

router.get('/allcategories',getAllCategory)
router.post('/category',addCategory)
router.post('/additem',addItem)
router.get('/:userId',getAllItems)
router.delete('/delete/:itemId',deleteItem)
router.post('/addtheme',addTheme)
router.post('/theme/user',addOrUpdateUserTheme)
router.get('/theme/current/:userId',getCurrentTheme)
router.put('/edit/:itemId',editItem)
export default router;