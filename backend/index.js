require('dotenv').config()
console.log(" mongoose_url:", process.env.mongoose_url);

const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors');
const app = express();
const {userRouter}=require("./routes/user")
const mongoose = require('mongoose');

app.use(express.json());

app.use(cors());
app.use("/user",userRouter)

async function main(){
   await mongoose.connect(process.env.mongoose_url)
    app.listen(5000);
    console.log("listening on port 5000")
}
main();
