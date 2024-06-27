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

//route to create a new task
router.post("/api/create/",createTask.create);

//route to get all the task
router.get("/api/getall/",getAllTasks.getAll);

//route to get the task by its ID
router.get("/api/getbyid/:id",findTaskByID.getById);

//route to update a task
router.patch("/api/update/:id",updateTask.update);

//route to delete a task 
router.delete("/api/delete/:id",deleteTask.deleteTask);

module.exports = router;
