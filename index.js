const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/dbConnect');
const router = require('./src/routes/index');


//startServer function is used to start the server with specific configurations
async function startServer() {

    const app = express();

    app.use(express.urlencoded({extended: true}));

    //allowing cross orgin request from localhost:3000(frontend)
    app.use(cors({
        orgin: "http://localhost:3000",
    }));

    //establishing a mongodb database connection with the server.
    await connectDB();

    //server listens to the port 8000
    app.listen(8000, () => {
        console.log("server started on port 8000");
    });

    app.use('/',router);
}

startServer();