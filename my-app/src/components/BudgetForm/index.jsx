import { useState } from "react";
import { CircleX } from "lucide-react";
import PropTypes from "prop-types";

export default function BudgetForm({ onClose }) {
  const [repeat, setRepeat] = useState("Hàng tháng");

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-gray-900 bg-opacity-50  z-[50]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-200 relative">
        {/* Thông tin chung */}
        <div className="mt-4">
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <label className=" text-sm text-gray-600 ">Tên Ngân sách</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">Số lượng</label>
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <div className="flex gap-2 mt-2"></div>
        </div>

        {/* Lọc ngân sách */}
        <div className="">
          <label className="text-sm text-gray-600">Chọn danh mục</label>
          <select className="w-full p-2 border rounded-md">
            <option>Tất cả các danh mục</option>
          </select>
        </div>

        {/* Các kỳ ngân sách */}
        <div className="mt-2">
          <label className="text-sm text-gray-600">Các kỳ ngân sách</label>
          <div className="flex gap-2 mt-2 flex-wrap">
            {[
              "Một lần",
              "Mỗi ngày",
              "Hàng tuần",
              "Mỗi hai tuần",
              "Hàng tháng",
              "Hàng năm",
            ].map((option) => (
              <button
                key={option}
                className={`px-3 py-1 border rounded-md ${
                  repeat === option ? "bg-green-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => setRepeat(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <label className="text-sm text-gray-600">Ngày khởi hành</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            defaultValue="2025-03-08"
          />
        </div>
        {/* Nút hành động */}
        <button
          className="mt-4 w-full py-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed"
          disabled
        >
          Lưu thay đổi
        </button>
        <button
          className="mt-2 w-full py-2 bg-gray-500 text-white rounded-md"
          onClick={onClose}
        >
          Hủy bỏ
        </button>
        <p className="mt-2 text-center text-red-500 cursor-pointer">
          Xóa ngân sách
        </p>

        {/* Nút đóng */}
        <button
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <CircleX />
        </button>
      </div>
    </div>
  );
}

BudgetForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
