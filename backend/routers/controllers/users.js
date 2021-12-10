const { response } = require("express");
const { user } = require("../db");

const getAllUsers = (req, res) => {
  res.send(user);
};
const getUser = (req, res) => {
  const { userName, passWord } = req.body;
  
  const foundUser = user.find((elem) => {
    return elem.userName === userName && elem.passWord === passWord;
   
  }); 

  if (foundUser) res.send(foundUser);
  //   return
  else res.status(404).send("can not find the user!!");
};
const addUser = (req, res) => {
  const addedUser = {
    userName: req.body.userName,
    passWord: req.body.passWord,
    id: req.id,
  };

  user.push(addedUser);
  res.status(201).send(addedUser);
};
const updateUser = (req, res) => {
  const userId = req.query.id.forEach((elem, i) => {
    if (i == id) {
      elem.userName = req.body.userName;
      elem.passWord = req.body.passWord;
    }
  });
};

//dashboard
function dashBoard(req, res) {
  const dash = user.find(({ id }) => id === parseInt(req.query.id));
  if (dash) res.send(dash);
  else res.status(404).send("error!!data are not found");
}

function userInfo(req, res) {
  
 
  const info = user.find(({ id }) => id === parseInt(req.body.id));
  if (info) res.send(info);
  else res.status(404).send("error!! cannot found the user please try again");
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  userInfo,
  dashBoard,
};
