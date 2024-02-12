import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Landing from "./components/Landing.jsx";
import TenantDashboard from "./components/TenantDashboard.jsx";
import ManagerDashboard from "./components/ManagerDashboard.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/tenantdashboard" element={<TenantDashboard />} />
      <Route exact path="/managerdashboard" element={<ManagerDashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
