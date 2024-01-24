// import the model 
const Todo = require("../models/Todo.js");

//define router handler

exports.getTodo = async(req,res) =>{
    try{
        //fetch all the todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        //response update
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}

exports.getTodoById = async(req,res) =>{
    try{
        //fetch the id 
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        //if data is not found for given id
        if(!todo){
            return res.status(404)
            .json({
                message:"No data found for the given Id",
                success: false,
            })
        }
        //  if data FOUND
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        //response update
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}