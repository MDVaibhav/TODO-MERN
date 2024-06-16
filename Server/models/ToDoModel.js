
const mongoose =require('mongoose')
const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        require: true
    },
    expiryDate: { type: Date, required: true }
})
module.exports=mongoose.model('ToDo',todoSchema)