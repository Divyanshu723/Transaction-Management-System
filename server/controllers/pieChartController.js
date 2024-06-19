const ProductTransaction = require('../models/ProductTransaction');
const { buildQuery } = require('../utils/queryBuilder');

// Get category item counts for a pie chart
exports.getCategoryItemCount = async (req, res) => {
    const { month, search='' } = req.body;
    try {
        const query = buildQuery(month, search);
        const categoryCounts = await ProductTransaction.aggregate([
            { $match: query },
            { $group: { _id: "$category", count: { $sum: 1 } } }
        ]);

        const formattedCounts = categoryCounts.map(item => ({
            category: item._id,
            items: item.count
        }));

        res.json({
            success: true,
            data: {formattedCounts}
        });

    } catch (error) {
        console.error('Error fetching category counts for pie chart:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}
