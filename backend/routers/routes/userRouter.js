const express=require('express');

const userRouter =express.Router();
const {getUser,getAllUser,updateUser,addUser}=require('../controllers/users')
const{user}=require('../db')

userRouter.get('/',getAllUser)
userRouter.get('/:id', getUser)
userRouter.post('/user',addUser)
userRouter.put('/user',updateUser)
module.exports={userRouter};