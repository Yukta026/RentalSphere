import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import useAuth from "../hooks/useAuth.jsx";
import LoadingSpinner from "../assets/LoadingSpinner.jsx";
// const LOGIN_URL = "http://localhost:3001/login";
// const IS_AUTH_URL = "http://localhost:3001/isUserAuth";
// const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

export default function Login() {
  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setAuth } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [pwd, setPwd] = useState("");
  // const [loginStatus, setLoginStatus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setErrMsg("");
    setUserEmailError("");
    setPasswordError("");
  }, [userEmail, pwd]);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      if (
        window.localStorage.getItem("role") &&
        window.localStorage.getItem("role") === "TENANT"
      ) {
        navigate(`/tenantdashboard`, {
          replace: true,
        });
      } else if (
        window.localStorage.getItem("role") &&
        window.localStorage.getItem("role") === "MANAGER"
      ) {
        navigate(`/managerdashboard`, {
          replace: true,
        });
      } else {
        navigate(`/`, {
          replace: true,
        });
      }
    }
  }, [navigate]);

  const validateInputs = () => {
    let isValid = true;
    const emailRegex = /^\S+@\S+\.\S+$/; // Regex for email validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Regex for password validation

    // Email validation
    if (!userEmail.trim()) {
      setUserEmailError("Please enter your email address");
      isValid = false;
    } else if (!emailRegex.test(userEmail)) {
      setUserEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Password validation
    if (!pwd.trim()) {
      setPasswordError("Please enter your password");
      isValid = false;
    } else if (!passwordRegex.test(pwd)) {
      setPasswordError(
        "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number"
      );
      isValid = false;
    }

    return isValid;
  };

  // const userAuthenticated = () => {
  //   Axios.get(IS_AUTH_URL, {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      // console.log("Hitting this code");
      return;
    }
    try {
      setIsLoading(true);
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await Axios.post(
        LOGIN_URL,
        {
          email: userEmail,
          password: pwd,
        },
        {
          headers: headers,
        }
      );
      // console.log(response?.data);
      // console.log(JSON.stringify(response.data));
      setIsLoading(false);

      if (!response.data.success) {
        // setLoginStatus(false);
        setErrMsg("Invalid username or password");
      } else {
        console.log(response.data);
        setAuth({
          // id: response.data.id,
          email: response.data.email,
          token: response.data.token,
          // role: response.data.roles[1],
        });
        // localStorage.setItem("token", response.data.token);
        // setLoginStatus(true);
        if (from && from !== "/") {
          navigate(from, {
            replace: true,
          });
        }
        // else if (auth && auth.role && auth.role === "TENANT") {
        //   navigate(`/tenantdashboard`, { replace: true });
        // } else if (auth && auth.role && auth.role === "MANAGER") {
        //   navigate(`/managerdashboard`, { replace: true });
        // }
        else {
          navigate(`/`, { replace: true });
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm justify-center justify-items-center text-center">
          <h1 className="font-bold text-4xl justify-self-auto mb-20">
            RentalSphere
          </h1>
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {isLoading ? (
          <div className="loadingCont flex justify-center items-center h-screen w-full">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              // method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  {/* <input
                    id="email"
                    name="email"
                    type="email"
                    // autoComplete="email"
                    required
                    className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      userEmailError ? "border-red-500" : ""
                    }`}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                    value={userEmail}
                  /> */}

                  <input
                    id="email"
                    name="email"
                    // type="email"
                    // autoComplete="email"
                    required
                    placeholder="john.doe@gmail.com"
                    className={`input input-bordered input-primary w-full ${
                      userEmailError ? "border-red-500" : ""
                    }`}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                    value={userEmail}
                  />

                  {userEmailError && (
                    <p className="text-red-500 text-sm mt-1">
                      {userEmailError}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    {/* <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a> */}
                  </div>
                </div>
                <div className="mt-2">
                  {/* <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      passwordError ? "border-red-500" : ""
                    }`}
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                    value={pwd}
                  /> */}

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="********"
                    className={`input input-bordered input-primary w-full ${
                      passwordError ? "border-red-500" : ""
                    }`}
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                    value={pwd}
                  />

                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  // onClick={login}
                >
                  Sign in
                </button>
              </div>
              {errMsg && <p className="text-red-500 text-sm mt-1">{errMsg}</p>}
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              New User?{" "}
              <Link
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                to={"/register"}
              >
                Register
              </Link>
            </p>
            {/* 
            {loginStatus && (
              <button onClick={userAuthenticated}>
                Check if authenticated
              </button>
            )} */}
          </div>
        )}
      </div>
    </>
  );
}
