const mongoose=require('mongoose');

const bookSchema= new mongoose.Schema({
  ISBN:{
    type:Number,
    unique:true,
    required:[true,"Please tell us ISBN"]
   },
   Name: {
      type:String,
      required:[true,"Please tell us Name"]
   },
   Author:{
       type:String,
       required:[true,"Please tell us Author"],
   },
   Publisher:{
    type:String,
    required:[true,"Publisher is required!"]
   }
},{timestamps:true})

module.exports= mongoose.model('book',bookSchema);