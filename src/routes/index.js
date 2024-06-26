const express = require("express");
const router = express.Router();

const getAllTasks = require("../controllers/getAllTasks");
const findTaskByID = require("../controllers/findTaskByID");
const createTask = require("../controllers/createTask");
const deleteTask = require("../controllers/deleteTask");
const updateTask = require("../controllers/updateTask");

router.get('/',(req,res) => {
    res.status(200).json({
        "message": "hello world, task manager backend",
        "success": true
    });
});

router.get("/api/",(req,res) => {
    res.status(200).json({
        "message": "REST API",
        "success": true
    })
});

router.post("/api/create/",createTask.create);

router.get("/api/getall/",getAllTasks.getAll);

module.exports = router;
