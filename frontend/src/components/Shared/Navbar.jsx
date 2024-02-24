import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx"; // Import the useAuth hook

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth(); // Get the auth object and the setAuth function

  // Function to handle logout
  const handleLogout = () => {
    // Clear the auth context
    console.log("Auth context was cleared!");
    setAuth({});
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    // Redirect to the homepage
    navigate("/");
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1
              className="font-bold text-xl cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              RentalSphere
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-4">
                <li className="hover:text-red-600 font-extrabold">Home</li>
                <li className="hover:text-red-600 font-extrabold">About</li>
                <li className="hover:text-red-600 font-extrabold">Contact</li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Conditional rendering based on the presence of email and token */}
              {auth.email && auth.token ? (
                <button
                  className="px-4 py-2 bg-gray-800  hover:bg-gray-600 text-white rounded-full font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-800  hover:bg-gray-600 text-white rounded-full font-semibold"
                    onClick={() => {
                      navigate(`/login`);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-800  hover:bg-gray-600 text-white rounded-full font-semibold"
                    onClick={() => {
                      navigate(`/register`);
                    }}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
