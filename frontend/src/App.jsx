import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
// import TenantDashboard from "./components/TenantDashboard.jsx";
import Landing from "./components/Landing.jsx";

function App() {
  return (
    <>
    {/* <Landing/> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        {/* <Route exact path="/dashboard" element={<TenantDashboard />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
