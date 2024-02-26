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
import ForgotPassword from "./components/ForgotPassword.jsx";
import PasswordReset from "./components/PasswordReset.jsx";
import TenantOverview from "./components/TenantDashboard/TenantOverview.jsx";
import Payments from "./components/TenantDashboard/Payments.jsx";
import Requests from "./components/TenantDashboard/Requests.jsx";
import Announcements from "./components/TenantDashboard/Announcements.jsx";
import Documents from "./components/TenantDashboard/Documents.jsx";
import Contacts from  "./components/TenantDashboard/Contacts.jsx";
import Community from "./components/TenantDashboard/Community.jsx";
import NewPost from "./components/TenantDashboard/NewPost.jsx";
import NewRequest from "./components/TenantDashboard/NewRequest.jsx";
import Home from "./components/Home.jsx";
import AddPropertyManager from "./components/AddPropertyManager.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import PropertyMangers from "./components/AdminDashboard/PropertyMangers.jsx";
import RequestDetails from "./components/AdminDashboard/RequestDetails.jsx";


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/property-manager" element={<AddPropertyManager />} />
      <Route exact path="/admin" element={<AdminDashboard />} />
      <Route exact path="/listed-property-manager" element={<PropertyMangers />} />
      <Route exact path="/admin/:id" element={<RequestDetails />} />

      <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      <Route
        exact
        path="/reset-password/:token"
        element={<PasswordReset />}
      />{" "}
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
      <Route exact path="/tenantdashboard" element={<TenantDashboard />}>
        <Route exact path="overview" element={<TenantOverview/>} />
        <Route exact path="requests/new-request" element={<NewRequest />} />
        <Route exact path="payments" element={<Payments />} />
        <Route exact path="requests" element={<Requests />} />
        <Route exact path="announcements" element={<Announcements />} />
        <Route exact path="documents" element={<Documents />} />
        <Route exact path="contacts" element={<Contacts />} />
        <Route exact path="community" element={<Community />} />
        <Route exact path="community/new-post" element={<NewPost />} />new-post
      </Route>
    </Routes>
  );
};

export default AppRoutes;
