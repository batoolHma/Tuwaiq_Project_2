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
// const user =[
//     {
//         id:1,
//         nationalId:"101012121",
//         passWord:"1100",
//         adminId:"OHOOD HAMAD AHAMAD",
//         drivingLicenses:{
//             issueDate:'kkkkk',
//             expiryDate:'',
//             issuePlace:'',
//             count: 1,
//             img:"",
//         },
//         vehicles:1,
//         trafficViolations:15,
//         passport:{
//             number:'',
//             issueDate:'',
//             issuePlace:'',
//             expiryDate:'',
//             count:0
//         },
//         vehicleInsurances:5,


//     },
//     {
//         id:2,
//         nationalId:"147893256",
//         passWord:"1414",
//         adminId:"NADA HAMAD AHAMAD",
//         drivingLicenses:{
//             issueDate:'',
//             expiryDate:'',
//             issuePlace:'',
//             count: 1,
//             img:"",
//         },
//         vehicles:1,
//         trafficViolations:15,
//         passPort:{
//             number:'',
//             issueDate:'',
//             issuePlace:'',
//             expiryDate:'',
//             count:1
//         },
//         vehicleInsurances:8,


//     }, {
//         id:3,
//         nationalId:"1236974581",
//         passWord:"7878",
//         adminId:"AHAMAD SALIM AHAMAD",
//         drivingLicenses:{
//             issueDate:'',
//             expiryDate:'',
//             issuePlace:'',
//             count: 1,
//             img:"",
//         },
//         vehicles:1,
//         trafficViolations:15,
//         passPort:{
//             number:'',
//             issueDate:'',
//             issuePlace:'',
//             expiryDate:'',
//             count:2
//         },
//         vehicleInsurances:4,


//     }, 

// ]
// module.exports = {user}