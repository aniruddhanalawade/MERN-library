const mongoose = require('mongoose');

const userSchema = mongoose.mongoose.Schema({
    FName:{
        type:String,
        required:true
    },
    LName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Cpassword:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model('user',userSchema);