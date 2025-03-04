import TransactionForm from "@/components/TransactionForm";
import { getTransactionById } from "@/services/TransactionService";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function UpdateTransaction() {
    const {id}=useParams();
    const [transaction,setTransaction]=useState(null);
    useEffect(() => {
        const fetchTransaction = async () => {
          try {
            const response = await getTransactionById(id)
            setTransaction(response);
          } catch (error) {
            console.error("Lỗi khi lấy dữ liệu giao dịch:", error);
          }
        };
    
        fetchTransaction();
      }, [id]);
      console.log(transaction);
    return ( 
        <div>
            <TransactionForm initialTransaction={transaction}/>
        </div>
     );
}

export default UpdateTransaction;