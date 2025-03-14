import { ChartBarStacked, Handshake } from "lucide-react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="w-79 bg-white p-4 text-gray-700 mt-8  rounded-lg">
      <SidebarItem icon={Handshake} label="Tài khoản" to="/profile" />

      <SidebarItem icon={ChartBarStacked} label="Danh mục" to="/catalog" />
    </aside>
  );
};

export default Sidebar;
