import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";
import { Spin } from "antd";

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const username = useSelector((state: RootState) => state.user.username);
    const usernameLocalStorage = localStorage.getItem("username");

    useEffect(() => {
      if (username || usernameLocalStorage) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }, []);

    if (loading) {
      return (
        <div className="flex h-screen w-full items-center justify-center bg-red-400">
          <Spin size="large" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
