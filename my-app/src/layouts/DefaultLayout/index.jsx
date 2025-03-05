import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./SideBar";
import { AlignJustify } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const titles = {
  "/": "Tổng quan",
  "/transaction": "Thêm giao dịch ",
  "/transaction/:id": "Cập nhật giao dịch ",
  "/statistical": "Thống kê",
  "/catalog": "Danh mục",
  "/profile": "Hồ sơ"
};
function DefaultLayout({ children }) {
  const location = useLocation();
  const [title, setTitle] = useState("");
  useEffect(() => {
    let newTitle=titles[location.pathname] || "Không xác định"
    if (/^\/transaction\/\d+$/.test(location.pathname)) {
      newTitle = "Cập nhật giao dịch";
    }
    
    setTitle(newTitle);
  }, [location.pathname]);
  return (
    <div className="flex h-screen">
      <div className="w-64 h-screen fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="ml-64 flex-1 flex flex-col h-screen overflow-auto">
        {/* Header cố định trên cùng */}
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Header icon={AlignJustify} />
        </div>

        {/* Nội dung bên dưới Header */}
        <div className="flex flex-col items-center gap-1 bg-light p-1">
          <div className="w-full h-[30px]  text-gray-900">
            <span className="mx-4">{title}</span>
          </div>
          <div className="w-full min-h-[800px] bg-gray-200 rounded-lg shadow-lg shadow-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
