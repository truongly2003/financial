import { useState } from "react";
import CategorySelector from "@/components/CategorySelector";
import { addTransaction } from "@/services/TransactionService";

function Transaction() {
  const [transaction, setTransactions] = useState({
    userId: 1,
    amount: "",
    description: "",
    transactionDate: "2025-03-01",
    categoryId: "",
    walletId: 1,
    paymentMethod: "",
    transactionStatus: "complete",
  });
  const handleChangeTransaction = (e) => {
    setTransactions({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectCategory = (category) => {
    setTransactions({
      ...transaction,
      categoryId: category.id,
    });
  };

  const handleAddTransaction = async () => {
    try {
      const data = await addTransaction(transaction);
      if (data.data) {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
        <CategorySelector onSelectCategory={handleSelectCategory} />
      </div>
      {/* Nhập số tiền */}
      <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
        <div className="text-center">
          <input
            type="number"
            className="w-full mt-2 p-2 border rounded-lg text-center"
            placeholder="Nhập số tiền"
            name="amount"
            value={transaction.amount}
            onChange={handleChangeTransaction}
          />
          {/* Ô nhập ghi chú */}
          <textarea
            className="w-full mt-2 p-2 border rounded-lg text-center"
            placeholder="Nhập ghi chú (không bắt buộc)"
            name="description"
            value={transaction.description}
            onChange={handleChangeTransaction}
          ></textarea>

          <button
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold"
            onClick={handleAddTransaction}
          >
            Thêm giao dịch
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Transaction;
