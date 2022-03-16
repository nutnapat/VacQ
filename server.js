const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

//Route files
const hospitals = require('./routes/hospitals');
const appointments = require('./routes/appointments');
const auth = require('./routes/auth');
const app=express();
//Body Parser
app.use(express.json());
//Cookie Parser
app.use(cookieParser());
app.use('/api/v1/hospitals',hospitals);
app.use('/api/v1/appointments',appointments);
app.use('/api/v1/auth',auth)

const PORT=process.env.PORT || 5000;
const server = app.listen(PORT,console.log('Server runnig in ',process.env.NODE_ENV,' mode on port ',PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`)
    //close server & exit process
    server.close(()=>process.exit(1));
})