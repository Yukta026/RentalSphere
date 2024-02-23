import {
  openServiceRequestsData,
  outstandingBalancesData,
} from "../../Utils/SampleData.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function PMOverview() {
  const navigate = useNavigate();
  // Calculate total outstanding balance
  const totalBalance = outstandingBalancesData.reduce(
    (acc, curr) => acc + curr.balance,
    0
  );
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 grid-auto-rows-auto">
        {/* Outstanding Balances Card Element */}
        <div className="bg-white p-4 shadow rounded-lg mb-4 h-min">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Outstanding Balances</h3>
            {/* <button className="text-blue-600 hover:underline">View</button> */}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={"/managerdashboard/rentmanagement"}
            >
              View
            </Link>
          </div>
          <p className="mb-4">Total Outstanding Balance: ${totalBalance}</p>
          <ul>
            {outstandingBalancesData.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{`${item.name} - ${item.unit}`}</span>
                <span>${item.balance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outstanding Balances Card Element */}
        <div className="bg-white p-4 shadow rounded-lg mb-4 h-min">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Outstanding Balances</h3>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
          <p className="mb-4">Total Outstanding Balance: ${totalBalance}</p>
          <ul>
            {outstandingBalancesData.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{`${item.name} - ${item.unit}`}</span>
                <span>${item.balance}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Outstanding Balances Card Element */}
        <div className="bg-white p-4 shadow rounded-lg mb-4 h-min">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Outstanding Balances</h3>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
          <p className="mb-4">Total Outstanding Balance: ${totalBalance}</p>
          <ul>
            {outstandingBalancesData.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{`${item.name} - ${item.unit}`}</span>
                <span>${item.balance}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Outstanding Balances Card Element */}
        <div className="bg-white p-4 shadow rounded-lg mb-4 h-min">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Outstanding Balances</h3>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
          <p className="mb-4">Total Outstanding Balance: ${totalBalance}</p>
          <ul>
            {outstandingBalancesData.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{`${item.name} - ${item.unit}`}</span>
                <span>${item.balance}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Open Service Requests Card Element */}
        <div className="bg-white p-4 shadow rounded-lg h-1/3 scroll-smooth overflow-scroll">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Open Service Requests</h3>
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={"/managerdashboard/servicerequests"}
            >
              View
            </Link>
          </div>

          {openServiceRequestsData.map((request) => (
            <div
              key={request.id}
              className="border-b border-gray-200 pb-4 mb-4"
            >
              <h4 className="font-semibold">{request.serviceTitle}</h4>
              <p className="text-gray-600">
                <span className="font-semibold">Tenant:</span>{" "}
                {request.tenant.name} - {request.tenant.unit}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Description:</span>{" "}
                {request.serviceDescription}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span> {request.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
