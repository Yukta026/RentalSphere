import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, NavLink, Outlet } from "react-router-dom";
// import NewRequest from '../components/new-request/NewRequest';
import Axios from "axios";
import { FiFileText, FiGlobe, FiHome, FiTool, FiUsers } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const TenantDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/tenantdashboard/overview`, {
      replace: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="mr-12">
        <NavLink
          to="/tenantdashboard/overview"
          className={`flex items-center gap-4 my-4 mt-6 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <FiHome />
          </span>{" "}
          Dashboard
        </NavLink>
        <NavLink
          to="/tenantdashboard/payments"
          className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <BsCreditCard />
          </span>{" "}
          Payments
        </NavLink>

        <NavLink
          to="/tenantdashboard/requests"
          className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <FiTool />
          </span>{" "}
          Requests
        </NavLink>

        <NavLink
          to="/tenantdashboard/announcements"
          className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <HiOutlineSpeakerphone />
          </span>{" "}
          Announcements
        </NavLink>

        <NavLink
          to="/tenantdashboard/documents"
          className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <FiFileText />
          </span>{" "}
          Documents
        </NavLink>

        <NavLink
          to="/tenantdashboard/contacts"
          className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <FiUsers />
          </span>{" "}
          Contacts
        </NavLink>

        <NavLink
          to="/tenantdashboard/community"
          className={`flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200 px-4 rounded-[6px] py-2 ${({
            isActive,
          }) => (isActive ? "active" : "inactive")}`}
        >
          <span className="text-[20px]">
            <FiGlobe />
          </span>{" "}
          Community
        </NavLink>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default TenantDashboard;
