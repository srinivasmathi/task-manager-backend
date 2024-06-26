
const Task = require('../models/tasks');

const deleteTask = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await Task.deleteOne({"taskID" : id});
        if(result.deletedCount > 0) {
            res.status(200).json({
                "message": "deleted the collection successfully",
                "success": true
            });
        } else {
            res.status(404).json({
                "message" : "user not found",
                "success" : false
            })
        }
    } catch (error) {
        console.error("Error deleting task: ",error);
        res.status(500).json({
            "message": "Server Error",
            "error": error,
            "success": false
        })
    }
}

module.exports = {
    deleteTask
};