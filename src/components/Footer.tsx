import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="container mx-auto mt-12 font-mainFont text-sm font-medium">
      <div className="border-b border-t border-[#D1D8DD] py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Logo và thông tin liên hệ */}
          <div className="lg:w-1/3">
            <img
              className="mb-6 cursor-pointer lg:mb-0"
              onClick={() => navigate("/")}
              src="/src/assets/images/Logo.png"
              alt="Logo Image"
            />
            <div className="my-4 flex flex-col">
              <span className="text-[#00205b]">Address</span>
              <span className="text-[#878690]">
                Tollbugata 115, 3041 Drammen, Norway
              </span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-[#00205b]">Email</span>
              <span className="text-[#878690]">firmapost@norselpharma.no</span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-[#00205b]">Phone Number</span>
              <span className="text-[#878690]">+4790995934</span>
            </div>
          </div>

          {/* Các mục liên kết */}
          <div className="grid grid-cols-2 gap-6 lg:w-2/3 lg:grid-cols-3">
            <ul className="flex flex-col gap-3">
              <li className="text-[#00205b]">Customer service</li>
              <li className="text-[#878690]">
                <Link to="/tips-advice">Tips & Advice</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/partners-franchise">Partners and Franchise</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/shipping-delivery">Shipping and delivery</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="text-[#00205b]">Useful Links</li>
              <li className="text-[#878690]">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/sales-conditions">Sales Conditions</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/recruitment">Recruitment</Link>
              </li>
            </ul>
            <ul className="hidden flex-col gap-3 lg:flex">
              <li className="text-[#00205b]">Member & Club</li>
              <li className="text-[#878690]">
                <Link to="/register">Register now!</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/winsolution-club">Winsolution Club</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/activities">Activities</Link>
              </li>
              <li className="text-[#878690]">
                <Link to="/faq">FAQ?</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[#878690]">
        Copyright Norsel Pharma 2024. All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
