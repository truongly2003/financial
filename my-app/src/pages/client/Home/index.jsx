import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
// import { object } from "prop-types";
const balanceCards = [
  { amount: "96,800,000", label: "Số dư", color: "bg-red-400" },
  { amount: "68,000,000", label: "Chi tiêu", color: "bg-blue-400" },
  { amount: "64,000,000", label: "Thu nhập", color: "bg-green-400" },
  { amount: "32,000,000", label: "Tổng số tiền lãi", color: "bg-yellow-400" },
  { amount: "24,000,000", label: "Tổng số tiền thu nợ", color: "bg-pink-400" },
  {
    amount: "13,500,000",
    label: "Tổng số tiền tiết kiệm",
    color: "bg-purple-400",
  },
];
function Home() {
  const [activeFilter, setActiveFilter] = useState("tuần"); // Bộ lọc mặc định

  const transactions = {
    expense: [
      {
        id: 1,
        category: "Sức khỏe",
        amount: 100000,
        icon: "❤️",
        color: "bg-red-500",
      },
      {
        id: 2,
        category: "Ăn uống",
        amount: 50000,
        icon: "🍽️",
        color: "bg-orange-500",
      },
    ],
    income: [
      {
        id: 1,
        category: "Lương",
        amount: 5000000,
        icon: "💰",
        color: "bg-green-500",
      },
      {
        id: 2,
        category: "Tiền thưởng",
        amount: 200000,
        icon: "🎉",
        color: "bg-blue-500",
      },
    ],
  };
 
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
        {/* Duyệt qua cả expense và income */}
        {Object.entries(transactions).map(([type, list]) => (
          <div key={type}>
            {list.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 flex items-center justify-center ${transaction.color} text-white rounded-full`}
                  >
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">
                      {transaction.category}
                    </p>
                    <p className="text-xs text-gray-500">100%</p>
                  </div>
                </div>
                <p
                  className={`font-bold ${
                    type === "income" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount.toLocaleString()} đ
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Nút Thêm giao dịch */}
      <Link
        className="fixed bottom-16 right-16 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500"
        to="/transaction"
      >
        <Plus size={24} />
      </Link>
    </div>
  );
}

export default Home;
