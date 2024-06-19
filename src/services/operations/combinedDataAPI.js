import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { combinedEndPoints } from "../apis"

const {
    GET_COMBINED_DATA_API
} = combinedEndPoints;

export const getCombinedData = async ({ month }) => {
    const toastId = toast.loading("Loading...")
    let result = null;
    try {
        const response = await apiConnector("GET", GET_COMBINED_DATA_API, { month })
        console.log("GET_COMBINED_DATA_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Find Category Item")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_COMBINED_DATA_API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}