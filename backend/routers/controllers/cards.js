const {dashboardCards}=require('../db')


const getAll=(req,res)=>{
    res.send(dashboardCards)
}
res.status(404).send('no cards here')
module.exports={dashboardCards}