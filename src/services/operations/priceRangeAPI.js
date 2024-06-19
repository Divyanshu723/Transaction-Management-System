import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { priceRangeEndPoints } from "../apis"

const {
    GET_PRICE_RANGE_API
} = priceRangeEndPoints;

export const getPriceRange = async ({ month }) => {
    let result = null;
    try {
        const response = await apiConnector("POST", GET_PRICE_RANGE_API, { month })
        console.log("GET_PRICE_RANGE_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Find Statistics")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_PRICE_RANGE_API ERROR............", error)
        toast.error(error.message)
    }
    return result
}