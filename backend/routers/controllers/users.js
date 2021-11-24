const {user,dashbord} = require('../db')


const getAllUsers = (req,res)=>{
    res.send(user)
}
const getUser=(req,res)=>{
  const {userName,passWord}=req.body;
  console.log(req.body);
  const foundUser=user.find((elem)=>{
      return (elem.userName==userName && elem.passWord==passWord) //id from the index of the array.//dose not work!!
      console.log(foundUser)
  })  
  
  if(foundUser){
      res.send(foundUser)
      return
  }
  res.status(404).send('can not find the user!!')
}
const addUser=(req,res)=>{
    const addedUser={
        userName:req.body.userName,
        passWord:req.body.passWord,
        id:req.id
    }
    
    user.push(addedUser)
    res.status(201).send(addedUser);
}
const updateUser=(req,res)=>{
    const userId= req.query.id.forEach((elem,i)=>{
        if(i == id){
            elem.userName=req.body.userName
            elem.passWord=req.body.passWord
        }
    })
}

//////////////////////////////////for the cards
const getAll =(req,res)=>{
            res.send(dashbord)
        }


module.exports={getAllUsers,getUser,addUser,updateUser,getAll}
/////////////////calling the information for the cards////////////
// const {dashbord}=require('../db')

//     const getAll =(req,res)=>{
//         res.send(dashbord)
//     }
//     module.exports={getAll}
