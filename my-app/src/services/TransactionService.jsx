import httpRequest from "@/utils/httpRequest";
export const addTransaction = async(data)=>{
    try {
        const response=await httpRequest.post("/transaction",data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const getTransactionById = async(id)=>{
    try {
        const response=await httpRequest.get(`/transaction?transactionId=${id}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export const updateTransaction = async(id,data)=>{
    try {
        const response=await httpRequest.put(`transaction/${id}`,data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export const deleteTransaction = async(id)=>{
    try {
        const response=await httpRequest.delete(`/transaction?transactionId=${id}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}