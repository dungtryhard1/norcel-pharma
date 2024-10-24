import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden bg-[#ECF1F6] font-mainFont md:block">
      <div className="container mx-auto mt-8 whitespace-nowrap py-4 text-sm font-medium text-mainColor">
        <div>
          <ul className="flex cursor-pointer justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/news">News & Research</Link>
            </li>
            <li>
              <Link to="/tips">Tips & Advice</Link>
            </li>
            <li>
              <Link to="/partners">Partners and Franchise</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
