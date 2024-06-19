const { getStatistics } = require('./statisticsController');
const { getPriceRangeData } = require('./chartController');
const { getCategoryItemCount } = require('./pieChartController');

exports.getCombinedData = async (req, res) => {
    const { month, search = '', page = 1, perPage = 10 } = req.body;

    try {
        const [categoryCount, statistics, priceRanges] = await Promise.all([
            fetchData(getCategoryItemCount, { month }),
            fetchData(getStatistics, { month }),
            fetchData(getPriceRangeData, { month })
        ]);

        const combinedResponse = {
            categoryCount,
            statistics,
            priceRanges
        };

        res.json(combinedResponse);
    } catch (error) {
        console.error('Error fetching combined data:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Generic helper function to fetch data from other APIs
async function fetchData(apiFunction, params) {
    return new Promise((resolve, reject) => {
        const mockReq = { body: params };
        const mockRes = {
            json: resolve,
            status: (statusCode) => ({
                json: (error) => reject(new Error(`${statusCode}: ${error.error}`))
            })
        };
        apiFunction(mockReq, mockRes);
    });
}
