    const monthNameToNumber = (monthName) => {
        const monthNames = {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };

        return monthNames[monthName] || null;
    };

    exports.buildQuery = (month, search) => {
        const query = {};

        // Extract month from the provided month string (e.g., "11" for November)
        if(month){
            const monthNumber = monthNameToNumber(month);
            if (!monthNumber) {
                throw new Error('Invalid month name');
            }

            // Construct the $expr condition to match the month of dateOfSale
            query.$expr = {
                $eq: [{ $month: '$dateOfSale' }, monthNumber]
            };
        }

        if (search) {
            // Add conditions for search terms on other fields
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { priceString: { $regex: search, $options: 'i' } } 
            ];
        }

        return query;
    };
