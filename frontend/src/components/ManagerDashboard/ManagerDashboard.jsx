import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { sidebarMenuItems } from "../../Utils/SampleData.jsx";
import { useEffect } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { FiHome, FiTool } from "react-icons/fi";
import { TbSpeakerphone } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function ManagerDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (componentName) => {
    navigate(`/managerdashboard/${componentName}`);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    navigate(`/managerdashboard/overview`);
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "FiHome":
        return <FiHome />;
      case "FaRegMoneyBillAlt":
        return <FaRegMoneyBillAlt />;
      case "IoDocumentOutline":
        return <IoDocumentOutline />;

      case "AiTwotoneFileExclamation":
        return <AiTwotoneFileExclamation />;
      case "FiTool":
        return <FiTool />;
      case "TbSpeakerphone":
        return <TbSpeakerphone />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-white drop-shadow-md">
        <h2 className="text-lg font-bold mb-10">Property Manager Dashboard</h2>
        <ul>
          {sidebarMenuItems.map((menuItem, index) => (
            <li className="my-2" key={index}>
              <button
                className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 w-full ${
                  location.pathname === `/managerdashboard/${menuItem.path}` &&
                  "font-bold"
                }`}
                // className={` ${({ isActive }) =>
                //   isActive ? "active" : "inactive"}`}
                onClick={() => handleNavigation(menuItem.path)}
              >
                <span className="text-[20px]">
                  {/* <FiHome /> */}
                  {/* <menuItem.icon /> */}
                  {getIconComponent(menuItem.icon)}
                  {/* Render the icon dynamically */}
                </span>{" "}
                {menuItem.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default ManagerDashboard;
