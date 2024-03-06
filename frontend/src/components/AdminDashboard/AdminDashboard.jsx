import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { propManagersData } from "../../Utils/sampleDataHarsh.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import useAppContext from "../../hooks/useAppContext.jsx";
const ALL_PMREQS_URL = import.meta.env.VITE_BACKEND_URL + "/admin/properties";
const PMREQ_APPROVE_URL = import.meta.env.VITE_BACKEND_URL + "/admin/approve/";
const PMREQ_REJECT_URL = import.meta.env.VITE_BACKEND_URL + "/admin/reject/";

const AdminDashboard = () => {
  const { auth, setAuth } = useAuth();
  const { allPMReqs, setAllPMReqs } = useAppContext();
  const navigate = useNavigate();
  const [propertyManager, setPropertyManager] = useState([]);
  const [showDash, setShowDash] = useState(true);

  const isAuthEmpty =
    Object.keys(auth).length === 0 && auth.constructor === Object;

  useEffect(() => {
    setPropertyManager(propManagersData);
  }, []);

  useEffect(() => {
    if (isAuthEmpty) {
      setShowDash(false);
      navigate(`/home`, { replace: true });
      window.alert("You're not logged in. Please log in first.");
    } else if (auth && auth.role && auth.role !== "ADMIN") {
      setShowDash(false);
      navigate(`/home`, { replace: true });
      window.alert("You're not an admin");
    }
  }, []);

  useEffect(() => {
    const fetchPMReqs = () => {
      const fetchPMReqs = async () => {
        try {
          // const headers = {
          //   Authorization: `Bearer ${auth && auth.token}`,
          // };
          const response = await axios.get(
            ALL_PMREQS_URL
            // ,{
            //   headers: headers,
            // }
          );
          if (response) {
            console.log("All PM Requests API Response: ", response.data);
            setAllPMReqs(response.data.propertyManagerRequest);

            // setIsLoading(false);
            // if (response.data.length === 0) {
            //   setIsLoading(false);
            // } else {
            //   setData(response.data[0]);
            // }
          }
        } catch (err) {
          console.log(err.response);
        }
      };
      // setIsLoading(true);
      fetchPMReqs();
    };
    fetchPMReqs();
  }, [navigate]);

  const handleApproveReq = async (email) => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };

    try {
      const response = await axios.post(PMREQ_APPROVE_URL + email, {
        headers: headers,
      });
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error submitting approval: ", error);
    }
  };

  const handleRejectReq = async (email) => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };

    try {
      const response = await axios.post(PMREQ_REJECT_URL + email, {
        headers: headers,
      });
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error submitting rejection: ", error);
    }
  };

  const handleViewDetails = async (id) => {
    navigate(`/admin/${id}`);
  };

  return (
    <>
      <div className="container py-6 flex justify-between items-center">
        <p className="text-2xl font-bold mb-4">AdminDashboard</p>
        <div
          className="bg-slate-500 text-white py-2 px-4 cursor-pointer text-md "
          onClick={() => navigate("/approved-managers")}
        >
          Approved Property Managers
        </div>
      </div>

      {showDash && (
        <div className="container mx-auto">
          <h1 className="text-xl font-bold mb-4 mt-10">
            Property Manager Requests
          </h1>
          <table className="table mt-10">
            <thead>
              <tr>
                {/* <th className="px-4 py-2">ID</th> */}
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">ID Number</th>
                <th className="px-4 py-2">Approve/Reject Requests</th>
                <th className="px-4 py-2">View Details</th>
              </tr>
            </thead>
            <tbody>
              {propertyManager?.map((pmReq) => (
                <tr key={pmReq.id}>
                  {/* <td className="border px-4 py-2">{pmReq.id}</td> */}
                  <td className="border px-4 py-2">{pmReq.firstName}</td>
                  <td className="border px-4 py-2">{pmReq.lastName}</td>
                  <td className="border px-4 py-2">{pmReq.email}</td>
                  <td className="border px-4 py-2">{pmReq.phoneNumber}</td>
                  <td className="border px-4 py-2">{pmReq.date}</td>
                  <td className="border px-4 py-2">{pmReq.licenseNo}</td>
                  {/* <td className="border px-4 py-2 gap-4">
                  <button
                    // onClick={() => viewDetails(pmReq.id)}
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View
                  </button>
                </td> */}
                  <td className="border px-4 py-2 gap-4 flex justify-around">
                    <button
                      onClick={() => handleApproveReq(pmReq.email)}
                      className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleRejectReq(pmReq.email)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Reject
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleViewDetails(pmReq.id)}
                      className="mr-2 bg-black text-white font-bold py-2 px-4 rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-6"> Request Details</h3>
        </div>
      </dialog> */}
    </>
  );
};

export default AdminDashboard;
