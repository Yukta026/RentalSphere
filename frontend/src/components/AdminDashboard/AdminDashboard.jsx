import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { propManagersData } from "../../Utils/sampleDataHarsh.jsx";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [propertyManager, setPropertyManager] = useState([]);
  useEffect(() => {
    loadPropertyManager();
  }, []);

  const loadPropertyManager = async () => {
    // const result = await Axios.get("http://localhost:8000/property-managers");
    const result = propManagersData;
    // const filteredPropertyManagers = result.filter(
    //   (user) => !user.hasOwnProperty("verified")
    // );
    // console.log(filteredPropertyManagers, "filteredPropertyManagers");
    setPropertyManager(result);
    // setPropertyManager(result.data)
  };

  const handleApprove = async (id) => {
    try {
      await Axios.patch(`http://localhost:8000/property-managers/${id}`, {
        verified: true,
      });
      alert("Form submitted successfully!");
      loadPropertyManager();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = async (id) => {
    try {
      await Axios.patch(`http://localhost:8000/property-managers/${id}`, {
        verified: false,
      });
      alert("Form submitted successfully!");
      loadPropertyManager();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const viewDetails = async (id) => {
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
          Approved Property manager
        </div>
      </div>

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
            </tr>
          </thead>
          <tbody>
            {propertyManager?.map((user) => (
              <tr key={user.id}>
                {/* <td className="border px-4 py-2">{user.id}</td> */}
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phoneNumber}</td>
                <td className="border px-4 py-2">{user.date}</td>
                <td className="border px-4 py-2">{user.licenseNo}</td>
                {/* <td className="border px-4 py-2 gap-4">
                  <button
                    // onClick={() => viewDetails(user.id)}
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
                    onClick={() => handleApprove(user.id)}
                    className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleCancel(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      
      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-6"> Request Details</h3>

          <div className="modal-action flex flex-col justify-center ">
            <form
              method="dialog"
              // onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-4"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="input input-bordered input-primary w-full"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-4"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  className="input input-bordered input-primary w-full h-40"
                  rows="4"
                  // value={content}
                  // onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Announcement
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AdminDashboard;
