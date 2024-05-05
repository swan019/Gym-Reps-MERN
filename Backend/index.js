const express = require('express');
const app = express();
require('dotenv').config()
const workoutRouts = require('./Routes/workouts.js');
const mongoose = require('mongoose');
const cors = require("cors")
app.use(cors({
    origin:"*"
}));


app.use(express.json());
app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
})

app.use('/api/workouts' , workoutRouts);


//connect with DB
mongoose.connect(process.env.DB_URL)
.then(() => {
    //server listen
    app.listen(process.env.PORT, () => {
        console.log(`connect with DB & Server listen ${process.env.PORT}`);
    })

})
.catch((error) => {
    console.log(error);
})


app.get('/', (req, res) => {
    res.json({mrssg:
        "Hello"
    })
})

