import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { statisticsEndPoints } from "../apis"

const {
    GET_STATISTICS_API
} = statisticsEndPoints;

export const getStatistics = async ({month}) => {
    let result = null;
    try {
        const response = await apiConnector("POST", GET_STATISTICS_API, {month})
        console.log("GET_STATISTICS_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Find Statistics")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_STATISTICS_API ERROR............", error)
        toast.error(error.message)
    }
    return result
}