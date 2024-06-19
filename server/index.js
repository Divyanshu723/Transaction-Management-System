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
        origin: "https://transaction-management-system.vercel.app/",
        credentials: true,
    })
)
    // Routes
    app.use(express.json()); // Parse JSON bodies
    app.use('/api', apiRoutes);

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://transaction-management-system.vercel.app/"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    res.setHeader("Access-Control-Max-Age", 7200);

    next();
});
    
    
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

