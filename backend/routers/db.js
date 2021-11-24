const express =require('express')
//////////1
const user = [
    {     id:1,
        userName:'Lama',
        passWord:'12345',
        NationalId:'1234567899',
        
        
    },
    {    id:2,
        userName:'Noor',
        passWord:'150501',
        NationalId:'1234567899'
    },
   
    {    id:3,
        userName:'Sara',
        passWord:'987654321',
        NationalId:'1234567899'
    }
 
   
]
//////////2
const dashbord=[
    {
        

    },
    {
        drivingLicense: 'https://myiqamastatus.com/wp-content/uploads/2021/08/KSA-Driving.png',
        cars: 'ford' ,
        insuranceDocuments: '',
        trafficViolations:'',
        passport: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Saudi_Passport.jpg/190px-Saudi_Passport.jpg',
        appointment:'',
        nationalAddress:' King Abdulaziz Rd, Alamal Dist.JEDDAH 12643-2121 SAUDI ARABIA ',
        myAgencies:'',
        qiasResults:''

    }, {
        drivingLicense: 'https://myiqamastatus.com/wp-content/uploads/2021/08/KSA-Driving.png',
        cars: 'Bentle' ,
        insuranceDocuments: '',
        trafficViolations:'',
        passport: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Saudi_Passport.jpg/190px-Saudi_Passport.jpg',
        appointment:'',
        nationalAddress:' King Abdulaziz Rd, Alamal Dist.NAJRAN 12643-2121 SAUDI ARABIA ',
        myAgencies:'',
        qiasResults:''

    }
    
]

module.exports = {user,dashbord}