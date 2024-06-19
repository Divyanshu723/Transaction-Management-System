const axios = require('axios');
const ProductTransaction = require('../models/ProductTransaction');

exports.initializeDatabase = async (req, res) => {
    try {
        // Fetch data from the third-party API
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

        // Insert data into MongoDB using Mongoose
        await ProductTransaction.insertMany(response.data);

        res.json({
            success: true,
            message: 'Database initialized with seed data'
        });

    } catch (error) {
        console.error('Error initializing database:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}