const mongoose = require("mongoose");

// this step will copy alll the things that is in .env file to the object named process AND now all the things are present in process
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        useUnifiedTopology:true

    })
    .then(()=>{console.log("Db ka connection is successful")})
    .catch((error)=>{
        console.log("error occured");
        console.error(error.message);

        process.exit(1);
    });
}
module.exports = dbConnect;