const BASE_URL = process.env.REACT_APP_BASE_URL

export const transactionEndPoints = {
    GET_ALL_TRANSACTION_API: BASE_URL + "/transactions",
}

export const statisticsEndPoints = {
    GET_STATISTICS_API: BASE_URL + "/statistics",
}

export const categoryItemEndPoints = {
    GET_CATEGORY_ITEM_COUNT_API: BASE_URL + "/pie-chart",
}

export const priceRangeEndPoints = {
    GET_PRICE_RANGE_API: BASE_URL + "/bar-chart",
}

export const combinedEndPoints = {
    GET_COMBINED_DATA_API: BASE_URL + "/combined-data",
}
