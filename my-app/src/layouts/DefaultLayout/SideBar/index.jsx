import { Book, Settings, User,LayoutDashboard,BadgeDollarSign,ChartNoAxesCombined,ChartBarStacked,Handshake,ChartPie,Goal,CloudHail   } from "lucide-react";
import SidebarItem from "./SidebarItem";


const Sidebar = () => {
  return (
    <aside className="w-64 bg-black h-screen p-4 text-white">
      {/* Logo & Tên công ty */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          📁
        </div>
        <div>
          <h1 className="text-lg font-semibold">LTL QY</h1>
          <p className="text-xs text-gray-400">Personal</p>
        </div>
      </div>

      {/* Nhóm menu */}
      <div className="text-xs text-gray-400 uppercase mb-2">Quản lý thu chi</div>
      <SidebarItem icon={LayoutDashboard} label="Tổng quan">
        <SidebarItem icon={Handshake} label="Tổng thu & chi" to="/" />
        <SidebarItem icon={ChartPie} label="Biểu đồ thống kê" to="/statistical"/>

      </SidebarItem>

      <SidebarItem icon={BadgeDollarSign} label="Giao dịch" to="/transaction" />
      <SidebarItem icon={ChartBarStacked} label="Danh mục" to="/catalog"/>
      <SidebarItem icon={Goal} label="Mục tiêu" to="/goal"/>
      <SidebarItem icon={CloudHail} label="Nhắc nợ" to="/debt"/>

      <SidebarItem icon={Book} label="Ngân sách" to="/budget" />
      <SidebarItem icon={ChartNoAxesCombined} label="Báo cáo" to="/report" />
      <SidebarItem icon={Settings} label="Cài đặt" to="/option"/>


      {/* User Info */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <User size={16} />
        </div>
        <div>
          <p className="text-sm font-medium">lytruong</p>
          <p className="text-xs text-gray-400">truonglykhong2003@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
