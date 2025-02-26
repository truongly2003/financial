import { Bell, PlusCircle } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ icon: Icon }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  // Danh sách thông báo giả lập
  const notifications = [
    { id: 1, message: "Bạn đã nhận được 500.000đ từ tài khoản ACB" },
    { id: 2, message: "Hóa đơn điện nước đến hạn thanh toán" },
    { id: 3, message: "Mục tiêu tiết kiệm 'Mua MacBook' còn 2.000.000đ nữa!" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-slate-700 shadow-md relative">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-200">{<Icon size={30} />}</h1>

      {/* Main */}
      <div className="flex items-center gap-4">
        {/* Add Transaction */}
        <button className="p-2 text-gray-200 hover:bg-blue-800 rounded-md">
          <PlusCircle size={22} />
        </button>

        {/* Notification Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-200 hover:bg-blue-800 rounded-md"
          >
            <Bell size={22} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden">
              <div className="p-2 font-semibold text-gray-700 text-center bg-gray-100">Thông báo</div>
              <ul className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <li key={notif.id} className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                      {notif.message}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">Không có thông báo mới</li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
        <img
            src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/479523821_1314393613115364_3584558195597252732_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFqNKhYbycOzU2zYQhmgcl0HZboF9VCG-cdlugX1UIb54vlI_CpjeITvzEQDmlcEZb2CkNeuqIwsh0iUoxzSAc0&_nc_ohc=1d69z6Q5kogQ7kNvgFk446D&_nc_oc=Adj7CmczdPeDwXOzowYqwh9onf_ya-ho3itbwr1csZizpuTzNKaxwyMyh0jBphTvECE&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=AWNdJBdw4ry4m8rOWN8QzgP&oh=00_AYAhkQ5BQ07aUIRFie39d6gxoDlyqhSjm4KhkqUEwaONpw&oe=67BF5DE3"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-200 font-medium">Ly Truong</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  icon: PropTypes.node,
};

export default Header;
