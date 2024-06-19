const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const database = require('./config/dbConnect');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
database.connectDB();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

    // Routes
    app.use(express.json()); // Parse JSON bodies
    app.use('/api', apiRoutes);
    
    
    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Server error' });
    });

    // Default route
    app.get("/", (req, res) => {
        return res.json({
            success: true,
            message: 'Your server is up and running....'
        });
    });

    app.listen(PORT, () => {
        console.log(`App is running at ${PORT}`)
    })

