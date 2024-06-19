import React from 'react';

const StatisticsSection = ({ statistics, month }) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span className="font-medium">Total Sales:</span>
                <span className="font-medium">{statistics.totalSaleAmount}</span>
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Total Sold Items:</span>
                <span className="font-medium">{statistics.totalSoldItems}</span>
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Total Not Sold Items:</span>
                <span className="font-medium">{statistics.totalNotSoldItems}</span>
            </div>
        </div>
    );
};

export default StatisticsSection;
