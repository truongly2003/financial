import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
import { getAllBudgetByUserId } from "@/services/BudgetService";
export default function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [showFormBudget, setShowFormBudget] = useState(false);
  const [editingBudget, setEditingBudget] = useState(null);

  const fetchBudgets = async () => {
    try {
      const response = await getAllBudgetByUserId(1);
      setBudgets(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBudgets();
  }, []);
  return (
    <div className="min-h-screen mt-4 ">
      <button
        onClick={() => {
          setShowFormBudget(true);
          setEditingBudget(null);
        }}
        className="w-[180px] flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-lg shadow hover:bg-emerald-600"
      >
        <PlusCircle size={20} />
        <span>Thêm ngân sách</span>
      </button>
      <div className="bg-white shadow-md rounded-lg mt-2  p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Lọc</h2>
        </div>
        <div className="grid grid-cols-6 gap-4  ">
          <div className="col-span-1 ">
            <label className="text-sm text-gray-600">Trạng thái</label>
            <select className=" border rounded p-2 w-full ">
              <option value="expense">Đang hoạt động</option>
              <option value="income">Hết hạn</option>
              <option value="income">Vượt mức</option>
            </select>
          </div>
          <div className="col-span-1 ">
            <label className="text-sm text-gray-600">Tìm kiếm</label>
            <input
              placeholder="Tìm kiếm ngân sách..."
              className="outline-none border rounded p-2 w-full"
            />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-2">
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div
              onClick={() => {
                setShowFormBudget(true);
                setEditingBudget(budget);
              }}
              key={budget.categoryId}
              className="p-5 cursor-pointer bg-white shadow-lg rounded-xl border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                {budget.budgetName}
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                💰{" "}
                <span className="font-semibold">
                  {budget.amountLimit.toLocaleString()} VND
                </span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                {budget.startDate} → {budget.endDate}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <span className="text-gray-700 font-medium">Trạng thái:</span>
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    budget.status === "active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {budget.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {showFormBudget && (
        <BudgetForm
          onClose={() => setShowFormBudget(false)}
          initialBudget={editingBudget}
          onSuccess={fetchBudgets}
        />
      )}
    </div>
  );
}
