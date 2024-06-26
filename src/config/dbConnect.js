//connectDB function connects with the mongodb database specified in the connection string.

const mongoose = require('mongoose');

async function connectDB() {
    try {
        const uri = 'mongodb://127.0.0.1:27017/taskDB';
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000
        });
        console.log("connected to the mongodb database successfully");

    } catch (error) {
        console.error("Error Connecting to the database",error);
    }
}

module.exports = connectDB;