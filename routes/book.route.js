const express=require('express');
const router=express.Router()
const {bookCreate,bookSearch,getById}=require('../controllers/book.controller')
const BookModel =require('../models/book.model')
router.route('/search').get(bookSearch);
router.route('/create').post(bookCreate)
router.route('/info/:id').get(getById)
router.route('/').get(async(req,res)=>{
    const data=await BookModel.find()
    res.send(data)
});



module.exports=router