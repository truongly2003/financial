import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import ICONS from "@/components/Icons";
import { deleteTransaction } from "@/services/TransactionService";
// import { object } from "prop-types";
const balanceCards = [
  { amount: "96,800,000", label: "Số dư", color: "bg-red-400" },
  { amount: "68,000,000", label: "Chi tiêu", color: "bg-blue-400" },
  { amount: "64,000,000", label: "Thu nhập", color: "bg-green-400" },
  { amount: "13,500,000", label: "Tiết kiệm", color: "bg-purple-400" },
];
function Home() {
  const [transaction, setTransactions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("tuần");
  const [isModalDetailTransaction, setIsModalDetailTransaction] =
    useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const navigate = useNavigate();
  const handleEditTransaction = (id) => {
    navigate(`/transaction/${id}`);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/transaction/1"
        );
        setTransactions(response.data.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const groupedTransactions = transaction.reduce((acc, item) => {
    const dateKey = item.transactionDate;
    if (!acc[dateKey]) {
      acc[dateKey] = { transactions: [], totalExpense: 0, totalIncome: 0 };
    }
    acc[dateKey].transactions.push(item);
    if (item.transactionType === "expense") {
      acc[dateKey].totalExpense += item.amount;
    } else if (item.transactionType === "income") {
      acc[dateKey].totalIncome += item.amount;
    }

    return acc;
  }, {});
  const handleDetailTransaction = (item) => {
    setSelectedTransaction(item);
    setIsModalDetailTransaction(true);
  };
  const handleCloseModalDetailTransaction = () => {
    setIsModalDetailTransaction(false);
    setSelectedTransaction(null);
  };
  const handleDeleteTransaction=async (id)=>{
    try {
      const response=await deleteTransaction(id)
      alert(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="rounded-lg">
        {/* header */}
        <div className="bg-white text-white flex    mx-4   shadow-md">
          <div className="flex  gap-3 p-4">
            {balanceCards.map((card, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md text-white ${card.color}`}
              >
                <p className="text-sm">{card.label}</p>
                <p className="text-xl font-bold">{card.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* filter */}
      <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
        <div className="flex justify-between items-center border-b pb-2">
          {["ngày", "tuần", "tháng", "năm", "khoảng thời gian"].map(
            (filter) => (
              <button
                key={filter}
                className={`text-sm font-medium ${
                  activeFilter === filter
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                } px-2`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            )
          )}
        </div>
        <div className="flex items-center justify-center mt-2 text-gray-700">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <p className="text-center mx-4">17 thg 2 - 23 thg 2</p>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Danh sách giao dịch */}
      <div className="mx-4 mt-4">
        {Object.entries(groupedTransactions).map(([date, data], index) => (
          <div key={index} className="mb-4">
            {/* Hiển thị ngày, tổng chi tiêu và tổng thu nhập */}
            <div className="flex justify-between items-center bg-yellow-100 p-2 rounded-lg">
              <p className="text-gray-600 font-semibold">{date}</p>
              <div className="text-sm text-gray-500 flex gap-4">
                <span>Chi tiêu: - {data.totalExpense.toLocaleString()} đ</span>
                <span>Thu nhập: + {data.totalIncome.toLocaleString()} đ</span>
              </div>
            </div>

            {data.transactions.map((item, idx) => {
              const iconData = ICONS[item.icon] || {
                icon: "?",
                color: "bg-gray-400",
              };
              return (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mt-2 mb-2 cursor-pointer"
                  onClick={() => handleDetailTransaction(item)}
                >
                  <div className="flex items-center gap-2 ">
                    <div
                      className={`w-10 h-10 flex items-center justify-center ${iconData.color} text-white rounded-full`}
                    >
                      {iconData.icon}
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        {item.categoryName}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-bold ${
                      item.transactionType === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {`${
                      item.transactionType === "income" ? "+" : "-"
                    }${item.amount.toLocaleString()} đ`}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* add transaction */}
      <Link
        className="fixed bottom-16 right-16 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500"
        to="/transaction"
      >
        <Plus size={24} />
      </Link>

      {/* modal detail transaction */}
      {isModalDetailTransaction && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModalDetailTransaction}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-yellow-400 p-4 rounded-lg flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-2">
                {ICONS[selectedTransaction.icon]?.icon || "?"}
              </div>
              <h2 className="text-lg font-bold text-gray-800">
                {selectedTransaction.categoryName}
              </h2>
            </div>

            {/* Nội dung giao dịch */}
            <div className="p-4 text-gray-700">
              <p className="flex justify-between">
                <span className="text-gray-500">Danh mục</span>
                <span>
                  {selectedTransaction.categoryType === "income"
                    ? "Thu nhập"
                    : "Chi tiêu"}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">Số tiền</span>
                <span
                  className={`font-bold ${
                    selectedTransaction.transactionType === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {selectedTransaction.transactionType === "income" ? "+" : "-"}
                  {selectedTransaction.amount.toLocaleString()} đ
                </span>
              </p>

              <p className="flex justify-between">
                <span className="text-gray-500">Ngày</span>{" "}
                <span>{selectedTransaction.transactionDate}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">Ghi chú</span>{" "}
                <span>{selectedTransaction.description || "Không có"}</span>
              </p>
            </div>

            {/* Nút Sửa - Xóa */}
            <div className="flex justify-around border-t pt-2 mt-2">
              <button className="text-blue-500 hover:text-blue-700"  onClick={() => handleEditTransaction(selectedTransaction.id)}>Sửa</button>
              <button className="text-red-500 hover:text-red-700" onClick={()=>handleDeleteTransaction(selectedTransaction.id)}>Xóa</button>
            </div>

            {/* Nút Đóng */}
            <button
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModalDetailTransaction}
            >
              <CircleX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
