
const Task = require("../models/tasks");

const create = async (req,res) => {
    try {

        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);


    } catch (error) {
        console.error("error creating task: ",error);
        res.status(500).json({
            "message": "error creating the task",
            "err": error,
            "success": false
        });
    }
}

module.exports = {
    create
};