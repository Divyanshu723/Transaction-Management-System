import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { transactionEndPoints } from "../apis"

const {
    GET_ALL_TRANSACTION_API
} = transactionEndPoints;

export const getAllTransactions =  async(data) =>{
    // const toastId = toast.loading("Loading...")
    let result = null;
    try{
        const response = await apiConnector("POST", GET_ALL_TRANSACTION_API, data)
        console.log("GET_ALL_TRANSACTION_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Find Transaction")
        }
        result = response?.data;   
    } catch (error) {
        console.log("GET_ALL_TRANSACTION_API ERROR............", error)
        toast.error(error.message)
    }
    // toast.dismiss(toastId)
    return result
}