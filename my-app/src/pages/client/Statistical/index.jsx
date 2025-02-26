
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Statistical() {
  const [activeTab, setActiveTab] = useState("expense");
  
  const [selectedMonth, setSelectedMonth] = useState("12/2024");

  const transactions = {
    expense: [
      { id: 1, category: "Sắc đẹp", amount: 50000, percentage: 90.77, color: "#FFD700", icon: "💄" },
      { id: 2, category: "Đồ ăn", amount: 5082, percentage: 9.22, color: "#87CEFA", icon: "🍔" },
    ],
    income: [
      { id: 1, category: "Lương", amount: 5000000, percentage: 85, color: "#32CD32", icon: "💰" },
      { id: 2, category: "Tiền thưởng", amount: 200000, percentage: 15, color: "#1E90FF", icon: "🎉" },
    ],
  };

  const pieData = transactions[activeTab].map((t) => ({
    name: t.category,
    value: t.amount,
    color: t.color,
  }));

  return (
    <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
      {/* Tabs Chi tiêu / Thu nhập */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-center ${activeTab === "expense" ? "border-b-2 border-blue-500 text-blue-500 font-bold" : "text-gray-500"}`}
          onClick={() => setActiveTab("expense")}
        >
          Chi tiêu
        </button>
        <button
          className={`flex-1 py-2 text-center ${activeTab === "income" ? "border-b-2 border-green-500 text-green-500 font-bold" : "text-gray-500"}`}
          onClick={() => setActiveTab("income")}
        >
          Thu nhập
        </button>
      </div>
      {/* lọc */}
      <div className="flex justify-between items-center mt-4">
        <select
          className="border p-2 rounded"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          { 
             ["12/2024", "11/2024", "10/2024"].map((m) => <option key={m} value={m}>{m}</option>)
            
          }
        </select>
      </div>

      {/* Biểu đồ tròn */}
      <div className="flex justify-center mt-4">
        <PieChart width={200} height={200}>
          <Pie data={pieData} dataKey="value" outerRadius={60} fill="#8884d8">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Danh sách chi tiết */}
      <div className="mt-4">
        {transactions[activeTab].map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-lg mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{transaction.icon}</span>
              <p>{transaction.category}</p>
            </div>
            <p>{transaction.percentage}%</p>
            <p className="font-bold">{transaction.amount.toLocaleString()} đ</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistical;
