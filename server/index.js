const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userController = require('./controller/userController')
const cookieParser = require('cookie-parser')


const server = express();

//middleware
server.use(express.json());
server.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET','POST'],
    credentials:true
}
));
server.use(cookieParser());





//db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/auth');
    console.log('db connected');
}


const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Message:"we x token please provide it"})
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decode)=>{
            if(err){
                return res.json({Message:"auth error"})
            }else{
                req.email = decode.email;
                next();
            }
        })
    }
}



server.get('/',verifyUser,userController.userVerify)
server.get('/logout',userController.userLogout)
server.post('/register',userController.userRegister)
server.post('/login',userController.userLogin)




//server
server.listen(8080,()=>{
    console.log('server started');
});
