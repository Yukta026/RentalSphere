import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import { sampleTenantReqs } from "../../Utils/SampleData.jsx";
import LoadingSpinner from "../../assets/LoadingSpinner.jsx";
import { toast, Bounce } from "react-toastify";
// const ALL_PROPS_URL = "http://localhost:8080/api/v1/property";
const ALL_REQS_URL = "http://localhost:8080/api/v1/tenantapplications/all";
const APPROVE_TENANT_URL = "http://localhost:8080/api/v1/property/approve/";
const REJECT_TENANT_URL = "http://localhost:8080/api/v1/property/reject/";

const PMTenantRequests = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [properties, setProperties] = useState([]);
  // const [selectedProperty, setSelectedProperty] = useState({});
  const [requests, setRequests] = useState(sampleTenantReqs);
  const [selectedRequest, setSelectedRequest] = useState({});

  const fetchAllReqs = async () => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };
    setIsLoading(true);
    await axios
      .get(ALL_REQS_URL, { headers })
      .then((res) => {
        console.log(res);
        console.log("all reqs from PMTenantApprovals", res.data);
        setRequests(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleApprove = async (request) => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };
    setIsLoading(true);
    await axios
      .get(`${APPROVE_TENANT_URL + request.user.email}`, { headers })
      .then((res) => {
        console.log(res);
        toast.success("Tenant Approved", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error: Submit failure", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .finally(() => setIsLoading(false));
  };

  const handleReject = async (request) => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };
    setIsLoading(true);
    await axios
      .get(`${REJECT_TENANT_URL + request.user.email}`, { headers })
      .then((res) => {
        console.log(res);
        toast.success("Tenant Rejected", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error: Submit failure", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .finally(() => setIsLoading(false));
  };

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    document.getElementById("my_modal_3").showModal();
    // setShowDialog(true);
  };

  //   useEffect(() => {
  //   fetchAllReqs();
  // }, [auth, navigate]);

  return (
    <div>
      {isLoading ? (
        <div className="loadingCont flex text-center justify-items-center h-screen w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-10 items-center p-4">
            <div className="flex justify-center align-center">
              <h1 className="text-2xl font-bold mb-10 ">
                Property Manager Tenant Requests
              </h1>
            </div>
            <div
              className="px-4 py-2 text-white cursor-pointer bg-slate-500 text-md "
              onClick={() => navigate("/approved-tenants")}
            >
              Approved Tenants
            </div>
          </div>
          <div className="divide-y divide-gray-200 mt-12">
            {requests &&
              requests.map((request) => (
                <div
                  key={request.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div onClick={() => handleRequestClick(request)}>
                    <h2 className="text-lg font-semibold cursor-pointer">
                      {request.firstName + " " + request.lastName}
                    </h2>
                    <p className="text-sm text-gray-600">{request.details}</p>
                  </div>
                  {/* Approve and Deny buttons */}
                  <div className="flex space-x-4">
                    <button
                      className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleApprove(request)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleReject(request)}
                    >
                      Deny
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {/* Dialog for displaying request details */}
          {/* {showDialog && ( */}
          <dialog
            id="my_modal_3"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  // onClick={() => setShowDialog(false)}
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg mb-6">Request Details</h3>
              {selectedRequest && selectedRequest.tenantID && (
                <div className="p-4">
                  <h2 className="text-lg font-semibold">
                    {selectedRequest.firstName + " " + selectedRequest.lastName}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selectedRequest && selectedRequest.details}
                  </p>
                </div>
              )}
            </div>
          </dialog>
          {/* )} */}
        </>
      )}
    </div>
  );
};

export default PMTenantRequests;
