const express = require('express');
const cors = require('cors');

const { userRouter } = require('./routers/routes/userRouter');

const app = express();

//routers

//built-in middlewares
app.use(express.json());

app.use('/user',userRouter)// work is here
//third-party middleware
//app.use(cors());

//app routers



const PORT = process.env.PORT || 6600;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
