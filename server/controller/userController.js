const model = require('../models/userModel')
const User = model.UserModel;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


exports.userLogout = (req,res)=>{
    res.clearCookie('token');
    return res.json({Status:'Success'})
}

exports.userVerify = (req,res)=>{
    return res.json({Status:"Success",email:req.email})
}





exports.userRegister = async (req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        User.create({name,email,password:hash})
        .then((user) => res.json({status:"Success",role:user.role,email:user.email}))
        .catch((err) => res.json(err))
    })
    .catch((err) => res.json(err))

}

exports.userLogin = async (req,res)=>{
    const {email,password} = req.body
    await User.findOne({email:email})
        .then((user) => {
            if(user){
                bcrypt.compare(password,user.password,(err,response)=>{
                    if(response){
                        const token = jwt.sign({email:user.email,role:user.role},
                            "jwt-secret-key",{expiresIn:'5d'})     
                        res.cookie('token',token)
                        return res.json({Status:"Success",role:user.role,email:user.email})
                    }else{
                        return res.json('Incorrect password')
                        
                    }
                })

            }else{
                res.json("User not found")
            }
        })
        .catch((err) => res.json(err))
    
}