import { useState } from "react";
import { PlusCircle } from "lucide-react";
import BudgetForm from "@/components/BudgetForm";
export default function Budget() {
  //   const [budgets, setBudgets] = useState([]);
  const [showFormBudget, setShowFormBudget] = useState(false);
  const mockBudgets = [
    { id: 1, category: "Ăn uống", limit: 5000000, spent: 4200000 },
    { id: 2, category: "Giải trí", limit: 2000000, spent: 1500000 },
    { id: 3, category: "Mua sắm", limit: 3000000, spent: 2800000 },
  ];

  return (
    <div className="min-h-screen mt-4 ">
      <button
        onClick={() => setShowFormBudget(true)}
        className="w-[180px] flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-lg shadow hover:bg-emerald-600"
      >
        <PlusCircle size={20} />
        <span>Thêm ngân sách</span>
      </button>
      <div className="bg-white shadow-md rounded-lg p-4 mt-2">
        <h2 className="text-lg font-semibold mb-4">Danh sách Ngân sách</h2>
        <div className="space-y-4">
          {mockBudgets.map((budget) => {
            const percentage = (budget.spent / budget.limit) * 100;

            return (
              <div key={budget.id} className="p-4 border rounded-lg bg-gray-50">
                <div className="flex justify-between">
                  <span className="font-medium">{budget.category}</span>
                  <span className="font-medium text-gray-600">
                    {budget.spent.toLocaleString()} /{" "}
                    {budget.limit.toLocaleString()} đ
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className={`h-2 rounded-full ${
                      percentage > 80 ? "bg-red-500" : "bg-green-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showFormBudget && <BudgetForm onClose={()=>setShowFormBudget(false)} />}
    </div>
  );
}
