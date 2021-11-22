const {user} = require('../db')


const getAllUser =(req,res)=>{
    res.send(user)
}
const getUser=(req,res)=>{
  const foundUser=user.find((elem)=>{
      return elem.user == req.body.id //id from the index of the array.//dose not work!!

  })  
  if(foundUser.length >0){
      req.send(foundUser[0])
      return
  }
  res.status(404).send('can not find the user!!')
}
const addUser=(req,res)=>{
    const addedUser={
        userName:req.body.userName,
        passWord:req.body.passWord
    }
    
    user.push(addedUser)
    res.status(201).send(addedUser);
}
const updateUser=(req,res)=>{
    const userId= req.query.iduser.forEach((elem,i)=>{
        if(i == userId){
            elem.userName=req.body.userName
            elem.passWord=req.body.passWord
        }
    })
}
module.exports={getAllUser,getUser,addUser,updateUser}