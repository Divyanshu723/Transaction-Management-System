const ProductTransaction = require('../models/ProductTransaction');
const { buildQuery } = require('../utils/queryBuilder');

// Get statistics for total sale amount, sold items, and not sold items
exports.getStatistics = async (req, res) => {
    const { month, search=''} = req.body;
    try {
        const query = buildQuery(month, search);
        const totalSaleAmount = await ProductTransaction.aggregate([
            { $match: query },
            { $group: { _id: null, total: { $sum: "$price" } } }
        ]);

        const totalSoldItems = await ProductTransaction.countDocuments({ ...query, sold: true });

        const totalNotSoldItems = await ProductTransaction.countDocuments({ ...query, sold: false });

        res.json({
            success: true,
            data: {
                totalSaleAmount: totalSaleAmount.length > 0 ? totalSaleAmount[0].total : 0,
                totalSoldItems,
                totalNotSoldItems
            }
        });
    } catch (error) {
        console.error('Error fetching statistics:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}

