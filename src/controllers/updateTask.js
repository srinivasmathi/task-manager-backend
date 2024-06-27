
const Task = require('../models/tasks');

const update = async (req,res) => {
    try {
        const id = req.params.id;
        const content = req.body;
        const updatedTask = await Task.updateOne({"taskID": id},{"$set" : content});
        // console.log(updatedTask);
        if(updatedTask.modifiedCount > 0) {
            res.status(200).json({
                "message": "Task updated successfully",
                "success": true
            })
        } else {
            res.status(404).json({
                "message": "task not found to update",
                "success" : false
            })
        }

    } catch (error) {
        console.errror("Error updating the task");
        res.status(500).json({
            "message": "Server error",
            success: false
        })
    }
}

module.exports = {
    update
};