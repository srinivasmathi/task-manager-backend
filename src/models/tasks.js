const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskID : {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum : ['pending','in-progress','completed'],
        required: true
    },
    priority: {
        type: String,
        enum : ['low','medium','high'],
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('tasks',taskSchema);

module.exports = Task;