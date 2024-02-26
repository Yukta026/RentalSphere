import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TenantRequests = () => {
  const navigate = useNavigate();

  const [requestsData, setRequestsData] = useState();

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const result = await Axios.get("http://localhost:8000/request");
    setRequestsData(result.data);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[22px]">Requests</h1>
        <button
          onClick={() => navigate("/tenantdashboard/requests/new-request")}
          className="bg-green-700 text-white tracking-wider rounded-full px-10 py-2 self-start"
        >
          Create request
        </button>
      </div>

      {requestsData?.length === 0 ? (
        <div>No Data Found</div>
      ) : (
        requestsData &&
        requestsData.map((data, index) => (
          <>
            <div className="collapse bg-gray-200 my-4 drop-shadow-lg rounded-[8px]">
              <input type="checkbox" />
              <div className="collapse-title text-[16px] font-semibold">
                {data.requestSubject}
              </div>
              <div className="collapse-content bg-white">
                <p className="text-[16px] mt-4">{data.requestMessage}</p>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
};

export default TenantRequests;
