import React, { useState } from "react";

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number>(0); // Khai báo kiểu cho state

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0)); // Đảm bảo giá trị không âm
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value); // Chuyển đổi giá trị thành số
    if (!Number.isNaN(newValue)) {
      setValue(newValue); // Cập nhật giá trị nếu là số
    }
  };

  return (
    <div className="flex items-center rounded-md">
      <button
        className="rounded-l-md border border-[#9CA4AB] px-3 py-1 hover:bg-gray-300"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="text"
        value={value}
        onChange={handleChange} // Cho phép nhập số
        className="h-full w-10 border-b border-t border-[#9CA4AB] text-center outline-none p-[6px]"
      />
      <button
        className="rounded-r-md border border-[#9CA4AB] px-3 py-1 hover:bg-gray-300"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
