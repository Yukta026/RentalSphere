import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import NewRequest from '../components/new-request/NewRequest';
import Axios from "axios";
import { FiTool } from "react-icons/fi";
import { sampleRequestData } from "../../Utils/SampleData";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51OwYqn03v7HMsTm7prkFCVoQJ5Wx7fSwROpUjiJC7poWI61Ti6VYo4B0DNnzl8hHlsw89n8nNVldg7Kl6dcYyVay00auB7yPv7"
);

function TenantOverview() {
  const navigate = useNavigate();

  const [requestsData, setRequestsData] = useState(sampleRequestData);
  const [announcementsData, setAnnouncementsData] = useState([
    {
      id: "d6e3",
      announcementMessage: "New announcements 1",
      announcementdate: "18/02/2024",
    },
    {
      id: "d6e4",
      announcementMessage: "New announcements 2",
      announcementdate: "06/02/2024",
    },
    {
      id: "d6e6",
      announcementMessage: "New announcements 3",
      announcementdate: "10/01/2024",
    },
    {
      id: "d6e7",
      announcementMessage: "New announcements 4",
      announcementdate: "10/01/2024",
    },
  ]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const result = await Axios.get("http://localhost:8000/request");
    setRequestsData(result.data);
  };

  const loadAnnouncements = async () => {
    const result = await Axios.get("http://localhost:8000/announcements");
    setAnnouncementsData(result.data);
  };

  console.log(requestsData, "requestsData");

  const handlePayment = async () => {
    try {
      // Call your backend to create a checkout session
      const { data } = await Axios.post(
        "http://localhost:8000/create-checkout-session"
      );

      // When the checkout session is created, redirect to Stripe's hosted checkout page
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.error("Error processing the payment", error);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-[20px]">Dashboard</h1>

      <div className="my-8 border-l-4 border-green-700 w-11/12 py-11 flex justify-between items-center bg-white drop-shadow rounded-[8px] p-6">
        <div>
          <h3 className="font-medium text-[26px]">Your Current Balance</h3>
          <h3 className="font-extrabold text-[26px]">$ 0.00</h3>
        </div>

        <div>
          <button
            onClick={handlePayment}
            className="bg-green-700 text-white tracking-wider rounded-full px-10 py-4"
          >
            Make payment
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-[50%] h-[300px] overflow-auto bg-white drop-shadow rounded-[8px] p-6 flex flex-col justify-between">
          <div className="">
            <h3 className="font-semibold text-[18px]">Open request</h3>
            {requestsData &&
              requestsData.map((data, index) => (
                <div className="mt-6 flex items-center gap-4">
                  <div className="border-2 border-green-700 bg-green-100 text-green-700 text-[22px] p-3 rounded-[8px]">
                    <FiTool />
                  </div>
                  <div>
                    <h6 className="text-[16px] font-semibold">
                      {data.requestSubject}
                    </h6>
                    <p className="text-[12px] font-medium text-gray-500">
                      {data.requestType}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <button
            onClick={() => navigate("/tenantdashboard/requests/new-request")}
            className="bg-green-700 text-white mt-6 tracking-wider rounded-full px-10 py-2 self-start"
          >
            Create request
          </button>
        </div>

        <div className="w-[50%] h-[300px] overflow-auto bg-white drop-shadow rounded-[8px] p-6 mb-10">
          <div className="">
            <h3 className="font-semibold text-[18px]">New Announcements</h3>
            {announcementsData &&
              announcementsData.map((data, index) => (
                <div className="mt-6 flex items-center gap-4" key={index}>
                  <div className="border-2 border-green-700 bg-green-100 text-green-700 text-[22px] p-3 rounded-[8px]">
                    <FiTool />
                  </div>
                  <div>
                    <h6 className="text-[16px] font-semibold">
                      {data.announcementMessage}
                    </h6>
                    <p className="text-[12px] font-medium text-gray-500">
                      {data.announcementdate}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-[50%] bg-white drop-shadow rounded-[8px]  flex flex-col justify-between">
          <div className="">
            {/* <h3 className="font-semibold text-[18px]">Lease information</h3> */}
            <div className="bg-white drop-shadow-md border mt-6 border-gray-300 p-4">
              <h6 className="font-semibold text-[20px] text-gray-600">
                Lease Information
              </h6>

              <p className="mt-4 text-[18px]">Account number</p>
              <p className="text-[16px]">FDF525252FF</p>

              <p className="mt-4 text-[18px]">Address</p>
              <p className="text-[16px]">
                7 street line road, Boston MA 202020, United State{" "}
              </p>

              <div className="flex gap-10 items-center">
                <div className="w-[40%]">
                  <p className="mt-4 text-[18px]">Start date</p>
                  <p className="text-[16px]">April 2023</p>
                </div>

                <div className="w-[40%]">
                  <p className="mt-4 text-[18px]">End date</p>
                  <p className="text-[16px]">March 2024</p>
                </div>
              </div>

              <div className="flex gap-10 items-center">
                <div className="w-[40%]">
                  <p className="mt-4 text-[18px]">Rent</p>
                  <p className="text-[16px]">$ 1000</p>
                </div>

                <div className="w-[40%]">
                  <p className="mt-4 text-[18px]">Maintenance </p>
                  <p className="text-[16px]">$ 200</p>
                </div>
              </div>

              <div>
                <p className="mt-4 text-[18px]">Deposite </p>
                <p className="text-[16px]">$ 1000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] bg-white drop-shadow rounded-[8px]">
          <div className="">
            <div className="bg-white drop-shadow-md border mt-6 border-gray-300 p-4">
              <h6 className="font-semibold text-[20px] text-gray-600">
                Contact Information
              </h6>

              <p className="mt-4 text-[18px]">Contact number</p>
              <p className="text-[16px]">+1 555 555 1234</p>

              <p className="mt-4 text-[18px]">Email</p>
              <p className="text-[16px]">jsmith@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenantOverview;
