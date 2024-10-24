import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import withAuth from "../HOC/withAuth";
import { setUsernameRedux } from "../redux/slice/userSlice";
import "../scss/components/loginModal.scss";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false); // remember password
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const success = () => {
    api.open({
      type: "success",
      message: "Login successfully",
      duration: 5,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    // Validation: Kiểm tra nếu username hoặc password trống
    if (username.trim() === "" || password.trim() === "") {
      api.error({
        message: "Please enter both username and password!",
        showProgress: true,
        duration: 3,
      });
      return;
    }

    // Validation: Kiểm tra nếu username hoặc password quá 50 ký tự
    if (password.length > 50) {
      api.error({
        message: "Username and password must not exceed 50 characters.",
        showProgress: true,
        duration: 3,
      });
      return;
    }

    // validation: có cả chữ và số
    if (!hasLetter || !hasNumber) {
      api.error({
        message: "Password must contain at least one letter and one number.",
        showProgress: true,
        duration: 3,
      });
      return;
    }

    setLoading(true);
    dispatch(setUsernameRedux(username));

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }

    //reset form
    setUsername("");
    setPassword("");
    setRememberMe(false);
    success();

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="container mx-auto mt-10 rounded-md p-5 shadow-2xl">
      {contextHolder}
      <p className="pb-6 text-center font-titleFont text-[40px]">Login</p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium" htmlFor="username">
            Username
          </label>
          <Input
            className="mt-2 w-full rounded-[4px] border border-[#9CA4AB] px-4 py-2 text-xs"
            placeholder="Username or Email address"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="py-8">
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <Input.Password
            className="mt-2 w-full rounded-[4px] border border-[#9CA4AB] px-4 py-2 text-xs"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="relative flex cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            <div className="flex h-5 w-5 items-center justify-center rounded-md border border-[#9CA4AB]">
              {rememberMe && (
                <svg
                  className="h-3 w-3 text-[#9CA4AB]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="ml-2 text-[12px] font-normal text-[#878690]">
              Remember me
            </span>
          </label>
          <p className="text-xs font-medium text-mainColor underline">
            Forgot Password
          </p>
        </div>
        <div className="py-6">
          <Button
            type="submit"
            className={`bg-mainColor text-base text-white ${loading ? "opacity-70" : ""}`}
          >
            Login {loading && <FontAwesomeIcon icon={faSpinner} spin />}
          </Button>
        </div>
      </form>
      <div className="flex justify-center gap-1 text-[12px] font-medium">
        <p className="font-normal text-[#878690]">Not a member?</p>
        <span className="font-semibold underline">Register</span>
      </div>
    </div>
  );
};

export default withAuth(Login);
