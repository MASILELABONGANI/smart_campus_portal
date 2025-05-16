import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import adminRoutes from './Routes/adminRoutes.js';
import signupRoute from './Routes/signupRoute.js';

app.use('/signup', signupRoute);
//import signupRoute from './Routes/signupRoute.js';





//import {adminRoutes } from ".Routes/adminRoutes.js";

//index.js
let app = express()
app.use(cors({

 origin: ["http://localhost:3001", "http://localhost:3000"],
 optionsSuccessStatus: 200, 
  methods: ['GET', 'POST', 'PUT'],
credentials: true

}))
app.use(express.json())

app.use('/admin', adminRoutes
    
);

app.listen(3000, () => {
  console.log("Server is running");
});

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',   // or '127.0.0.1'
    port: 3306,          // optional because 3306 is the default
    user: 'root',
    password: 'Matjhila@4..',    // your MySQL password
    database: 'smart_campus_portal'  // <- Replace with your database name
});

// Connect to MySQL
db.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log('Successfully connected to MySQL as ID ' + db.threadId);
});

// Your express setup here


// Add routes and logic if necessary

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

 export default app; // Export the app for testing or other purposes