// import the model 
const Todo = require("../models/Todo.js");


//define router handler

exports.updateTodo = async(req,res) =>{
    try{
        //fetch the id
        const {id} = req.params;
        const {title,descrioption} = req.body;

        const todo = await Todo.findByIdAndUpdate({_id:id},{title,descrioption,updatedAt:Date.now()});

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"successfully fetched and updated",
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            message:`No data is found at given ` 
        });
    }
}