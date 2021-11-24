const express=require('express');

const userRouter =express.Router();
const {getUser,getAllUsers,updateUser,addUser}=require('../controllers/users')
const{user}=require('../db')

userRouter.get('/',getAllUsers)
userRouter.post('/', getUser)
userRouter.post('/user',addUser)
userRouter.put('/user',updateUser)
module.exports={userRouter};