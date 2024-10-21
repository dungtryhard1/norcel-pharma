import React, { useState } from "react";
import { Input } from "antd";
import "../scss/components/loginModal.scss";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsernameRedux } from "../redux/slice/userSlice";

const Login: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false); // remember password
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    dispatch(setUsernameRedux(username));

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }

    console.log("check", localStorage.getItem("username"));

    //reset form
    setUsername("");
    setPassword("");
    setRememberMe(false);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 500);
  };

  return (
    <div className="container mx-auto mt-10 rounded-md border border-mainColor p-5">
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
          <Button type="submit" className={`bg-mainColor text-base text-white ${loading ? "opacity-70" : ""}`}>
            Login {loading && <FontAwesomeIcon icon={faSpinner} />}
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

export default Login;
