import PropTypes from "prop-types";
import { CircleX } from "lucide-react";
import { useState } from "react";

export default function GoalForm({ onClose }) {
  const [goal, setGoal] = useState({
    userId: 1,
    goalName: "",
    targetAmount: "",
    currentAmount: "",
    deadline: "",
    walletId: 1,
    status: "success",
    description: "",
  });
  const handleChangeGoal = (e) => {
    setGoal({
      ...goal,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {};
  // const handleDelete = () => {};
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-gray-900 bg-opacity-50  z-[50]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-200 relative">
        {/* Thông tin chung */}
        <div className="">
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <label className=" text-sm text-gray-600 ">Tên mục tiêu</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="goalName"
                value={goal.goalName}
                onChange={handleChangeGoal}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">Hạn chót</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                name="deadline"
                value={goal.deadline}
                onChange={handleChangeGoal}
              />
            </div>
          </div>
        </div>
        {/* amount */}
        <div className="">
          <div className="flex gap-2 ">
            <div className="flex-1">
              <label className="text-sm text-gray-600">Mô tả</label>
              <textarea
                rows="5"
                className="w-full border rounded"
                placeholder="Nhập nội dung tại đây..."
                name="description"
                value={goal.description}
                onChange={handleChangeGoal}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">Số tiền mục tiêu</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                name="targetAmount"
                value={goal.targetAmount}
                onChange={handleChangeGoal}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Lưu
          </button>
          {/* {budget.id && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleDelete}
            >
              Xóa mục tiêu
            </button>
          )} */}

          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Hủy bỏ
          </button>
          <button
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <CircleX />
          </button>
        </div>
      </div>
    </div>
  );
}

GoalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
