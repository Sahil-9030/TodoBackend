// import the model 
const Todo = require("../models/Todo.js");


//define router handler

exports.createTodo = async(req,res) =>{
    try{
        // extract description and title from request body
        const {title,description} = req.body;
        // create a new todo object and insert in DB
        const response = await Todo.create({title,description});
        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                messege:"Entry created successfully"
            }
        
        ) ;
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:error.message,
            }
        )
    }
}