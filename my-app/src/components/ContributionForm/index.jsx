import { useState } from "react";
import { CircleX } from "lucide-react";
import PropTypes from "prop-types";
const ContributionForm = ({ onClose }) => {
  const [contribute, setContribute] = useState({
    goalId: 1,
    userId: 1,
    amount: 1,
    contributeDate: "",
    description: "",
  });
  const handChangeContribute = (e) => {
    setContribute({
      ...contribute,
      [e.target.value]: e.target.value,
    });
  };
  const handleSubmit = () => {};

  const handleDelete = () => {};
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-gray-900 bg-opacity-50  z-[50]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-200 relative">
        {/* Thông tin chung */}
        <div className="">
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <label className="text-sm text-gray-600">Số tiền</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                name="amount"
                value={contribute.amount}
                onChange={handChangeContribute}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">Ngày</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                name="amount"
                value={contribute.contributionDate}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <label className="text-sm text-gray-600 h-[100px]">
                Lưu ý (tùy chọn)
              </label>
              <textarea
                rows="5"
                className="w-full border rounded"
                placeholder="Nhập nội dung tại đây..."
                name="description"
                value={contribute.description}
                onChange={handChangeContribute}
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
                Xóa đóng góp
            </button>
          )} */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Xóa đóng góp
          </button>
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
};
ContributionForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ContributionForm;
