
const Task = require('../models/tasks');

const getById = async (req,res) => {
    try {

        const id = req.params.id;
        //console.log(id);
        const task = await Task.findOne({"taskID" : id });
        if(task) {
            res.status(200).json(task);
        }else {
            res.status(404).json({
                "message": "user not found",
                "success" : false
            })
        }

    } catch (error) {
        console.error("Error finding the task:", error);
        res.status(500).json({
            "message": "could not find the task",
            "error" : error,
            success: false
        })
    }
};

module.exports = {
    getById
};