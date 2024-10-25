import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden bg-[#ECF1F6] font-mainFont md:block">
      <div className="container mx-auto mt-8 py-4 whitespace-nowrap text-sm font-medium text-mainColor">
        <div>
          <ul className="flex cursor-pointer justify-between">
            <li>
              <Link className="p-4" to="/">Home</Link>
            </li>
            <li>
              <Link className="p-4" to="/about">About Us</Link>
            </li>
            <li>
              <Link className="p-4" to="/products">Products</Link>
            </li>
            <li>
              <Link className="p-4" to="/news">News & Research</Link>
            </li>
            <li>
              <Link className="p-4" to="/partners">Partners and Franchise</Link>
            </li>
            <li>
              <Link className="p-4" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
