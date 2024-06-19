const ProductTransaction = require('../models/ProductTransaction');
const { buildQuery } = require('../utils/queryBuilder');

// Get all transactions with search and pagination
async function getAllTransactions(req, res) {
    const { month, search = '', page = 1, perPage = 10 } = req.body;
    try {

        const query = buildQuery(month, search);

        // Count total number of entries that match the query
        const totalCount = await ProductTransaction.countDocuments(query);

        const aggregationPipeline = [
            {
                $addFields: {
                    priceString: {
                        $toString: "$price"
                    }
                }
            },
            {
                $match: query
            },
            {
                $sort: {
                    id: 1 // Sort by id in ascending order
                }
            },
            {
                $skip: (page - 1) * perPage
            },
            {
                $limit: perPage
            }
        ];

        const transactions = await ProductTransaction.aggregate(aggregationPipeline).exec();

        return res.status(200).json({
            success: true,
            message: "All transactions fetched successfully",
            data: transactions,
            totalCount: totalCount,
        });
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getAllTransactions
};
