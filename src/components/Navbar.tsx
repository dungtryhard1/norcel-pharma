import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="bg-[#ECF1F6] font-mainFont hidden md:block">
        <div className="container mx-auto flex text-mainColor text-sm font-medium whitespace-nowrap justify-between">
            <div className="py-4"><FontAwesomeIcon icon={faBars} /></div>
            <div className="py-4"><span>Home</span></div>
            <div className="py-4"><span>About us</span></div>
            <div className="py-4"><span>Products</span></div>
            <div className="py-4"><span>News & research</span></div>
            <div className="py-4"><span>Tips & advice</span></div>
            <div className="py-4"><span>Partners and Franchise </span></div>
            <div className="py-4"><span>Contact us</span></div>
        </div>
    </div>
  )
};

export default Navbar;
