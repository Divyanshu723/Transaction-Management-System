import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { categoryItemEndPoints } from "../apis"

const {
    GET_CATEGORY_ITEM_COUNT_API
} = categoryItemEndPoints;

export const getCategoryItem = async ({ month }) => {
    const toastId = toast.loading("Loading...")
    let result = null;
    try {
        const response = await apiConnector("GET", GET_CATEGORY_ITEM_COUNT_API, { month })
        console.log("GET_CATEGORY_ITEM_COUNT_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Find Statistics")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_CATEGORY_ITEM_COUNT_API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}