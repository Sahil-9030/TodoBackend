// import the model 
const Todo = require("../models/Todo.js");


//define router handler

exports.deleteTodo = async(req,res) =>{
    try{
        //fetch the id
        const {id} = req.params;
        
        await Todo.findByIdAndDelete({_id:id});

        res.status(200)
        .json({
            success:true,
            message:"Deleted Successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            message:`there is no data to be deleted ` 
        });
    }
}