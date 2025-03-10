import { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { PlusCircle, RotateCcw } from "lucide-react";
import ICONS from "@/components/Icons";
import {
  getAllTransactionByUserIdAndPeriod,
  getAllTransactionsByUserIdAndFilterRange,
} from "@/services/TransactionService";
import { Input } from "@/components/ui/input";
import TransactionForm from "@/components/TransactionForm";

function Transaction() {
  const [transaction, setTransactions] = useState([]);
  const [showFormTransaction, setShowFormTransaction] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [filter, setFilter] = useState("day");
  const [searchItem, setSearchItem] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const userId = 1;
  const fetchTransactions = useCallback(async () => {
    try {
      let response;
      if (startDate && endDate) {
        response = await getAllTransactionsByUserIdAndFilterRange(
          userId,
          startDate,
          endDate
        );
      } else {
        response = await getAllTransactionByUserIdAndPeriod(userId, filter);
      }
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [filter, startDate, endDate]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  const listCategories = transaction.map((item) => item.categoryName);

  const groupedTransactions = transaction.reduce((acc, item) => {
    let dateKey;
    if (filter === "day") {
      dateKey = new Date(item.transactionDate).toLocaleDateString("vi-VN");
    } else if (filter === "week") {
      const date = new Date(item.transactionDate);
      const weekNumber = Math.ceil(date.getDate() / 7);
      dateKey = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-Tuần ${weekNumber}`;
    } else if (filter === "month") {
      const date = new Date(item.transactionDate);
      dateKey = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
    } else if (filter === "year") {
      dateKey = new Date(item.transactionDate).getFullYear().toString();
    }

    if (!acc[dateKey]) {
      acc[dateKey] = { transactions: [], totalExpense: 0, totalIncome: 0 };
    }

    acc[dateKey].transactions.push(item);

    if (item.categoryType === "expense") {
      acc[dateKey].totalExpense += item.amount;
    } else if (item.categoryType === "income") {
      acc[dateKey].totalIncome += item.amount;
    }

    return acc;
  }, {});

  const searchTransactions = Object.entries(groupedTransactions).reduce(
    (acc, [date, data]) => {
      const searchData = data.transactions.filter(
        (item) =>
          item.categoryName.includes(searchItem) ||
          item.categoryType.includes(searchItem) ||
          item.categoryName.toLowerCase().includes(searchItem.toLowerCase()) ||
          (searchItem.toLowerCase() === "thu nhập" &&
            item.categoryType === "income") ||
          (searchItem.toLowerCase() === "chi phí" &&
            item.categoryType === "expense")
      );
      if (searchData.length > 0) {
        acc[date] = { ...data, transactions: searchData };
      }
      return acc;
    },
    {}
  );

  const transactionsToRender =
    searchItem.trim() !== "" ? searchTransactions : groupedTransactions;
  return (
    <div className="min-h-screen mt-4 ">
      {/* filter start */}
      <button
        className="w-[180px] flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-lg shadow hover:bg-emerald-600 transition"
        onClick={() => {
          setShowFormTransaction(true);
          setEditingTransaction(null);
        }}
      >
        <PlusCircle size={20} />
        <span> Thêm giao dịch</span>
      </button>
      <div className="bg-white shadow-md rounded-lg mt-2  p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Lọc</h2>
        </div>
        <div className="grid grid-cols-6 gap-4  ">
          {/* Loại */}
          <div className="col-span-1 ">
            <label className="text-sm text-gray-600">Loại</label>
            <select
              className=" border rounded p-2 w-full "
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            >
              <option value="expense">Chi tiêu</option>
              <option value="income">Thu nhập</option>
            </select>
          </div>
          {/* Danh mục */}
          <div className="col-span-1 ">
            <label className="text-sm text-gray-600">Danh mục</label>
            <select
              className=" border rounded p-2 w-full"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            >
              {[...new Set(listCategories)].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="text-sm text-gray-600">Tìm kiếm</label>
            <input
              placeholder="Tìm kiếm giao dịch..."
              className="outline-none border rounded p-2 w-full"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          {/* day week month year */}
          <div className="col-span-1">
            <label className="text-sm text-gray-600"> Theo mốc thời gian</label>
            <select
              className=" border rounded p-2 w-full"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setStartDate("");
                setEndDate("");
                setSearchItem("");
              }}
            >
              <option value="day">Ngày</option>
              <option value="week">Tuần </option>
              <option value="month">Tháng</option>
              <option value="year">Năm</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="text-sm text-gray-600 ">
              Theo khoảng thời gian
            </label>
            <div className="flex gap-4 items-center">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setFilter("");
                }}
              />
              <Input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setFilter("");
                }}
              />
              <div>
                <RotateCcw />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end filter */}
      {/* hover:bg-gray-200 */}
      {/* Danh sách giao dịch */}
      <div className="  mt-4">
        <div className="space-y-6 ">
          {Object.entries(transactionsToRender).map(([date, data], index) => (
            <div key={index} className="mb-6 bg-white rounded-lg">
              {/* Hiển thị ngày, tổng chi tiêu và tổng thu nhập */}
              <div className="flex justify-between items-center  p-2 border-b mb-4 border-gray-300">
                <p className="text-gray-600 font-bold">{date}</p>
                <div className="text-sm text-gray-500 flex gap-4">
                  <span className="font-bold text-red-500">
                    Chi tiêu: - {data.totalExpense.toLocaleString()} đ
                  </span>
                  <span className="font-bold text-green-500">
                    Thu nhập: + {data.totalIncome.toLocaleString()} đ
                  </span>
                </div>
              </div>

              {data.transactions.map((item, idx) => {
                const iconData = ICONS[item.icon] || {
                  icon: "?",
                  color: "bg-gray-400",
                };
                return (
                  <div key={idx} className="">
                    <div
                      className="   p-4 flex justify-between items-center  cursor-pointer ml-2 mr-2   hover:bg-gray-200 hover:rounded-lg transition"
                      // onClick={() => handleDetailTransaction(item)}
                      onClick={() => {
                        setShowFormTransaction(true);
                        setEditingTransaction(item);
                      }}
                    >
                      <div className="flex items-center gap-2 ">
                        <div
                          className={`w-10 h-10 flex items-center justify-center ${iconData.color} rounded-full text-white `}
                        >
                          {iconData.icon}
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">
                            {item.categoryName}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`font-bold ${
                          item.categoryType === "income"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {`${
                          item.categoryType === "income" ? "+" : "-"
                        }${item.amount.toLocaleString()} đ`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* add transaction */}

      {showFormTransaction && (
        <TransactionForm
          onClose={() => setShowFormTransaction(false)}
          initialTransaction={editingTransaction}
          onSuccess={fetchTransactions}
        />
      )}
    </div>
  );
}

export default Transaction;
