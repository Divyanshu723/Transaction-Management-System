const ProductTransaction = require('../models/ProductTransaction');
const { buildQuery } = require('../utils/queryBuilder');

// Helper function to count products within a price range
async function getProductCountInPriceRange(month, minPrice, maxPrice) {
    const query = buildQuery(month, '');
    query.price = { $gte: minPrice, $lt: maxPrice };

    return await ProductTransaction.countDocuments(query);
}

// Get price range data for a bar chart
exports.getPriceRangeData = async (req, res) => {
    const { month } = req.body;
    try {
        const priceRanges = await Promise.all([
            getProductCountInPriceRange(month, 0, 100),
            getProductCountInPriceRange(month, 101, 200),
            getProductCountInPriceRange(month, 201, 300),
            getProductCountInPriceRange(month, 301, 400),
            getProductCountInPriceRange(month, 401, 500),
            getProductCountInPriceRange(month, 501, 600),
            getProductCountInPriceRange(month, 601, 700),
            getProductCountInPriceRange(month, 701, 800),
            getProductCountInPriceRange(month, 801, 900),
            getProductCountInPriceRange(month, 901, Infinity)
        ]);

        const ranges = [
            "0 - 100", "101 - 200", "201 - 300", "301 - 400", "401 - 500",
            "501 - 600", "601 - 700", "701 - 800", "801 - 900", "901-above"
        ];

        const priceRangeData = ranges.map((range, index) => ({
            range,
            items: priceRanges[index]
        }));

        return res.status(200).json({
            success: true,
            message: "All Statistics fetched successfully",
            data: priceRangeData,
        })
    } catch (error) {
        console.error('Error fetching price ranges for bar chart:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

