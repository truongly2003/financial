import { PlusCircle } from "lucide-react";
const goals = [
  {
    id: 1,
    text: "Hoàn thành bài tập React",
    amountNeeded: 1000000,
    currentAmount: 200000,
    deadline: "2025-03-01",
    status: "Đang thực hiện",
  },
  {
    id: 2,
    text: "Đọc sách 30 phút mỗi ngày",
    amountNeeded: 0,
    currentAmount: 0,
    deadline: "2025-04-01",
    status: "Đang thực hiện",
  },
  {
    id: 3,
    text: "Tập thể dục ít nhất 3 lần/tuần",
    amountNeeded: 0,
    currentAmount: 0,
    deadline: "2025-02-28",
    status: "Hoàn thành",
  },
];
function Goal() {
  const deleteGoal = () => {
    alert("delete goal");
  };
  const updateGoal = () => {
    alert("update goal");
  };
  const detailGoal = () => {
    alert("detail goal");
  };
  return (
    <div className="min-h-screen mt-4 ">
      <button className="w-[180px] flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-lg shadow hover:bg-emerald-600">
        <PlusCircle size={20} />
        <span>Thêm mục tiêu</span>
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
              placeholder="Tìm kiếm mục tiêu..."
              className="outline-none border rounded p-2 w-full"
            />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className=" ">
        <div className="bg-white shadow-md rounded-lg mt-4 p-4">
          <table className="w-full  text-dark">
            <thead>
              <tr className=" text-gray-800">
                <th className="p-3 text-left">Mục tiêu</th>
                <th className="p-3 text-left">Số tiền cần đạt</th>
                <th className="p-3 text-left">Số tiền hiện có</th>
                <th className="p-3 text-left">Hạn</th>
                <th className="p-3 text-left">Trạng thái</th>
                <th className="p-3 text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal) => (
                <tr key={goal.id} className="border-t border-gray-600">
                  <td className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-full text-white font-bold">
                      {goal.text.charAt(0).toUpperCase()}
                    </div>
                    {goal.text}
                  </td>
                  <td className="p-3">
                    {goal.amountNeeded.toLocaleString()} VND
                  </td>
                  <td className="p-3">
                    {goal.currentAmount.toLocaleString()} VND
                  </td>
                  <td className="p-3">{goal.deadline}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        goal.status === "Đang thực hiện"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {goal.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteGoal(goal.id)}
                      className=" text-gray-800 px-3 py-2 rounded-lg font-bold transition-all"
                    >
                      xóa
                    </button>
                    <button
                      onClick={() => updateGoal(goal.id)}
                      className=" text-gray-800 px-3 py-2 rounded-lg font-bold transition-all"
                    >
                      sửa
                    </button>
                    <button
                      onClick={() => detailGoal(goal.id)}
                      className=" text-gray-800 px-3 py-2 rounded-lg font-bold transition-all"
                    >
                      chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Goal;
