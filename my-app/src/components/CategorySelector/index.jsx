import { useState } from "react";

const categories = {
  expense: [
    { name: "Mua sắm", icon: "🛍️" },
    { name: "Đồ ăn", icon: "🍔" },
    { name: "Điện thoại", icon: "📱" },
    { name: "Giáo dục", icon: "📖" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Giải trí", icon: "🎮" },
    { name: "Thể thao", icon: "⚽" },
    { name: "Xã hội", icon: "🤝" },
    { name: "Sức khỏe", icon: "❤️" },
  ],
  income: [
    { name: "Lương", icon: "💰" },
    { name: "Khoản đầu tư", icon: "📈" },
    { name: "Bán thời gian", icon: "🛒" },
    { name: "Giải thưởng", icon: "🏆" },
  ],
  transfer: [{ name: "Chuyển khoản", icon: "💳" }],
};

function CategorySelector() {
  const [activeTab, setActiveTab] = useState("income");
  // if(activeTab==="income"){
  //   console.log(categories[activeTab])
  // }

  return (
    <div className="">
      {/* tabs */}
      <div className="flex rounded-sm p-2 border-black-500 border mt-2">
        {["expense", "income", "transfer"].map((type) => (
          <button
            key={type}
            className={`flex-1 p-2 text-center font-semibold ${
              activeTab === type
                ? "bg-black text-white rounded-lg"
                : "text-black"
            }`}
            onClick={() => setActiveTab(type)}
          >
            {type === "expense"
              ? "Chi tiêu"
              : type === "income"
              ? "Thu nhập"
              : "Chuyển khoản"}
          </button>
        ))}
      </div>
      {/* categories */}
      <div className="overflow-x-auto w-full h-[170px]">
        <div className="flex flex-wrap gap-4 p-4" >
          {categories[activeTab].map((item, index) => (
            <div key={index} className="flex flex-col items-center w-20">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <p className="text-xs text-center mt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySelector;
