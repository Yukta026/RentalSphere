import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Landing from "./components/Landing.jsx";
import TenantDashboard from "./components/TenantDashboard.jsx";
import ManagerDashboard from "./components/ManagerDashboard/ManagerDashboard.jsx";
// import PMRentManage from "./components/ManagerDashboard/PMRentManage.jsx";
// import PMLeaseManage from "./components/ManagerDashboard/PMLeaseManage.jsx";
// import PMViolationLog from "./components/ManagerDashboard/PMViolationLog.jsx";
// import PMServiceReqs from "./components/ManagerDashboard/PMServiceReqs.jsx";
// import PMAnnouncements from "./components/ManagerDashboard/PMAnnouncements.jsx";
// import PMOverview from "./components/ManagerDashboard/PMOverview.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import PasswordReset from "./components/PasswordReset.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      <Route
        exact
        path="/reset-password/:token"
        element={<PasswordReset />}
      />{" "}
      <Route exact path="/tenantdashboard" element={<TenantDashboard />} />
      <Route exact path="/managerdashboard" element={<ManagerDashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
