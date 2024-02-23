import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { sidebarMenuItems } from "../../Utils/SampleData.jsx";
import { useEffect } from "react";

function ManagerDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (componentName) => {
    navigate(`/managerdashboard/${componentName}`);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  // useEffect(() => {
  //   navigate(`/managerdashboard/overview`);
  // }, [navigate]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/4 p-4">
        <h2 className="text-lg font-bold mb-4">Property Manager Dashboard</h2>
        <ul>
          {sidebarMenuItems.map((menuItem, index) => (
            <li className="my-2" key={index}>
              <button
                className={`hover:text-gray-300 ${
                  location.pathname === `/managerdashboard/${menuItem.path}` &&
                  "font-bold"
                }`}
                onClick={() => handleNavigation(menuItem.path)}
              >
                {menuItem.name}
              </button>
            </li>
          ))}
          <li className="my-2">
            <button
              className={`hover:text-gray-300 ${
                location.pathname === "/managerdashboard" && "font-bold"
              }`}
              onClick={() => navigate("/managerdashboard")}
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default ManagerDashboard;
