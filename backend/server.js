const express = require('express');
const cors = require('cors');

const { userRouter } = require('./routers/routes/userRouter');

const app = express();

//routers

//built-in middlewares
app.use(express.json());


//third-party middleware
app.use(cors());

//app routers
app.use('/user',userRouter)// work is here


const PORT = process.env.PORT ||5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
// console.log(global);