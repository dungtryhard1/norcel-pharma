import { useEffect, useState } from "react";
import closeImage from "../assets/images/close.png";
import logoImage from "../assets/images/Logo.png";
import flagImage from "../assets/images/flag.png";
import InputSearch from "./InputSeach";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";
import "../scss/components/modal.scss"

interface ModalMenuProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ showModal, setShowModal }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const username = useSelector((state: RootState) => state.user.username);
  const usernameLocalStorage = localStorage.getItem("username");

  const navigate = useNavigate();

  useEffect(() => {
    // Close modal when press Esc
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setShowModal]);

  const handleItemClick = (path: string) => {
    setHoveredItem(path);
    setTimeout(() => {
      setHoveredItem(null);
      setShowModal(false);
    }, 100);
  };

  const handleClickMyAccout = () => {
    setShowModal(false);
    navigate("/profile");
  };

  const handleLogin = () => {
    navigate("/login");
    setShowModal(false);
  };

  return (
    <div
      className={`modal-content fixed min-h-screen right-0 top-0 z-50 w-full bg-white font-mainFont shadow-lg transition-transform duration-300 ${
        showModal ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <button
        className="absolute right-6 top-9 text-mainColor"
        onClick={() => setShowModal(false)}
      >
        <img src={closeImage} alt="Close" />
      </button>

      {/* Content of the modal */}
      <div className="px-6 pt-9">
        <div>
          <img src={logoImage} alt="Logo" />
        </div>
        <InputSearch className="my-6 flex" />
        <div className="flex cursor-pointer flex-col">
          {[
            "/",
            "/about",
            "/products",
            "/news",
            "/partners",
            "/contact",
          ].map((path) => (
            <Link
              key={path}
              className={`border-b border-[#EFEFEF] pb-5 pt-3 ${hoveredItem === path ? "rounded-md bg-mainColor text-white" : ""}`}
              to={path}
              onClick={() => handleItemClick(path)}
            >
              {path === "/"
                ? "Home"
                : path
                    .substring(1)
                    .replace("-", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
          <div className="flex justify-between pb-20 pt-3">
            <p className="">Language</p>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4">
                <img src={flagImage} />
              </div>
              <div className="text-[14px] font-normal">Norwegian</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {usernameLocalStorage || username ? (
            <Button
              className="bg-mainColor text-white"
              onClick={handleClickMyAccout}
            >
              My Account
            </Button>
          ) : (
            <Button
              className="bg-mainColor text-white"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
