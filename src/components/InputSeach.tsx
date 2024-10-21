import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputSeach = () => {
  return (
    <div className="md:flex hidden font-mainFont">
      <input
        className="w-[540px] rounded-bl-[4px] rounded-tl-[4px] border border-[#BFC6CC] bg-[#F6F6F6] px-4 py-3 text-xs font-medium"
        type="text"
        placeholder="Search"
      />
      <button className="rounded-br-[4px] rounded-tr-[4px] bg-mainColor px-[15px] text-white">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default InputSeach;
