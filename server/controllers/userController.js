const User = require('../models/bookModel');

const user = async (req, res, next) => {
    let user;
    const { FName, LName, Email, Password, Cpassword } = req.body;

    try {
        user = new User({
            FName, 
            LName, 
            Email,
            Password, 
            Cpassword
            
        })
        await user.save();
    }
    catch (e) {
        console.log(`Error is ${e}`);
    }

    if(!user){
        return res.status(500).json({message:"can't create user "})
    }else{
        return res.status(201).json(user);
    }
}

exports.user = user;