const express=require('express');

const userRouter =express.Router();
const {getUser,getAllUsers,updateUser,addUser,userInfo}=require('../controllers/users')
const{user}=require('../db')

userRouter.get('/',getAllUsers)
userRouter.post('/login/', getUser)
userRouter.post('/info/dash',userInfo)
userRouter.post('/user',addUser)
userRouter.put('/user',updateUser)
module.exports={userRouter};