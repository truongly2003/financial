import { useState } from "react";
import CategorySelector from "@/components/CategorySelector";

function Transaction() {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState(null);
  // const handleSelectCategory = (category)=>{
  //     setSelectedCategory(category);
  // }
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Hiển thị ảnh ngay khi tải lên
    }
  };
  const handleAddTransaction = () => {
    // if(!selectedCategory || amount){
    //     alert("vui lòng chọn danh mục và số tiền")
    //     return;
    // }
    // alert(`giao dịch: ${selectedCategory.name} - ${amount} VND`)
    // setAmount("");
    // setSelectedCategory(null);
  };
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
        <CategorySelector />
      </div>
      {/* Nhập số tiền */}
      <div className="bg-white shadow-md rounded-lg mx-4 mt-4 p-4">
        {/* {selectedCategory && ( */}
        <div className="text-center">
          <p className="text-lg font-semibold">
            {/* Danh mục: {selectedCategory.icon} {selectedCategory.name} */}
          </p>
          <input
            type="number"
            className="w-full mt-2 p-2 border rounded-lg text-center"
            placeholder="Nhập số tiền"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* Ô nhập ghi chú */}
          <textarea
            className="w-full mt-2 p-2 border rounded-lg text-center"
            placeholder="Nhập ghi chú (không bắt buộc)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <div className="flex items-center gap-4 mt-2">
            {/* Thêm ảnh */}
            <label className="border p-2 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
              📷 Chọn ảnh
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>

            {/* Hiển thị ảnh đã chọn */}
            {image && (
              <div className="w-24 h-24 border rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="Hình ảnh giao dịch"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <button
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold"
            onClick={handleAddTransaction}
          >
            Thêm giao dịch
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Transaction;
