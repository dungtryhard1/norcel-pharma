import {
  faAngleDown,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Dropdown, MenuProps, notification } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import flagImage from "../assets/images/flag.png";
import logoImage from "../assets/images/Logo.png";
import menuIcon from "../assets/images/menu.png";
import { logout } from "../redux/slice/userSlice";
import { RootState } from "../redux/store/Store";
import InputSearch from "./InputSeach";
import ModalMenu from "./ModalMenu";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import { openCartModal } from "../redux/slice/cartSlice";

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // menu modal in mobile mode

  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartTotalQuantity = useSelector(
    (state: RootState) => state.cart.cartTotalQuantity,
  );

  const username = useSelector((state: RootState) => state.user.username);
  const usernameLocalStorage = localStorage.getItem("username");

  const warning = () => {
    api.open({
      type: "warning",
      message: "You are logged out!",
      showProgress: true,
      duration: 5,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("username"); // Xóa username khỏi localStorage
    localStorage.removeItem("password");
    dispatch(logout());
    warning();
  };

  const handleLogin = (e: any) => {
    if (username || usernameLocalStorage) {
      e.preventDefault();
    } else {
      navigate("/login");
    }
  };

  //handle update tabs
  window.addEventListener("storage", () => {
    window.location.reload();
  });

  const items: MenuProps["items"] =
    username || usernameLocalStorage
      ? [
          {
            key: "1",
            label: (
              <Link
                className="min-w-28 py-1 font-medium text-mainColor"
                to="/profile"
              >
                Profile
              </Link>
            ),
          },
          {
            key: "2",
            label: (
              <Link
                className="min-w-28 py-1 font-medium text-mainColor"
                to="/"
                onClick={handleLogout}
              >
                Log out
              </Link>
            ),
          },
        ]
      : [];

  return (
    <>
      {contextHolder}
      <div className="bg-mainColor font-mainFont text-white">
        <div className="container mx-auto flex h-10 items-center gap-5">
          <marquee className="p-2.5 py-[7px] leading-[15px] md:w-full">
            <span className="flex items-center justify-start text-[12px] font-normal uppercase text-white">
              <span>SALE 30% ALL PRODUCTS</span>
              <div className="mx-[25px] h-[6px] w-[6px] rounded-full bg-[#ffffff59]"></div>
              <span className="text-[#FACC15]">free shipping on kr 35+</span>
              <div className="mx-[25px] h-[6px] w-[6px] rounded-full bg-[#ffffff59]"></div>
              <span>Up to 20% off Brands of the Week</span>
            </span>
          </marquee>
          <p className="whitespace-nowrap">
            {username || usernameLocalStorage || "You are not logged in"}
          </p>
          <div className="hidden items-center gap-2 md:flex">
            <div className="h-4 w-4">
              <img src={flagImage} />
            </div>
            <div className="text-[14px] font-normal">Norwegian</div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-[25px] flex items-center justify-between gap-5">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logoImage} />
        </div>
        <div className="flex gap-6">
          <InputSearch />
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-mainColor text-mainColor">
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              arrow
              trigger={["click"]}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="p-4"
                onClick={handleLogin}
              />
            </Dropdown>
          </div>
          <Badge count={cartTotalQuantity} offset={[-5, 5]}>
            <div
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-mainColor text-mainColor"
              onClick={() => dispatch(openCartModal())}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </Badge>
          <div
            className="flex items-center justify-center md:hidden"
            onClick={() => setShowModal(true)}
          >
            <img src={menuIcon} />
          </div>
        </div>
      </div>
      <Navbar />
      {/* Modal menu in mobile */}
      <ModalMenu showModal={showModal} setShowModal={setShowModal} />
      {/* Modal shopping cart */}
      <ShoppingCart />
    </>
  );
};

export default Header;
