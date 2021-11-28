const express =require('express')

const user = [
    {     id:1,
        userName:'Lama',
        passWord:'12345',
        NationalId:'1234567899',
         //dashboard page after login
        drivingLicense: {
            issueDate:'',
            expiryDate:'',
            issuePlace:'',
            number:'',
            img:"",
        },
        
        vehicals:{
           number:"",
           trafficViolations:"",
         },
         passport:{
             number:'',
             issueDate:"",
             issuePlace:"",
             expiryDate:""
         },
         nationalAddress:{
          number:'',
          img:""
         }
        }
        ,
    {    id:2,
        userName:'Noor',
        passWord:'150501',
        NationalId:'1234567899',
       //dashboard page
        drivingLicense: {
            issueDate:'',
            expiryDate:'',
            issuePlace:'',
            number:'',
            img:"",
        },
        
        vehicals:{
           number:"",
           trafficViolations:"",
         },
         passport:{
             number:'',
             issueDate:"",
             issuePlace:"",
             expiryDate:""
         },
         nationalAddress:{
          number:'',
          img:""
         }

    },
   
    {    id:3,
        userName:'Sara',
        passWord:'987654321',
        NationalId:'1234567899',
      
         //dashboard page
        drivingLicense: {
            issueDate:'',
            expiryDate:'',
            issuePlace:'',
            number:'',
            img:"",
        },
        
        vehicals:{
           number:"",
           trafficViolations:"",
         },
         passport:{
             number:'',
             issueDate:"",
             issuePlace:"",
             expiryDate:""
         },
         nationalAddress:{
          number:'',
          img:""
         }

    }
 
   
]


module.exports = {user}
