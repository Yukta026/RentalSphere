import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Landing from "./components/Landing.jsx";
import TenantDashboard from "./components/TenantDashboard.jsx";
import ManagerDashboard from "./components/ManagerDashboard/ManagerDashboard.jsx";
import PMRentManage from "./components/ManagerDashboard/PMRentManage.jsx";
import PMLeaseManage from "./components/ManagerDashboard/PMLeaseManage.jsx";
import PMViolationLog from "./components/ManagerDashboard/PMViolationLog.jsx";
import PMServiceReqs from "./components/ManagerDashboard/PMServiceReqs.jsx";
import PMAnnouncements from "./components/ManagerDashboard/PMAnnouncements.jsx";
import PMOverview from "./components/ManagerDashboard/PMOverview.jsx";
import PMTenantApprovals from "./components/ManagerDashboard/PMTenantApprovals.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/tenantdashboard" element={<TenantDashboard />} />
      <Route exact path="/managerdashboard" element={<ManagerDashboard />}>
        <Route exact path="overview" element={<PMOverview />} />
        <Route exact path="announcements" element={<PMAnnouncements />} />
        <Route exact path="tenantapprovals" element={<PMTenantApprovals />} />
        <Route exact path="rentmanagement" element={<PMRentManage />} />
        <Route exact path="leasemanagement" element={<PMLeaseManage />} />
        <Route exact path="violationlog" element={<PMViolationLog />} />
        <Route exact path="servicerequests" element={<PMServiceReqs />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
