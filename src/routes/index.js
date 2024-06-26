const express = require("express");
const router = express.Router();

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

module.exports = router;
