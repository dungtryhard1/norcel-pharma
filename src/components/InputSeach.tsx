import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge"; 

interface InputSearchProps {
  className?: string; 
}

const InputSeach: React.FC<InputSearchProps> = ({ className }) => {
  return (
    <div className={twMerge(`hidden font-mainFont md:flex`, className)}>
      <input
        className="rounded-bl-[4px] rounded-tl-[4px] border border-[#BFC6CC] bg-[#F6F6F6] px-4 py-3 text-xs font-medium w-[540px] md:w-[400px] sm:w-[300px]"
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
