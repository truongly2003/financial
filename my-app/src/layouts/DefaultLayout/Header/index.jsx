import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  // Danh sách thông báo giả lập
  const notifications = [
    { id: 1, message: "Bạn đã nhận được 500.000đ từ tài khoản ACB" },
    { id: 2, message: "Hóa đơn điện nước đến hạn thanh toán" },
    { id: 3, message: "Mục tiêu tiết kiệm 'Mua MacBook' còn 2.000.000đ nữa!" },
  ];

  const getNavClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-yellow-600"
      : "text-black font-semibold hover:text-yellow-600";

  return (
    <header className="p-3 flex items-center justify-between mx-8">
      {/* Logo + Title */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
          <span className="text-green-600 font-bold">$</span>
        </div>
        <h1 className="text-gray-800 font-semibold">Danh mục tiền mặt</h1>
        <span className="text-gray-500 text-sm">▼</span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        <NavLink to="/" className={getNavClass}>
          Giao dịch
        </NavLink>
        <NavLink to="/statistical" className={getNavClass}>
          Thống kê
        </NavLink>
        <NavLink to="/budget" className={getNavClass}>
          Ngân sách
        </NavLink>
        <NavLink to="/goal" className={getNavClass}>
          Mục tiêu
        </NavLink>
      </nav>

      {/* User Avatar */}
      <div className="flex items-center space-x-2">
        {/*Notification Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 blackrounded-md"
          >
            <Bell size={22} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden">
              <div className="p-2 font-semibold text-gray-700 text-center bg-gray-100">
                Thông báo
              </div>
              <ul className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <li
                      key={notif.id}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    >
                      {notif.message}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">
                    Không có thông báo mới
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <img
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/479523821_1314393613115364_3584558195597252732_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFqNKhYbycOzU2zYQhmgcl0HZboF9VCG-cdlugX1UIb54vlI_CpjeITvzEQDmlcEZb2CkNeuqIwsh0iUoxzSAc0&_nc_ohc=2_T7Mhgq8c8Q7kNvgE6OPQ_&_nc_oc=Adi1EzCoMhRGWlrzB8RSZT6hGa2Lc3l_af2f17x00I2O4Y3uUklu4E0B4rNvO3J68z_3AYwn9OyvhaM6WpQ9uoll&_nc_zt=24&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AS_2rpp4E7xaHIhU60nrOaZ&oh=00_AYHOFx7EGDF7pPQ7HSYmBn6iAK9c87eEobaJ_2PwbAfPew&oe=67D21421"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-gray-800 font-medium">đùa thôi</span>
        <span className="text-gray-500 text-sm">▼</span>
      </div>
    </header>
  );
}
