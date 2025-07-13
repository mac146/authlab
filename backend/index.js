require('dotenv').config()
console.log(" mongoose_url:", process.env.mongoose_url);

const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('jsonwebtoken')

const {userRouter}=require("./routes/user")
const mongoose = require('mongoose');
const app = express()



app.use(express.json());

app.use("/user",userRouter)

async function main(){
   await mongoose.connect(process.env.mongoose_url)
    app.listen(3000);
    console.log("listening on port 3000")
}
main();
