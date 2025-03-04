import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import CategorySelector from "@/components/CategorySelector";
import {
  addTransaction,
  updateTransaction,
} from "@/services/TransactionService";

function TransactionForm({ initialTransaction }) {
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
  useEffect(() => {
    if (initialTransaction) {
      setTransactions(initialTransaction);
    }
  }, [initialTransaction]);
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

  const handleSubmit = async () => {
    try {
      let response;
      if (transaction.id) {
        response = await updateTransaction(transaction.id, transaction);
      } else {
        response = await addTransaction(transaction);
      }
      alert(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
        <CategorySelector
          onSelectCategory={handleSelectCategory}
          selectedCategoryId={Number(transaction.categoryId)}
        />
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
            onClick={handleSubmit}
          >
            {transaction.id ? "Cập nhật giao dịch" : "Thêm giao dịch"}
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
TransactionForm.propTypes = {
  initialTransaction: PropTypes.object,
};
export default TransactionForm;
