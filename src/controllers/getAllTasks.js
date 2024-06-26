
const Task = require('../models/tasks');

const getAll = async (req,res) => {
    try {

        const tasks = await Task.find();
        res.status(200).json(tasks);

    } catch (error) {
        console.error("Error Fetching the task:", error);
        res.status(500).json({
            "message": "server error",
            "error": error,
            success: false
        });
    }
}

module.exports = {
    getAll
};