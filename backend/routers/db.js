const express =require('express')

const user = [
    {
        userName:'Lama',
        passWord:'12345',
        
    },
    {
        userName:'Noor',
        passWord:'150501',
        
    },
   
    {
        userName:'Sara',
        passWord:'987654321',
        
    }
 
   
]
const dashbord=[
    {
        drivingLicense: 'https://myiqamastatus.com/wp-content/uploads/2021/08/KSA-Driving.png',
        cars: 'BMW' ,
        insuranceDocuments: '',
        trafficViolations:'Exceding the speed by 20km/s',
        passport: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Saudi_Passport.jpg/190px-Saudi_Passport.jpg',
        appointment:'',
        nationalAddress:'King Abdulaziz Rd, Alamal Dist.RIYADH 12643-2121 SAUDI ARABIA ',
        myAgencies:'',
        qiasResults:''

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
    , {
        drivingLicense: 'https://myiqamastatus.com/wp-content/uploads/2021/08/KSA-Driving.png',
        cars: 'tesla' ,
        insuranceDocuments: '',
        trafficViolations:'using phone while driving',
        passport: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Saudi_Passport.jpg/190px-Saudi_Passport.jpg',
        appointment:'',
        nationalAddress:' King Abdulaziz Rd, Alamal Dist.RIYADH 12643-2121 SAUDI ARABIA ',
        myAgencies:'',
        qiasResults:''

    }
]

module.exports = {user,dashbord}