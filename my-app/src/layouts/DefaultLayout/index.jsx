import PropTypes from "prop-types";
import Header from "./Header";
// import Sidebar from "./SideBar";
import { AlignJustify } from "lucide-react";
function DefaultLayout({ children }) {
  return (
    <div className=" bg-gray-200">
      {/* Header cố định trên cùng */}
      <div className="sticky top-0 z-50 bg-white ">
        <Header icon={AlignJustify} />
      </div>

      {/* Nội dung bên dưới Header */}
      <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-6xl">
        <div className="    ">{children}</div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
